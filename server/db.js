import mongo from "mongodb";
let connection_string = "mongodb+srv://lucija_d:admin@cluster0.mmus2na.mongodb.net/?retryWrites=true&w=majority";

let client = new mongo.MongoClient(connection_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = null;

export default () => {
  return new Promise((resolve, reject) => {
    if (db && client.isConnected()) {
      resolve(db);
    }

    client.connect((err) => {
      if (err) {
        reject("Failed to connect: " + err);
      } else {
        console.log("Connected successfully");
        db = client.db("dwaprojekt");
        resolve(db);
      }
    });
  });
};
