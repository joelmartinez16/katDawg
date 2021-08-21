const express = require('express');
// const path = require('path');
// const { ApolloServer } = require('apollo-server-express');
require("dotenv").config()
const connectionDB = require('./config/connection') 
connectionDB();

// const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });


  app.listen(PORT, () => {
    console.log(` server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

