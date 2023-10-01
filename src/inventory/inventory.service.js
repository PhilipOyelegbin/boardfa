const inventoryDao = require("./inventory.dao")


const getAllInventory = () => inventoryDao.getAllInventory()

const getOneInventory = (id) => inventoryDao.getOneInventory(id)

const createInventory = (newInventory) => inventoryDao.createInventory(newInventory)

const updateInventory = (id, newData) => inventoryDao.updateInventory(id, newData)

const deleteInventory = (id) => inventoryDao.deleteInventory(id)


module.exports = {
  getAllInventory,
  getOneInventory,
  createInventory,
  updateInventory,
  deleteInventory
}