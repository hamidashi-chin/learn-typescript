// index.js

const fs = require('fs');
const express =  require("express");
const app = express();
app.use(express.urlencoded({ extends: true }));

coronaData = require("./coronaData.json");

app.get("/", function (req, res) {
  console.log("__dirnameの中身", __dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
  fs.writeFile(__dirname + "/data.txt", req.body.activity, function () {
    res.send("投稿完了");
  });
});

app.listen(5000, function() {
  console.log("Listening on localhost port 5000");
});