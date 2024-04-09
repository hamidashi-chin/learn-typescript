const BlogModel = require("../../models/blog")

// BLOG function

// Read All Blogs
module.exports = async(req, res) => {
  const allBlogs = await BlogModel.find()
  res.render("index", {allBlogs: allBlogs, session: req.session.userId})
}
