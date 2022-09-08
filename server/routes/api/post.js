import connect from '../../db.js'

const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();


// route '/' functions
//Basic CRUD functions (Create,Read,Update,Delete)


//add one post (Create)
router.post('/', async (req,res) => {
    let post = await loadTestCollection();
    await post.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })

    res.status(201).send();
})

//get posts (Read)
router.get('/', async (req,res) => {
    let post = await loadTestCollection();
    res.send(await post.find({}).toArray()) //get everything {}
   
})

router.get('/test', async (req,res) => {
    console.log("test konzole radi");
    res.send("radi");
   
})

//delete (use id in API as parameter to delete certain document in collection)
router.delete('/:id', async (req,res) => {
    let post = await loadTestCollection();
    await post.deleteOne( {_id: new mongodb.ObjectID(req.params.id)} );
    res.status(200).send();
})


//load collection for certain API
//ALWAYS change collection parameter when adding new API!
async function loadTestCollection(){
    let db = await connect();
    return db.collection('test');
}
module.exports = router;