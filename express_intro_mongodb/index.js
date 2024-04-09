const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require("mongoose")
const session = require("express-session")
const routers = require("./routes")

app.set("view engine", "ejs")
app.use("/public", express.static("public"))

// Session
app.use(session({
  secret: "secretKey",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 300000 },
}))

mongoose.connect("mongodb+srv://tkfm:shoyushioniboshi@tkfm.cokifdf.mongodb.net/blogUserDatabase?retryWrites=true&w=majority&appName=tkfm")
  .then(() => {
    console.log("Success:ConnectedtoMongoDB")
  })
  .catch((error) => {
    console.error("Failure:UnconnectedtoMongoDB")
  })

app.use(routers)

// Page Notfound
app.get("*", (req, res) => {
  res.render("error", {message: "ページが存在しません"})
})

// Connection to port
const port = process.env.PORT || 5051
app.listen(port, () => {
  console.log(`Listening on localhost port ${port}`)
})
