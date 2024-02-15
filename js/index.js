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
