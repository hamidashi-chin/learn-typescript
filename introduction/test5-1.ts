// あいさつをする関数を定義
function greet(name: string, age?: number) {
    if (age !== undefined) {
        console.log(`やあやあ, ${name}！あなたは ${age} 歳。それでは、おまんこ！`);
    } else {
        console.log(`やあやあ, ${name}。それでは、おまんこ！`);
    }
}

greet("ゲドン");

greet("ヨロイ元帥", 42);
