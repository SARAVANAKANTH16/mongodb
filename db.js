const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;
//const mongoose = require('mongoose');

let database;

async function getDatabase(){
    //await use for get connect it take long time also
    const client= await MongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('library');

    if(!database){
        console.log('Database not connected');

   }
   return database;
   /*mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(()=>{
        console.log("Database conneted");
    }).catch(()=>{
        console.log('database connection error')
    })*/

}
module.exports={ 
    getDatabase,
    ObjectID
}