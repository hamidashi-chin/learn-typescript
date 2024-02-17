// インターフェースの定義
interface Hito2 {
    name: string;
    age: number;
    greet: () => void;
}

// クラスがインターフェースを実装
class AvJoyuu3 implements Hito2 {
    name: string;
    age: number;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`わたしの名前は ${this.name}です！`);
    }
}

let  joyuu3 = new AvJoyuu3('あい');
joyuu3.greet();
