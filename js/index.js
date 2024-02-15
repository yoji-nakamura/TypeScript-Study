"use strict";
console.log("Hello TypeScript");
// ＝＝＝＝＝＝＝＝＝＝変数について
// letは書き換えられる
let age = 0;
age = 26;
console.log(age);
// constは書き換えられない
const constage = 0;
// constage = 26;エラーでトランスパイル失敗
console.log(constage);
// ＝＝＝＝＝型について
// number型
let test1 = 3;
let test2 = 0.14;
console.log(test1 + test2);
// 区切り文字で可読性あげる。
let test3 = 10000000;
let test4 = 10000000;
console.log(test3);
console.log(test4);
// string型
let str1 = 'Hello "Hiro"さん';
// エスケープシーケンス
let str2 = "Hello \"Hiro\"さん";
console.log(str1);
console.log(str2);
// sringに式と変数を入れ込む
const calc = `1 + 2 = ${1 + 2}`;
console.log(calc);
const user = "Hiro";
const msg = `Hello ${user}`;
console.log(msg);
// boolean
const isYes = true;
const isNo = false;
console.log(isYes);
console.log(isNo);
