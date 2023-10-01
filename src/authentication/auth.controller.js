const userService = require("../users/user.service")
const {verifyUser, createJWT} = require("./auth.service")


const registerUser = async (newUser) => userService.createUser(newUser)

const loginUser = async (userDetails) => {
  const foundUser = await userService.getOneUser(userDetails.email)
  if(!foundUser) {
    return null
  } else {
    const userVerified = verifyUser(userDetails, foundUser)
    if(userVerified === true) {
      return createJWT(foundUser)
    } else {
      return null
    }
  }
}


module.exports = {
  registerUser,
  loginUser
}