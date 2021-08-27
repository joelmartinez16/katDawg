//Setting up the server 
const express = require('express');
//require("dotenv").config();
const db = require('./config/connection'); 
const app = express();
const PORT = process.env.PORT || 3001;  
const bodyParser = require("body-parser"); 
const server = new ApolloServer({
  typeDef,
  resolvers
});

server.applyMiddleware({app});

/*const { ApolloServer } = require('apollo-server-express');*/
const { typeDefs, resolvers, index } = require('./schemas');
const { authMiddleware } = require('./utils/auth');


//Setting up the routes 
const userRoutes = require('./routes/api/user-routes');
const productRoutes = require('./routes/api/product-routes');
//const { ApolloServer } = require('apollo-server-express');
//Setting up constant for the server  

app.use(express.json());

app.use('/api',userRoutes);   
app.use('/api',productRoutes);





  app.listen(PORT, () => {
    console.log(` server running on port ${PORT}!`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

  