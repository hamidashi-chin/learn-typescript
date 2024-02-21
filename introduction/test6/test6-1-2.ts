// 別のファイルから MyModule を全体としてインポートする
import * as myModule from './MyModule';

console.log(myModule.myVariable); // 42
myModule.myFunction();