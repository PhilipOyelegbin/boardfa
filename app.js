const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
require("dotenv").config()

const db = require("./src/config/db")
const authRouter = require("./src/authentication")
const userRouter = require("./src/users")
const inventoryRouter = require("./src/inventory")
const verifyToken = require("./src/authentication/auth.middleware")

const app = express()

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html', 'htm', 'css', 'js'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

// middleware
app.use(express.json())
app.use(express.static('public', options))
app.use(express.urlencoded({extended: false}))
app.use(helmet())
app.use(cors({origin: ["http://localhost:4000/*", "https://boardfa.vercel.app/*"]}))

// Routes
//app.get("/", (req, res) => {
//  res.status(200).sendFile(__dirname + "/public/index.html")
//})

app.use("/auth", authRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/inventory", verifyToken, inventoryRouter)

app.get("/*", (req, res) => {
  res.status(404).send(`<h1>Route not found!!!</h1>`)
})

const server = () => {
  db(process.env.DB_URI)
  app.listen(process.env.API_PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.API_PORT}`)
  })
}

server()
