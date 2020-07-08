const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1]

    const decodedToken = jwt.verify(token, 'mu_secret')
    // console.log("DecodedToken: "+ JSON.stringify(decodedToken));
    req.userData = decodedToken;
    next();

  } catch (error) {
    res.status(401).json({
      message: "Invalid token"
    })
  }

}
