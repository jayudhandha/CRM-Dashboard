var bodyParser = require('body-parser')
const express = require('express')
const authRoute = express.Router()
const User = require('../models/user-schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
  User.findOne({email: req.body.email}).then(user => {
    if(!user) {
      res.status(404).json({
        message: "User does not exist"
      })
    }
    return user;
  }).then(fetcheduser => {
    console.log("User found: "+ JSON.stringify(fetcheduser))
    bcrypt.compare(req.body.password, fetcheduser.password).then(passMatch => {
      if(passMatch) {
        let token = jwt.sign({ email: req.body.email }, 'mu_secret', { expiresIn: '1h' });

        res.status(200).json({
          message: "Login Successful",
          token: token
        })
      }

      res.status(403).json({
        message: "Invalid username/password"
      })
    })
  })

  // Logic needs to be added

})

module.exports = authRoute
