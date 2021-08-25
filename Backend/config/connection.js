
/*Setting up the connections for the mongoose*/ 

const mongoose = require('mongoose');

const connectionDB = async () =>{ 
  try{ 
   await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/katdawg_db",{ 
     useNewUrlParser: true, 
     useUnifiedTopology:true, 
     useCreateIndex:true 
   });
   
   console.log("MongoDB connection was succesfull!!!")

  }catch(error){  
    console.log(error)
   console.error("MongoDB connection was a fail!!"); 
   process.exit(1)
  }
} 

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://User_30:<BASEBALL1234@@>@katdawg01.4kija.mongodb.net/katDawg?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


module.exports = connectionDB;
