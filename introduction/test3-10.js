// クラスがインターフェースを実装
var AvJoyuu = /** @class */ (function () {
    // name: string;
    // age: number;
    function AvJoyuu(name, age) {
        // this.name = name;
        // this.age = age;
    }
    AvJoyuu.prototype.greet = function () {
        console.log("\u308F\u305F\u3057\u306E\u540D\u524D\u306F ".concat(this.name, "\u3001").concat(this.age, "\u6B73\u3067\u3059\uFF01"));
    };
    return AvJoyuu;
}());
var joyuu = new AvJoyuu('あい', 20);
joyuu.greet();
