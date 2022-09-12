import connect from "../../db.js";

const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//--register/auth
//register user
router.post("/users", async (req, res) => {
  let db = await connect();
  let user = req.body;
  let userData = {
    username: user.username,
    password: user.password,
  };

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
//get all dentist from db
router.get("/dentist", async (req, res) => {
  let collection = await loadCollection("dentist");
  let data = await collection.find({}).toArray();
  res.send(data);
});

//add one dentist into collection
router.post("/dentist", async (req, res) => {
  let db = await connect();
  let userInput = req.body;
  let data = {
    name: userInput.name,
    years: userInput.years,
    location: userInput.location,
    description: userInput.description,
    externalLink: userInput.externalLink,
    sex: userInput.sex,
    comments: [],
  };
  await db.collection("dentist").insertOne(data);
  res.status(201).send();
});

//post comment
router.patch("/rateComment", async (req, res) => {
  let db = await connect();
  let data = req.body;

  console.log(data);

  let dentist = await db.collection("dentist").findOne({ _id: new mongodb.ObjectId(data._id) });
  let newComments = dentist.comments;
  newComments.push(data.comment);

  try {
    await db.collection("dentist").updateOne(
      { _id: mongodb.ObjectId(data._id) },
      {
        $set: { comments: newComments },
      }
    );
    dentist = await db.collection("dentist").findOne({ _id: new mongodb.ObjectId(data._id) });
    res.status(200).send();
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
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

module.exports = router;
