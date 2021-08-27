//Setting up the server 
const express = require('express');
require("dotenv").config();
const connectionDB = require('./config/connection') ;
const app = express();
const PORT = process.env.PORT || 3001;  
const bodyParser = require("body-parser"); 
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers, index } = require('./schemas');
const { authMiddleware } = require('./utils/auth');


//Setting up the routes 
const userRoutes = require('./routes/api/user-routes');

//Setting up constant for the server  

app.use(express.json());

app.use('/api',userRoutes); 




  app.listen(PORT, () => {
    console.log(` server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

  