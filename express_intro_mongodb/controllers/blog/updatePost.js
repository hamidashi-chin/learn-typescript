const BlogModel = require('../../models/blog');

// Update Blog
module.exports = async(req, res) => {
  BlogModel.updateOne({_id: req.params.id}, req.body)
    .then((result) => {
      res.redirect("/")
    })
    .catch((error) => {
      res.render("error", {message: "/blog/updateのエラー"})
    })
}
