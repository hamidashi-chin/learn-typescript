var TestClass = /** @class */ (function () {
    // コンストラクタ
    function TestClass(param1) {
        // コンストラクタの処理
        this.humanName = param1;
    }
    // メソッド
    TestClass.prototype.action = function (param1) {
        // メソッドによる処理
        return this.humanName + param1;
    };
    return TestClass;
}());
var test3_8 = new TestClass('ちんぽマン');
var test3_8_result = test3_8.action('おどる');
console.log(test3_8_result);
