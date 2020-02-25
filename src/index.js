import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
// import { typeDefs, resolvers } from './schema';


const server = async () => {
  const app = express()

  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  apolloServer.applyMiddleware({ app }) // app is express app

  // const mongoose = require('mongoose');
  // mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

  // const Cat = mongoose.model('Cat', { name: String });

  // const kitty = new Cat({ name: 'Zildjian' });
  // kitty.save().then(() => console.log('meow'));

  app.listen({ port: 4000 }, () => {
    console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}

server()