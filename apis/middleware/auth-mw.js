const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    let token = req.header.authorization().split(" ")[1]
    jwt.verify(token, 'mu_secret')
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    })
  }

}
