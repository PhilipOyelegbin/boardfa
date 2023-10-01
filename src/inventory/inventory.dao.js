const inventoryModel = require("./inventory.model")


const getAllInventory = () => inventoryModel.find({})

const getOneInventory = async (id) => inventoryModel.findById({_id: id});

const createInventory = (newInventory) => inventoryModel.create(newInventory)

const updateInventory = (id, newData) => inventoryModel.findByIdAndUpdate(
  {_id: id},
  newData,
  {new: true, runValidators: true}
)

const deleteInventory = (id) => inventoryModel.findByIdAndDelete({_id: id})


module.exports = {
  getAllInventory,
  getOneInventory,
  createInventory,
  updateInventory,
  deleteInventory
}