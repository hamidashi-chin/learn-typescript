// 使用例
var p = { x: 100, y: 200 };
var rect = { topLeft: p, bottomRight: { x: 30, y: 40 } };
console.log(rect.topLeft.x);
console.log(rect.bottomRight.y);
