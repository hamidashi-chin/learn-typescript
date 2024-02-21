// 別のファイルから MyModule をインポート
import { myVariable, myFunction, MyClass } from './MyModule';

// エクスポートされた変数や関数を使用する
console.log(myVariable);
myFunction();

// エクスポートされたクラスをインスタンス化する
const myInstance = new MyClass();
