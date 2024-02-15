console.log("Hello TypeScript");

// ＝＝＝＝＝＝＝＝＝＝変数について

// letは書き換えられる
let age: number = 0;

age = 26;
console.log(age);

// constは書き換えられない
const constage: number = 0;
// constage = 26;エラーでトランスパイル失敗
console.log(constage);

// ＝＝＝＝＝型について
// number型
let test1: number = 3;
let test2: number = 0.14;
console.log(test1 + test2);
// 区切り文字で可読性あげる。
let test3: number = 10000000;
let test4: number = 10_000_000;
console.log(test3);
console.log(test4);

// string型
let str1: string = 'Hello "Hiro"さん';
// エスケープシーケンス
let str2:string = "Hello \"Hiro\"さん"
console.log(str1);
console.log(str2);

// sringに式と変数を入れ込む
const calc = `1 + 2 = ${1+2}`;
console.log(calc);

const user = "Hiro";
const msg: string = `Hello ${user}`;
console.log(msg);

// boolean
const isYes: boolean = true;
const isNo: boolean = false;
console.log(isYes);
console.log(isNo);

// 型推論
let num = 7;
let str = "Hello";
console.log(num);
console.log(typeof(num));
console.log(str);
console.log(typeof(str));
