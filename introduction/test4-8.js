var MagicMirrorGo = /** @class */ (function () {
    function MagicMirrorGo(value) {
        this.value = value;
    }
    MagicMirrorGo.prototype.getValue = function () {
        return this.value;
    };
    return MagicMirrorGo;
}());
// 使用例
var strMagicMirrorGo = new MagicMirrorGo("AV 撮影中");
var numMagicMirrorGo = new MagicMirrorGo(123456);
console.log(strMagicMirrorGo.getValue());
console.log(numMagicMirrorGo.getValue());
