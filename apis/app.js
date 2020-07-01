const express = require('express')
const mongoose = require('mongoose')
const exApp = express()
const stdRoute = require('./routes/student')
const authRoute = require('./routes/auth')

// Middleware
exApp.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
})

// const uri = 'mongodb+srv://<USER>:<PASS>@mean-cluster-02u1x.mongodb.net/marwadi?retryWrites=true&w=majority'

const uri = 'mongodb+srv://kod:iWWKEZEpJd674WUj@cluster0-02u1x.mongodb.net/marwadi?retryWrites=true&w=majority'

mongoose
  .connect(
    uri
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

exApp.use('/api', stdRoute);
exApp.use('/auth', authRoute)

module.exports = exApp


