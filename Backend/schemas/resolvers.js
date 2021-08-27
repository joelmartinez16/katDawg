const { AuthenticationError } = require('apollo-server-express')
const { User, Index, Adoption, Products  } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => { 
      if (context.user) {
          return await User.findOne({_id: context.user._id});
      }
      throw new AuthenticationError('You need to be logged in!');
  },
},
  Mutation: {
    
    login: async (parent, {email, password}) => { 
        const user = await User.findOne({email});
        if (!user) {
            throw new AuthenticationError('No user found with this email!');
        }
        const correctPW = await user.isCorrectPassword(password);

        if (!correctPW) {
            throw new AuthenticationError('Incorrect credentials!');
        }

       
    },
    
    addUser: async (parent, {username, email, password}) => { 
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
    },
}
}

module.exports = resolvers;
