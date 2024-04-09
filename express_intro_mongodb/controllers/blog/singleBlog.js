const BlogModel = require('../../models/blog');

// Read Single Blog
module.exports = async(req, res) => {
  console.log(req.params.id)
  const singleBlog = await BlogModel.findById(req.params.id)

  if (!singleBlog.image.includes("https://")) {
    singleBlog.image = "/public/images/" + singleBlog.image
  }

  res.render("blogRead", {singleBlog: singleBlog, session: req.session.userId})
}
