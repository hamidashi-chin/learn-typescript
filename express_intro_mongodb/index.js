const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require("mongoose")

app.set("view engine", "ejs")
app.use("/public", express.static("public"))

mongoose.connect("mongodb+srv://tkfm:shoyushioniboshi@tkfm.cokifdf.mongodb.net/blogUserDatabase?retryWrites=true&w=majority&appName=tkfm")
  .then(() => {console.log("Success:ConnectedtoMongoDB")})
  .catch((error) => {console.error("Failure:UnconnectedtoMongoDB")})

const Schema = mongoose.Schema

const BlogSchema = new Schema({
  title: String,
  summary: String,
  image: String,
  textBody: String,
})

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
})

const BlogModel = mongoose.model("Blog", BlogSchema)
const UserModel = mongoose.model("User", UserSchema)

// BLOG function

// Create blog
app.get("/blog/create", (req, res) => {
  res.render("blogCreate")
})

app.post("/blog/create", (req, res) => {
  console.log("reqの中身", req.body)
  BlogModel.create(req.body)
    .then((result) => {
      console.log("データの書き込みが成功しました")
      res.send("ブログデータの投稿が成功しました")
    })
    .catch((error) => {
      console.log("データの書き込みが失敗しました")
      res.send("ブログデータの投稿が失敗しました")
    })
})

// Read All Blogs
app.get("/", async(req, res) => {
  const allBlogs = await BlogModel.find()
  console.log("allBlogsの中身：", allBlogs)
  res.render("index", {allBlogs})
})

// Read Single Blog
app.get("/blog/:id", async(req, res) => {
  console.log(req.params.id)
  const singleBlog = await BlogModel.findById(req.params.id)
  console.log("singleBlogの中身：", singleBlog)
  res.render("blogRead", {singleBlog})
})

// Update Blog
app.get("/blog/update/:id", async(req, res) => {
  const singleBlog = await BlogModel.findById(req.params.id)
  console.log("singleBlogの中身：", singleBlog)
  res.render("blogUpdate", {singleBlog})
})

// Delete Blog
app.get("/blog/delete/:id", async(req, res) => {
  const singleBlog = await BlogModel.findById(req.params.id)
  console.log("singleBlogの中身：", singleBlog)
  res.render("blogDelete", {singleBlog})
})

// User function
// Create user
app.get("/user/create", (req, res) => {
  res.render("userCreate")
})

app.post("/user/create", (req, res) => {
  UserModel.create(req.body)
    .then((result) => {
      console.log("データの書き込みが成功しました")
      res.send("ブログデータの投稿が成功しました")
    })
    .catch((error) => {
      console.log("データの書き込みが失敗しました")
      res.send("ブログデータの投稿が失敗しました")
    })
})

// user Login
app.get("/user/login", (req, res) => {
  res.render("login")
})

app.post("/user/login", (req, res) => {
  UserModel.findOne({email: req.body.email})
    .then((result) => {
      result
        ? res.send("ログイン成功です")
        : res.send("ユーザーが存在していません")
      // console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
})

// Connection to port
app.listen(5051, () => {
  console.log("Listening on localhost port 5051")
})
