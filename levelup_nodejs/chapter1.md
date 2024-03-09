# 第１章 Node.jsの全体像

## V8 JavaScript Engine
- Node.jsはGoogle製の「V8 JavaScript Engine」で実行される。
- V8はNode.jsに限らずChromeでも採用されている。
  - FireFoxではSpiderMonkey
  - SafariではJavaScriptCore
  - EdgeではChakra / V8

## JavaScriptの文法
- バージョン
  - ECMAScript 1st Edition (ES) 1997年6月
  - ECMAScript 2nd Edition (ES) 1998年6月
  - ECMAScript 3rd Edition (ES) 1999年12月
  - ECMAScript 4th Edition (ES) (放棄w)
  - ECMAScript 5th Edition (ES) 2009年12月
  - ECMAScript 5.1th Edition (ES) 2011年6月
  - ECMAScript 2015 Edition (ES) 2015年6月
  - ECMAScript 2016 Edition (ES) 2016年6月
  - ECMAScript 2017 Edition (ES) 2017年6月
  - ECMAScript 2018 Edition (ES) 2018年6月
  - ECMAScript 2019 Edition (ES) 2019年6月
- ESとはECMAScriptの略称
  - JavaScriptの標準企画
  - 国際的な標準感団体：Ecma InternationalにてECMA-262と呼ばれる規格番号で標準化されてる。

## libuv

- Node.jsの特徴
  - ノンブロッキングI/O　？？
  - イベント駆動プログラミング　？？
  - 非同期プログラミング
  これらを支えるがlibuv。。。何言ってるかわからん😭
  `@todo`後で注釈追記したい
- C言語で作成されたライブラリである。

## node-core

- JavaScriptのライブラリ
- さまざまなモジュールがある
  - OSモジュール
    - たとえばCPUコア数取得できる
      ```javascript
      const os = require('os');
      const numCPUs = os.cpus().length;
      console.log(numCPUs + ' core cpu.');
      ```

## Node.jsのリリースサイクル

- 毎年のように新しいバージョンがリリースされている。
  <img src="https://www.publickey1.jp/2021/nodejs16gab.gif">
  - 偶数バージョンはActiveLTSがある。
  - 奇数バージョンはActiveLTSがない。
    - 偶数バージョンがリリースされたのち、少しのメンテナンス期間を経てお役御免。
  - CURRENT : 最初の約半年間
  - Active LTS : アクティブな長期サポート期間
  - Maintenance LTS : 保守サポート期間
    - LTSはlong-term supportの略称
  - ActiveまたはMaintenanceLTSの使用を推奨。
