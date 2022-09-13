const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

//route definitions
const implementation = require("./routes/api/post.js");
app.use("/api/post", implementation);

//handle production mode
if (process.env.NODE_ENV === "production") {
  //static folder
  app.use(express.static(__dirname + "/public/"));

  //handle single page app
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//server or localhost
const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL;
app.listen(port, () => console.log(`server started on port ${port}`));
