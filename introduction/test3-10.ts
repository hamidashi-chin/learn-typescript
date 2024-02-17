// インターフェースの定義
interface Hito {
    name: string;
    age: number;
    greet: () => void;
}

// クラスがインターフェースを実装
class AvJoyuu2 implements Hito {
    // name: string;
    // age: number;

    constructor(name: string, age: number) {
        // this.name = name;
        // this.age = age;
    }

    greet() {
        console.log(`わたしの名前は ${this.name}、${this.age}歳です！`);
    }
}

let joyuu2 = new AvJoyuu2('あい', 20);
joyuu2.greet();
