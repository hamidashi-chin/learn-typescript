const BlogModel = require('../../models/blog');

// Read Single Blog
module.exports = async(req, res) => {
  console.log(req.params.id)
  const singleBlog = await BlogModel.findById(req.params.id)
  res.render("blogRead", {singleBlog: singleBlog, session: req.session.userId})
}
