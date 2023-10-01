const inventoryService = require("./inventory.service")


const getAllInventory = async(req, res) => {
  try {
    const userData = req.claims
    if(!userData.email) {
      return res.status(400).send({message: "User email not available..."})
    }
    const inventory = await inventoryService.getAllInventory()
    if(!inventory) {
      return res.status(409).send({message: "Unable to get inventory...try agin later"})
    }
    return res.status(200).send({message: "All inventory found", inventory})
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
}

const getOneInventory = async(req, res) => {
  try {
    const userData = req.claims
    if(!userData.email) {
      return res.status(400).send({message: "User email not available..."})
    }
    const id = req.params.id
    if(!id) {
      return res.status(400).send({message: "The ID is required"})
    }
    const inventory = await inventoryService.getOneInventory(id)
    if(!inventory) {
      return res.status(404).send({message: "The inventory with the provided ID not found"})
    }
    return res.status(200).send({message: "The inventory with the provided ID found", inventory})
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
}

const createInventory = async(req, res) => {
  try {
    const userData = req.claims
    if(!userData.email) {
      return res.status(400).send({message: "User email not available..."})
    }
    const {product_name, description, price} = req.body
    if(!(product_name, description, price)) {
      return res.status(400).send({message: "All fields are required"})
    }
    const inventory = await inventoryService.createInventory(req.body)
    if(!inventory) {
      return res.status(409).send({message: "Unable to create inventory...try agin later"})
    }
    return res.status(201).send({message: "New inventory created successfully", inventory})
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
}

const updateInventory = async(req, res) => {
  try {
    const userData = req.claims
    if(!userData.email) {
      return res.status(400).send({message: "User email not available..."})
    }
    const id = req.params.id
    if(!id) {
      return res.status(400).send({message: "The ID is required"})
    }
    const inventory = await inventoryService.updateInventory(id, req.body)
    if(!inventory) {
      return res.status(404).send({message: "Inventory with the provided ID not found"})
    }
    return res.status(200).send({message: "Inventory updated successfully", inventory})
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
}

const deleteInventory = async(req, res) => {
  try {
    const userData = req.claims
    if(!userData.email) {
      return res.status(400).send({message: "User email not available..."})
    }
    const id = req.params.id
    if(!id) {
      return res.status(400).send({message: "The ID is required"})
    }
    const inventory = await inventoryService.deleteInventory(id)
    if(!inventory) {
      return res.status(404).send({message: "Inventory with the provided ID not found"})
    }
    return res.status(200).send({message: "Inventory deleted successfully", inventory})
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
}


module.exports = {
  getAllInventory,
  getOneInventory,
  createInventory,
  updateInventory,
  deleteInventory
}