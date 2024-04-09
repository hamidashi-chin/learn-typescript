const UserModel = require('../../models/user');

// User function
// Create user
module.exports = (req, res) => {
  UserModel.create(req.body)
    .then((result) => {
      res.redirect("/user/login")
    })
    .catch((error) => {
      res.render("error", {message: "/user/createのエラー"})
    })
}
