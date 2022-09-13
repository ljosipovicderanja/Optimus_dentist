import connect from "../../db.js";

const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//--register/auth
//register user
router.post("/users", async (req, res) => {
  let db = await loadCollection("users");
  let user = req.body;
  let userData = {
    username: user.username,
    password: user.password,
  };

  try {
    let result = await db.insertOne(userData);
    if (result) {
      res.status(201).send();
    }
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
      db.resolve();
      res.status(401).send();
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
  let db = await loadCollection("dentist");
  try {
    let data = await db.find({}).toArray();
    res.send(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
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
  try {
    await db.collection("dentist").insertOne(data);
    res.status(201).send();
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
});

//post comment
router.patch("/rateComment", async (req, res) => {
  let db = await connect();
  let data = req.body;

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
    res.status(200).send(dentist);
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

//delete
//no usage
router.delete("/:id", async (req, res) => {
  let db = await loadCollection("newCollection");
  try {
    await db.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
  } catch (e) {
    db.resolve();
    console.log(e);
    res.status(500).json({
      error: e.message,
    });
  }
});

async function loadCollection(collectionName) {
  let db = await connect();
  return db.collection(collectionName);
}

module.exports = router;
