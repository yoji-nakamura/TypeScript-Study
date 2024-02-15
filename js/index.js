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
// 型推論
let num = 7;
let str = "Hello";
console.log(num);
console.log(typeof (num));
console.log(str);
console.log(typeof (str));
// 列挙型 enum
var Week;
(function (Week) {
    Week[Week["Sunday"] = 0] = "Sunday";
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
})(Week || (Week = {}));
// 連番で０〜
// const 変数名:列挙型名 = 列挙型名.値
const sun = Week.Sunday;
const wed = Week.Wednesday;
console.log(sun);
console.log(wed);
// 数値列挙型
var WeekNum;
(function (WeekNum) {
    WeekNum[WeekNum["Sunday"] = 1] = "Sunday";
    WeekNum[WeekNum["Monday"] = 2] = "Monday";
    WeekNum[WeekNum["Tuesday"] = 4] = "Tuesday";
    WeekNum[WeekNum["Wednesday"] = 8] = "Wednesday";
    WeekNum[WeekNum["Thursday"] = 16] = "Thursday";
    WeekNum[WeekNum["Friday"] = 32] = "Friday";
    WeekNum[WeekNum["Saturday"] = 64] = "Saturday";
})(WeekNum || (WeekNum = {}));
const sunnum = WeekNum.Sunday;
console.log(sunnum);
// 文字列列挙型
var WeekString;
(function (WeekString) {
    WeekString["Sunday"] = "Sun";
    WeekString["Monday"] = "Mon";
    WeekString["Tuesday"] = "Tue";
    WeekString["Wednesday"] = "Wed";
    WeekString["Thursday"] = "Thu";
    WeekString["Friday"] = "Fri";
    WeekString["Saturday"] = "Sat";
})(WeekString || (WeekString = {}));
const sunstr = WeekString.Sunday;
console.log(sunstr);
// タプル型
const userdata = ["Hiro", 26, 165];
console.log(userdata[0]);
console.log(userdata[1]);
console.log(userdata[2]);
// 配列
// const(let) 変数名:データ型[] = 配列リテラル;
const math = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(math[0]);
console.log(math[1]);
console.log(math[2]);
// 代入
const username = ["名無し", "名無し"];
username[0] = "Hiro";
username[1] = "Hide";
console.log(username);
// 配列追加 末尾
username.push("Take");
console.log(username);
// 配列追加 先頭
username.unshift("Bill");
console.log(username);
// 一部取り出し
console.log(username.slice(1));
console.log(username.slice(1, 3));
// 多次元配列
let shoesBox = [
    ["A", "B", "C"],
    ["D", "E", "F"],
];
console.log(shoesBox);
console.log(shoesBox[0]);
console.log(shoesBox[0][1]);
// ジャグ配列
let numArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
];
console.log(numArray);
// 連想配列
// const 連想配列名:{[key:キーのデータ型]:要素のデータ型}
let fruits = {
    "Apple": "りんご",
    "Banana": "バナナ",
    "Orange": "オレンジ"
};
console.log(fruits);
console.log(fruits["Apple"]);
// その他の操作はググろう
// 演算子は大体同じ
// 前置インクリメント
let x = 5;
console.log(++x);
console.log(x);
// インクリメントされてから出力
// 後置インクリメント
let y = 5;
console.log(y++);
console.log(y);
// 出力されてからインクリメント
// 代入演算子
let x1 = 0;
x1 += 3;
console.log(x1);
// ビットシフト演算子に関しては使いどきがわからん
// 比較演算子
// === !== < > <= >=
// 論理演算子
// AND &&
// OR ||
// NOT !
// 文字列連結
// 値1 + 値2
const msg1 = "Hello";
const msg2 = "Hiro";
console.log(msg1 + " " + msg2);
const lot = 5;
const price = "りんご５個の値段は" + (lot * 100) + "円です。";
console.log(price);
// 繰り返し
// 反復可能オブジェクト
// for (let 変数名 of 反復可能オブジェクト) {}
const kokugo = [80, 65, 70, 100, 55];
let sum = 0;
for (const num of kokugo) {
    sum += num;
}
console.log("国語の合計点数" + sum + "点");
