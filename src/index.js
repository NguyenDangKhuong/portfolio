import { ApolloServer, gql } from 'apollo-server-express';
import pageApis from './routes/apis/page'
import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'

// import { typeDefs, resolvers } from './schema'; 

const port = process.env.PORT || 4000

const app = express()

const db = require('./config/db').database

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Data connnected sucessfully')
}).catch(err => console.log('Unable connect with data base', err))

app.use(cors())

app.use(bodyParser.json())
// const apolloServer = new ApolloServer({ typeDefs, resolvers });

// apolloServer.applyMiddleware({ app }) // app is express app

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/index.html'))
// })

app.get('/', (req, res) => {
  res.send('<h1> Hello world </h1>')
})

app.use('/api/pages', pageApis)

app.listen({ port }, () => {
  // console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})