//import jsonwebtoken and config
const jwt = require("jsonwebtoken")
require("dotenv").config()

//This function verifyToken will verify the token coming from headers
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if(!token) {
    return res.status(403).send("Token is required for authentication")
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.claims = decoded
  } catch (error) {
    return res.status(401).send("Invalid token")
  }
  return next();
};

module.exports = verifyToken;