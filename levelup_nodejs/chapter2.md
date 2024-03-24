# 第２章 npm(Node Package Manager)

- npmはNode Package Managerの略
- パッケージインストールするコマンド

## package.json
- package.jsonは`npm install`で生成することができる。
- Node.jsプロジェクトにおける依存関係管理やスクリプトの定義に必要なファイル。 
- 外部パッケージの管理、バージョンの指定、プロジェクトの情報の記述など、プロジェクトの一貫性と管理を助ける重要な役割を果たす。

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "test.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "mocha": "^6.1.4"
  }
}
```

- dependencies: 依存パッケージ(モジュール)
- devDependencies: 開発時のみ必要なモジュール

## package-lock.json
- package-lock.jsonは、インストール時のバージョンでロックするために使われる。

## npmの設定

- `.npmrc`というファイルで細かい設定を変更することができる。
- 設定例
  - `save-exact=true`
    - モジュールインストール時のバージョンが完全固定になる。
  「save-exact=true」とは厳密に保存する、という意味。
- その他さまざまな設定ができる
  https://qiita.com/terrierscript/items/86dbfd26abe6905756c0

### npm-config

- npmの設定内容を確認するには`npm config ls`コマンドを実行。
- npmのすべてのデフォルト設定は`npm config ls -l`で確認できる。

## npx

- npxはローカルインストールしたパッケージを実行する。
- 例
  ```shell
  npm install --save-dev eslint
  
  # eslintの初期設定
  npx eslint --init

  # 下記コマンドよりもお手軽
  ./node_modules/.bin/eslint --init
  ```

## npmパッケージの選定

- この本の筆者の選定基準
  1. メンテナンスが継続されているか？（メンテナンス性）
  2. パッケージに関する情報量（人気や知名度）
メンテナンス性ではOSSリポジトリの最終更新日やコントリビューター数などが判断基準になる。
人気度ではGitHubスター数やインターネット検索で日本語の解説記事が何件ヒットするか、等が参考になる。
- npmでは過去に、著名ソフトウェアによく似た名前のマルウェアが大量に発見された、という事例がある。
https://gfx.hatenablog.com/entry/2017/08/02/131537
  - npmパッケージのインストール時タイプミスにより、インストールしようとしていたものと似たような名前のマルウェアに感染する可能性があるので注意が必要とのこと。

## Yarn

- YarnはFacebook発のパッケージマネージャ。
- 特徴
  - 超高速
    - Yarnはダウンロードしたパッケージをキャッシュするので再ダウンロードは不要。
    - リソースを最大限利用できるよう処理を並列化するのでインストール時間が短い。
  - 高いセキュリティー
    - Yarnはコード実行前に、インストールされた各パッケージの整合性をチェックサムで検証する。
  - 高い信頼性
    - 詳細かつ簡潔なlockファイルフォーマットと確定性に優れたアルゴリズムを採用することにより、あるシステム上で成功するインストールが、他のシステムでも全く同じように成功sることを保証する。
- package.jsonが使える
  - Yarnはnpmと互換性があるため、package.jsonが使える。
  - バージョンのロックファルはyarn.lockというファイル名。

## npm と yarnのどちらを使うのか

- 最近あんまり性能差は見られないらしい。
- この本の筆者はyarn派。
- この本読む限り、どっちでも良さそう。好みの問題？