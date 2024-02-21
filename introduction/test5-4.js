// アロー関数の基本的な構文
var add = function (a, b) {
    return a + b;
};
// アロー関数は変数に代入できる
var result = add(5, 3);
console.log("5 + 3 = ", result);
// アロー関数の型アノテーション
var order = function (name) {
    console.log("\u3054\u6CE8\u6587\u306F ".concat(name, " \u3067\u3059\u304B\uFF1F"));
};
order("パイズリ");
// アロー関数の省略記法
var multiply = function (x, y) { return x * y; };
console.log("100 x 2 = ", multiply(100, 2));
