import connect from "../../db.js";

const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//--register/auth
//register user
router.post("/users", async (req, res) => {
  let db = await connect();
  let result;
  let user = req.body;
  let userData = {
    username: user.username,
    password: user.password,
  };
  console.log("received data: ");
  console.log(userData);

  try {
    result = await db.collection("users").insertOne(userData);
    res.status(201).send();
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

//authenticate user
router.post("/auth", async (req, res) => {
  let db = await connect();
  let user = req.body;

  try {
    let dbuser = await db.collection("users").findOne({ username: user.username });
    if (dbuser && dbuser.password == user.password) {
      res.status(200).json(dbuser.username);
    } else {
      res.status(401).send();
      throw new Error("Authentication failed - wrong username or password");
    }
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

//--CRUD - create,read, update, delete
//get
router.get("/dentist", async (req, res) => {
  let collection = await loadCollection("dentist");
  let data = await collection.find({}).toArray();
  res.send(data);
  logReqRes(req, data);
});

//add dentist
router.post("/dentist", async (req, res) => {
  let db = await connect();
  let data = {
    name: req.body.name,
    years: req.body.years,
    location: req.body.location,
    selfDescription: req.body.selfDescription,
    initalRating: 3.0,
  };
  await db.collection("dentist").insertOne(data);
  res.status(201).send();
  logReqRes(req, data);
});

//delete
router.delete("/:id", async (req, res) => {
  let db = await loadCollection("newCollection");
  await db.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadCollection(collectionName) {
  let db = await connect();
  return db.collection(collectionName);
}

function logReqRes(req, res) {
  console.log("JSON-REQ: ");
  console.log(req.body);
  console.log("JSON-RES: ");
  console.log(res);
}
module.exports = router;
