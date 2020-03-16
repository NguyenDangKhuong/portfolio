import * as dotenv from "dotenv";
import { ApolloServer, gql } from 'apollo-server-express';
import pageApis from './routes/apis/page'
import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import graphqlHTTP from 'express-graphql'
import { schema } from './graphql'

dotenv.config(); // load enviroment variable from .env to process.env

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000

const app = express()

app.use(helmet())  // helmet là một collection của 14 middleware function nhỏ mà nó thiết đặt các HTTP Response Headers. Liên kết helmet() không gồm tất cả các middleware function này, nhưng cung cấp các giá trị mặc định như DNS Prefetch Control, Frameguard, Hide Powered-By, HSTS, IE No Open, Don’t Sniff Mimetype và XSS Filter.

app.use(cors()) // cho phép các CORS request bằng method cors()

app.use(express.json()) //cho phep các CORS request bằng method cors(). Sau đó, 

app.use(bodyParser.json())

// mongo db conection
const db = require('./config/db').database

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Data connnected sucessfully')
}).catch(err => console.log('Unable connect with data base', err))

// apply graphql 
const apolloServer = new ApolloServer({ 
  schema 
});

apolloServer.applyMiddleware({ 
  app: app, // app is express app
  cors: {
    origin: true,
    credentials: true,
    methods: ['POST'],
    allowedHeaders: [
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
  }
})

app.get('/', (req, res) => {
  res.send('<h1> Hello world </h1>')
})

app.use('/api/pages', pageApis)

app.listen({ port }, () => {
  console.log(`🚀  Server ready at http://localhost:${port}`)
})