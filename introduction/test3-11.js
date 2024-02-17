// クラスがインターフェースを実装
var AvJoyuu3 = /** @class */ (function () {
    function AvJoyuu3(name) {
        this.name = name;
    }
    AvJoyuu3.prototype.greet = function () {
        console.log("\u308F\u305F\u3057\u306E\u540D\u524D\u306F ".concat(this.name, "\u3067\u3059\uFF01"));
    };
    return AvJoyuu3;
}());
var joyuu3 = new AvJoyuu3('あい');
joyuu3.greet();
