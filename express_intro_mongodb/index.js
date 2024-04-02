const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://tkfm:shoyushioniboshi@tkfm.cokifdf.mongodb.net/blogUserDatabase?retryWrites=true&w=majority&appName=tkfm")
  .then(()=>{console.log("Success:ConnectedtoMongoDB")})
  .catch((error)=>{console.error("Failure:UnconnectedtoMongoDB")})

app.get("/", (req, res) => {
  res.send("こんにちは")
})

app.get("/blog/create", (req, res) => {
  res.sendFile(__dirname + "/views/blogCreate.html")
})
