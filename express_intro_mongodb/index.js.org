const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))
const mongoose = require("mongoose")
const session = require("express-session")

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
  // console.log(req.session.userId)
  req.session.userId
    ? res.render("blogCreate")
    : res.redirect("/user/login")
})

app.post("/blog/create", (req, res) => {
  console.log("reqの中身", req.body)
  BlogModel.create(req.body)
    .then((result) => {
      res.redirect("/")
    })
    .catch((error) => {
      res.render("error", {message: "/blog/createのエラー"})
    })
})

// Read All Blogs
app.get("/", async(req, res) => {
  const allBlogs = await BlogModel.find()
  res.render("index", {allBlogs: allBlogs, session: req.session.userId})
})

// Read Single Blog
app.get("/blog/:id", async(req, res) => {
  console.log(req.params.id)
  const singleBlog = await BlogModel.findById(req.params.id)
  // console.log("singleBlogの中身：", singleBlog)
  res.render("blogRead", {singleBlog: singleBlog, session: req.session.userId})
})

// Update Blog
app.get("/blog/update/:id", async(req, res) => {
  const singleBlog = await BlogModel.findById(req.params.id)
  // console.log("singleBlogの中身：", singleBlog)
  res.render("blogUpdate", {singleBlog})
})

app.post("/blog/update/:id", async(req, res) => {
  BlogModel.updateOne({_id: req.params.id}, req.body)
    .then((result) => {
      res.redirect("/")
    })
    .catch((error) => {
      res.render("error", {message: "/blog/updateのエラー"})
    })
})

// Delete Blog
app.get("/blog/delete/:id", async(req, res) => {
  const singleBlog = await BlogModel.findById(req.params.id)
  // console.log("singleBlogの中身：", singleBlog)
  res.render("blogDelete", {singleBlog})
})

app.post("/blog/delete/:id", async(req, res) => {
  BlogModel.deleteOne({_id: req.params.id})
    .then((result) => {
      res.redirect("/")
    })
    .catch((error) => {
      res.render("error", {message: "/blog/deleteのエラー"})
    })
})

// User function
// Create user
app.get("/user/create", (req, res) => {
  res.render("userCreate")
})

app.post("/user/create", (req, res) => {
  UserModel.create(req.body)
    .then((result) => {
      res.redirect("/user/login")
    })
    .catch((error) => {
      res.render("error", {message: "/user/createのエラー"})
    })
})

// user Login
app.get("/user/login", (req, res) => {
  res.render("login")
})

app.post("/user/login", (req, res) => {
  UserModel.findOne({email: req.body.email})
    .then((result) => {
      if (result) {
        if (req.body.password === result.password) {
          req.session.userId = result._id
          res.redirect("/")
        } else {
          res.render("error", {message: "/user/loginのエラー: パスワードが間違っています"})
        }
      } else {
        res.render("error", {message: "/user/loginのエラー: ユーザーが存在していません"})
      }
    })
    .catch((error) => {
      console.log(error)
    })
})

// Page Notfound
app.get("*", (req, res) => {
  res.render("error", {message: "ページが存在しません"})
})

// Connection to port
const port = process.env.PORT || 5051
app.listen(port, () => {
  console.log(`Listening on localhost port ${port}`)
})
