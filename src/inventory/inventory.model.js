const {Schema, model} = require("mongoose")


const inventorySchema = new Schema({
  product_name: {
    type: String,
    require: [true, "product name is required"],
    maxlength: [100, "max number of 100 characters"]
  },
  description: {
    type: String,
    require: [true, "description is required"],
    maxlength: [225, "max number of 225 characters"]
  },
  price: {
    type: String,
    require: [true, "email is required"],
  }
}, {timestamps: true})

const inventoryModel = model("fa_inventory", inventorySchema)

module.exports = inventoryModel