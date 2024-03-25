// index.js

const fs = require('fs');
const express =  require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
const activities = require("./activities.json");

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

app.get("/update", function (req, res) {
  console.log(activities[0].activity);
  res.send(activities);
});

app.listen(5050, function() {
  console.log("Listening on localhost port 5050");
});