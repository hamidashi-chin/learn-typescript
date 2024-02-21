var MyNamespace;
(function (MyNamespace) {
    MyNamespace.value = 42;
})(MyNamespace || (MyNamespace = {}));
// 使用例
console.log(MyNamespace.value); // 42
