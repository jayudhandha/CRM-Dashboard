var bodyParser = require('body-parser')
const express = require('express')
const authRoute = express.Router()
const UserController = require('../controllers/auth')

var jsonParser = bodyParser.json()

authRoute.post('/signup', jsonParser, UserController.signUpUser)

authRoute.post('/login', jsonParser, UserController.loginUser)

module.exports = authRoute
