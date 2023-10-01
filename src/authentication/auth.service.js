const jwt = require("jsonwebtoken")
require("dotenv").config()


function verifyUser({email, password}, userData){
  if(userData === undefined){
    return false
  }
  else {
    if(email === userData.email && password === userData.password) {
      return true;
    } else {
      return false
    }
  }
}

function createJWT(userData) {
  const payload = {
    role: "USER",
    email: userData.email,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 3600,
  })
  return token;
}


module.exports = {
  verifyUser,
  createJWT
}