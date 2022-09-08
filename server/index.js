const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());


//first route
const post = require('./routes/api/post.js');
app.use('/api/post',post)


//server or localhost
const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL;
app.listen(port,()=>console.log(`server started on ${baseURL} port ${port}`));
