"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = exports.myFunction = exports.myVariable = void 0;
// 変数のエクスポート
exports.myVariable = 42;
// 関数のエクスポート
function myFunction() {
    console.log('俺の関数');
}
exports.myFunction = myFunction;
// クラスのエクスポート
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
exports.MyClass = MyClass;
