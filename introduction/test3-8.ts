class TestClass {
    // プロパティ
    humanName: string;

    // コンストラクタ
    constructor(param1: string) {
        // コンストラクタの処理
        this.humanName = param1;
    }

    // メソッド
    action(param1: string): string {
        // メソッドによる処理
        return this.humanName + param1;
    }
}

let test3_8 = new TestClass('ちんぽマン');
let test3_8_result = test3_8.action('おどる');

console.log(test3_8_result);
