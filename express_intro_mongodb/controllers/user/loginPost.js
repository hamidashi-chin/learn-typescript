const UserModel = require('../../models/user');

// User function
// Create user
module.exports = (req, res) => {
  UserModel.findOne({email: req.body.email})
    .then((result) => {
      if (result) {
        if (req.body.password === result.password) {
          req.session.userId = result._id
          res.redirect("/")
        } else {
          res.render("error", {message: "/user/loginのエラー: パスワードが間違っています"})
        }
      } else {
        res.render("error", {message: "/user/loginのエラー: ユーザーが存在していません"})
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
