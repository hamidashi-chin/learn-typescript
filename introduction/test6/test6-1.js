"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 別のファイルから MyModule をインポート
var MyModule_1 = require("./MyModule");
// エクスポートされた変数や関数を使用する
console.log(MyModule_1.myVariable);
(0, MyModule_1.myFunction)();
// エクスポートされたクラスをインスタンス化する
var myInstance = new MyModule_1.MyClass();
