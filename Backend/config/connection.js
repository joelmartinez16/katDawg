
/*Setting up the connections for the mongoose*/ 

const mongoose = require('mongoose');

const connectionDB = async () =>{ 
  try{ 
   await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/katdawg_db",{ 
     useNewUrlParser: true, 
     useUnifiedTopology:true
   });
   
   console.log("MongoDB connection was succesfull!!!")

  }catch(error){  
    console.log(error)
   console.error("MongoDB connection was a fail!!"); 
   process.exit(1)
  }
}


module.exports = connectionDB;
