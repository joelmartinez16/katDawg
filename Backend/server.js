//Setting up the server 
const express = require('express');
require("dotenv").config()
const connectionDB = require('./config/connection') 
connectionDB();
const app = express();
const PORT = process.env.PORT || 3001;  
const bodyParser = require("body-parser"); 

//Setting up the routes 
const userRoutes = require('./routes/api/user-routes');

//Setting up constant for the server  

app.use(express.json());

app.use('/api',userRoutes); 




  app.listen(PORT, () => {
    console.log(` server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

