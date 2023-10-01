const {Schema, model} = require("mongoose")

const userSchema = new Schema({
  first_name: {
    type: String,
    require: [true, "first name is required"],
    maxlength: [50, "max number of 50 characters"]
  },
  last_name: {
    type: String,
    require: [true, "last name is required"],
    maxlength: [50, "max number of 50 characters"]
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: [true, "email is unique"],
    index: true
  },
  password: {
    type: String,
    require: [true, "password is required"],
    minlength: [6, "min number of 6 characters"]
  }
}, {timestamps: true})

const userModel = model("fa_users", userSchema)

module.exports = userModel