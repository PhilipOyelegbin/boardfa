const {Router} = require("express")
const authController = require("./auth.controller")


const router = Router()

router.post("/register", async(req, res) => {
  try {
    const {first_name, last_name, email, password} = req.body
    if(!(first_name, last_name, email, password)) {
      return res.status(400).send({message: "All fields are required"})
    }
    await authController.registerUser(req.body).then(user =>
      res.status(201).send({message: "New user added successfully", user})
    ).catch(err =>
      res.status(409).send({message: err})
    )
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
})

router.post("/login", async(req, res) => {
  try {
    const {email, password} = req.body
    if(!(email && password)) {
      return res.status(400).send({message: "All fields are required"})
    }
    const user = await authController.loginUser(req.body)
    if(!user) {
      return res.status(403).send({message: "User authentication failed... input the right details"})
    }
    return res.status(200).send({message: "The user has been authenticated", user})
  } catch (error) {
    return res.status(500).send({error: error.message})
  }
})


module.exports = router