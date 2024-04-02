# はじめてつくるバックエンドサーバー発展編（Node.js＆Express＆MongoDB）

## ※ 注意 ※

### 本の記述、バージョン古い🥺

<a href="https://stackoverflow-com.translate.goog/questions/75701761/mongooseerror-model-create-no-longer-accepts-a-callback?_x_tr_sl=vi&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc" target="_blank">参考文献</a>

・旧
```javascript
  BlogModel.create(req.body, (error, savedBlogData) => {
    if (error) {
      console.log("データの書き込みが失敗しました")
      res.send("ブログデータの投稿が失敗しました")
    } else {
      console.log("データの書き込みが成功しました")
      res.send("ブログデータの投稿が成功しました")
    }
  })
```

↓

・新
```javascript
app.post("/blog/create", (req, res) => {
  console.log("reqの中身", req.body)
  BlogModel.create(req.body)
    .then((result) => {
      console.log("データの書き込みが成功しました")
      res.send("ブログデータの投稿が成功しました")
    })
    .catch((error) => {
      console.log("データの書き込みが失敗しました")
      res.send("ブログデータの投稿が失敗しました")
    })
})
```