const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require("mongoose")

app.set("view engine", "ejs")

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

const BlogModel = mongoose.model("Blog", BlogSchema)

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
  // res.send("全ブログデータを読み取りました。")
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

// Connection to port
app.listen(5051, () => {
  console.log("Listening on localhost port 5051")
})
