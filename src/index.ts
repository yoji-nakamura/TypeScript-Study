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

// 列挙型 enum
enum Week{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
// 連番で０〜
// const 変数名:列挙型名 = 列挙型名.値
const sun: Week = Week.Sunday;
const wed: Week = Week.Wednesday;
console.log(sun);
console.log(wed);
// 数値列挙型
enum WeekNum {
    Sunday = 1,
    Monday = 2,
    Tuesday = 4,
    Wednesday = 8,
    Thursday = 16,
    Friday = 32,
    Saturday = 64
}
const sunnum: WeekNum = WeekNum.Sunday;
console.log(sunnum);
// 文字列列挙型
enum WeekString {
    Sunday = "Sun",
    Monday = "Mon",
    Tuesday = "Tue",
    Wednesday = "Wed",
    Thursday = "Thu",
    Friday = "Fri",
    Saturday = "Sat"
}
const sunstr: WeekString = WeekString.Sunday;
console.log(sunstr);

// タプル型
const userdata: [string, number, number] = ["Hiro", 26, 165]
console.log(userdata[0]);
console.log(userdata[1]);
console.log(userdata[2]);

// 配列
// const(let) 変数名:データ型[] = 配列リテラル;
const math: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(math[0]);
console.log(math[1]);
console.log(math[2]);
// 代入
const username: string[] = ["名無し", "名無し"];
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
console.log(username.slice(1,3));

// 多次元配列
let shoesBox: string[][] =
    [
        ["A", "B", "C"],
        ["D", "E", "F"],
    ];
console.log(shoesBox);
console.log(shoesBox[0]);
console.log(shoesBox[0][1]);
    
// ジャグ配列
let numArray: number[][] =
    [
        [1, 2, 3],
        [4, 5],
        [6, 7, 8],
    ];
console.log(numArray);

// 連想配列
// const 連想配列名:{[key:キーのデータ型]:要素のデータ型}
let fruits: { [key: string]: string } = {
    "Apple":"りんご",
    "Banana":"バナナ",
    "Orange":"オレンジ"
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
const price: string = "りんご５個の値段は" + (lot * 100) + "円です。";
console.log(price);
