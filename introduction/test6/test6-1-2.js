"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 別のファイルから MyModule を全体としてインポートする
var myModule = require("./MyModule");
console.log(myModule.myVariable); // 42
myModule.myFunction();
