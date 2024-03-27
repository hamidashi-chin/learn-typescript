# はじめてつくるバックエンドサーバー Node.js&Express

<img src="https://m.media-amazon.com/images/I/71LFwoCEF6L._SL1500_.jpg" width="300px">

## コマンドラインにログ表示するだけの最小(?)なやつ

コード

```javascript
// index.js

const express = require("express");

const app = express();

app.listen(5000, function () {
  console.log("Listening on localhost port 5000");
});
```

実行
```bash
node index.js
```

## nodemon

- index.jsに変更加えるたびにサーバー停止・再起動を繰り返すのめんどくさい
- nodemonというツールを使えば、ファイルの変更が保存されると自動でサーバーを再起動させられる

```bash
# ローカルインストールの場合
npm install nodemon

# ローカルにインストールしたnodemon実行
npx nodemon hoge.js
```