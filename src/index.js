import { ApolloServer, gql } from 'apollo-server-express';
import pageApis from './routes/apis/page'
import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import graphqlHTTP from 'express-graphql'

// import { typeDefs, resolvers } from './schema'; 

const port = process.env.PORT || 4000

const app = express()

app.use(cors())

app.use(bodyParser.json())

// mongo db conection

const db = require('./config/db').database

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Data connnected sucessfully')
}).catch(err => console.log('Unable connect with data base', err))

// apply graphql 

const apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.applyMiddleware({ app }) // app is express app

app.use('/graphqlt', graphqlHTTP({
  schema,
  graphiql: true
}))

app.get('/', (req, res) => {
  res.send('<h1> Hello world </h1>')
})

app.use('/api/pages', pageApis)

app.listen({ port }, () => {
  // console.log(`🚀  Server ready at http://localhost:4000${server.graphqlPath}`)
})