// Create blog
module.exports = (req, res) => {
  req.session.userId
    ? res.render("blogCreate")
    : res.redirect("/user/login")
}
