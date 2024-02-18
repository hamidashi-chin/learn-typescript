// 型エイリアスの例
type Point = {
    x: number;
    y: number;
};

type Rectangle = {
    topLeft: Point;
    bottomRight: Point;
};

// 使用例
const p:Point = { x: 100, y: 200 };
const rect:Rectangle = { topLeft: p, bottomRight: { x: 30, y: 40 } };

console.log(rect.topLeft.x);
console.log(rect.bottomRight.y);

