const BlogModel = require("../../models/blog")

// BLOG function

// Read All Blogs
module.exports = async(req, res) => {
  const allBlogs = await BlogModel.find()
  allBlogs.map(function (blog) {
    if (blog.image.includes("https://") === false) {
      blog.image = "/public/images/" + blog.image
    }
  })
  res.render("index", {allBlogs: allBlogs, session: req.session.userId})
}
