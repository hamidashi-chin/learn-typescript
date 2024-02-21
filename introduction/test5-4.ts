// アロー関数の基本的な構文
const add = (a: number, b: number): number => {
    return a + b;
};

// アロー関数は変数に代入できる
const result = add(5, 3);
 console.log("5 + 3 = ", result);

// アロー関数の型アノテーション
const order: (name: string) => void = (name) => {
    console.log(`ご注文は ${name} ですか？`);
}

order("パイズリ");

// アロー関数の省略記法
const multiply = (x: number, y: number) => x * y;

console.log("100 x 2 = ", multiply(100, 2));
