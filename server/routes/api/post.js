import connect from "../../db.js";

const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//get posts (Read)
router.get("/test", async (req, res) => {
  let collection = await loadCollection("newCollection");
  res.send(await collection.find({}).toArray());
});

//add post
router.post("/test", async (req, res) => {
  let db = await connect();
  let data = {
    name: "name",
    surname: "surname",
    date: Date.now(),
  };

  await db.collection("newCollection").insertOne(data);

  res.status(201).send();
});

//delete post
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
