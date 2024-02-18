class MagicMirrorGo<T> {
    constructor(private value: T) {}
    getValue(): T {
        return this.value;
    }
}

// 使用例
const strMagicMirrorGo = new MagicMirrorGo<string>("AV 撮影中");
const numMagicMirrorGo = new MagicMirrorGo<number>(123456);

console.log(strMagicMirrorGo.getValue());
console.log(numMagicMirrorGo.getValue());
