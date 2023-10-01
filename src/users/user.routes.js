const {Router} = require("express")
const {getAllUser, getOneUser, createUser, updateUser, deleteUser} = require("./user.controller")

const router = Router()

router.route("/").get(getAllUser).post(createUser)

router.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser)

module.exports = router