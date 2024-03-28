const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("こんにちは")
})

app.get("/blog/create", (req, res) => {
  res.sendFile(__dirname + "/views/blogCreate.html")
})

app.post("/blog/create", (req, res) => {
  console.log("reqの中身", req.body)
  res.send("ブログデータを投稿しました")
})

app.listen(5051, () => {
  console.log("Listening on localhost port 5051")
})