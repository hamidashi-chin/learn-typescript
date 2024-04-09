const BlogModel = require('../../models/blog');

// Create blog
module.exports = (req, res) => {
  console.log("reqの中身", req.body)
  BlogModel.create(req.body)
    .then((result) => {
      res.redirect("/")
    })
    .catch((error) => {
      res.render("error", {message: "/blog/createのエラー"})
    })
}
