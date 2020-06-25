var bodyParser = require('body-parser')
const express = require('express')
const authRoute = express.Router()

var jsonParser = bodyParser.json()

authRoute.post('/signup', jsonParser, (req, res) => {
  console.log("SignUp : " + JSON.stringify(req.body))
  res.status(200).json({
    message: "User created"
  })
})

module.exports = authRoute
