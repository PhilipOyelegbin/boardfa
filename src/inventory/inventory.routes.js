const {Router} = require("express")
const {getAllInventory, getOneInventory, createInventory, updateInventory, deleteInventory} = require("./inventory.controller")


const router = Router()

router.route("/").get(getAllInventory).post(createInventory)

router.route("/:id").get(getOneInventory).patch(updateInventory).delete(deleteInventory)


module.exports = router