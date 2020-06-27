var bodyParser = require('body-parser')
const express = require('express')
const authRoute = express.Router()
const User = require('../models/user-schema')
const bcrypt = require('bcrypt')

var jsonParser = bodyParser.json()

authRoute.post('/signup', jsonParser, (req, res) => {
  console.log("SignUp : " + JSON.stringify(req.body))

  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    })

    console.log("Hash Value: " + hash);

    user.save().then(createdUser => {
      res.status(201).json({
        message: "User created",
        user: createdUser
      })
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
  })
})

authRoute.post('/login', jsonParser, (req, res) => {
  console.log("Login Credentials : " + JSON.stringify(req.body))

  // Logic needs to be added

})

module.exports = authRoute
