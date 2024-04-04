# トップ

## 基本的な型

### プリミティブ型

- boolean: 真偽値
- number: 数値
- string: 文字列
- bigint: 大きな整数
- symbol: 一意の値を示す
- undefined: 値が定義されていない状態を示す
- null: 値が存在しない状態を示す

```typescript
const isReady: boolean = false;
const age: number = 25;
const fullName: string = "John Doe";
const bigNumber: bigint = 100n;
const uniqueSymbol: symbol = Symbol("unique");
const notDefined: undefined = undefined;
const empty: null = null;
```

### 特殊な型

- any: なんでも代入できる型。型が不明な場合に使用する。*その値に対する操作に制限がなく*、型の安全性は弱まる。
- unknown: any型と似て、なんでも代入できる型。*その値に対する操作は制限され*、型の安全性が保たれる。
- void: 値が存在しないことを示す。関数が何も返さない場合に使用する。

```typescript
const a: any = 100; // 代入できる
console.log(a * 3); // 操作もできる
// > 300
 
const x: unknown = 100; // 代入はできる
console.log(x * 3); // 操作はできない
// > 'x' is of type 'unknown'.
 
// 戻り値のない関数
function doSomething(): void {}
 
// 戻り値を返すことがありえない関数
function throwError(): never {
  throw new Error();
}
```

## 型エイリアス

- 型エイリアスは既存の型を新たな名前で定義できる機能。
- より複雑な型を簡素に表現したり、コードの可読性の向上に役立つ。

```typescript
type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello"; // string型が代入可能
value = 123; // number型も代入可能
```