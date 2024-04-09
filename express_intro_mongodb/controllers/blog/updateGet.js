const BlogModel = require('../../models/blog');

// Update Blog
module.exports = async(req, res) => {
  const singleBlog = await BlogModel.findById(req.params.id)
  res.render("blogUpdate", {singleBlog})
}
