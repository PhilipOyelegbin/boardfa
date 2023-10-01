const userModel = require("./user.model")


const getAllUser = () => {
  return userModel.find({})
  .then(user => {
    return user;
  })
  .catch(error => {
    throw error;
  });
}

const getOneUser = async (email) => {
  try {
    const user = await userModel.findOne({email});
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = (newUser) => userModel.create(newUser)

const updateUser = (email, userData) => userModel.findOneAndUpdate(
  {email},
  userData,
  {new: true, runValidators: true}
)

const deleteUser = (email) => userModel.findOneAndDelete({email})


module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}