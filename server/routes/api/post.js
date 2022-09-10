import connect from "../../db.js";

const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

//get posts (Read)
router.get("/test", async (req, res) => {
  let collection = await loadCollection("users");
  res.send(await collection.find({}).toArray());
});

async function loadCollection(collectionName) {
  let db = await connect();
  return db.collection(collectionName);
}
module.exports = router;
