const BlogModel = require('../../models/blog');

// Delete Blog
module.exports = async(req, res) => {
  BlogModel.deleteOne({_id: req.params.id})
    .then((result) => {
      res.redirect("/")
    })
    .catch((error) => {
      res.render("error", {message: "/blog/deleteのエラー"})
    })
}
