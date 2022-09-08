import mongo from "mongodb"
let connection_string = "mongodb+srv://admin:admin@cluster0-taqfi.mongodb.net/test?retryWrites=true&w=majority"; //change db connect string

let client = new mongo.MongoClient(connection_string,{
    useNewUrlParser : true,
    useUnifiedTopology : true

})

let db = null;

export default () => {
    return new Promise((resolve,reject)=>{

        if(db && client.isConnected()){
            resolve(db);
        }

        client.connect(err =>{
            if(err){
                reject("doslo je do greske prilikom spajanja: " + err)
            }
            else{
                console.log("uspjesno spajanje");
                db = client.db("rexgangtest") //change db name
                resolve(db);
            }
        })

    })
}