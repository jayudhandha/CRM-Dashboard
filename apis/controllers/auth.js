const User = require('../models/user-schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.loginUser = (req, res) => {
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
        let token = jwt.sign({ email: req.body.email, userId: fetcheduser._id }, 'mu_secret', { expiresIn: '1h' });

        res.status(200).json({
          message: "Login Successful",
          token: token,
          expiresIn: 3600,
          userId: fetcheduser._id
        })
      }

      res.status(403).json({
        message: "Invalid username/password"
      })
    })
  }).catch(error => {
    res.status(500).json({
      message: "Error on server side, Please try later."
    })
  })
}

exports.signUpUser = (req, res) => {
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
}
