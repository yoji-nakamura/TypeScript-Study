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
// 関数
// function 関数名(引数: 型１):戻り値の型 {}
// 三角形の面積
function getTriArea() {
    let area = 0;
    let base = 4;
    let height = 3;
    area = base * height / 2;
    console.log("面積" + area);
}
getTriArea();
// 三角形の面積　引数あり
function getTriAreaParam(base, height) {
    let area = 0;
    area = base * height / 2;
    console.log("面積" + area);
}
const base = 4;
const height = 3;
getTriAreaParam(base, height);
// デフォルト引数
// 引数:データ型 = デフォルト値
function greet(name, greeting = "Hello") {
    console.log(`${greeting}、${name}`);
}
greet("Hiro");
// 引数がない時にデフォルトのが使用される。
greet("Hiro", "こんにちは");
// 可変長引数
// ...引数:データ型[]
function sumTotal(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    console.log("合計：" + total);
}
sumTotal(1, 2, 3, 4);
sumTotal(5, 6);
// 戻り値のある関数
// return 呼び出し元に返す値;
function returnSumTotal(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}
const returnTotal = returnSumTotal(7, 8);
console.log(returnTotal);
// 関数式
// 匿名関数・無名関数とも呼ぶ式なので変数に代入できる。
// 変数 = function(引数):戻り値の型{}
// インクリメントを行う関数式
const increment = function (num) {
    return num + 1;
};
console.log(increment(1));
// 関数に関数式を渡す
// 関数の引数として渡される関数をコールバック関数と呼ぶ
function applyOperation(num, action) {
    console.log(action(num));
}
const incrementFunc = function (num) {
    return num + 1;
};
const decrementFunc = function (num) {
    return num - 1;
};
applyOperation(5, incrementFunc);
applyOperation(5, decrementFunc);
// アロー関数
// const 変数 = (引数リスト):戻り値のデータ型 => {
//     return 戻り値;
// }
const arrowIncrement = (num) => {
    return num + 1;
};
console.log(arrowIncrement(3));
const arrowDecrement = (num) => num - 1;
console.log(arrowDecrement(3));
// ジェネリクス
// function 関数名<T>(引数: T): T {}
function getFirstElement(array) {
    return array[0];
}
const kanas = ["あ", "い", "う", "え", "お"];
const numbers = [1, 2, 3, 4, 5];
console.log(getFirstElement(kanas));
console.log(getFirstElement(numbers));
// 1~Nまでの合計数の関数式
const sumN = function (num) {
    let total = 0;
    for (let index = 1; index <= num; index++) {
        total += index;
    }
    return total;
};
console.log(sumN(10));
// 名前を受け取りHelloをつけて返すアロー関数
const arrowGreet = (name) => "Hello " + name;
console.log(arrowGreet("Hiro"));
// クラス
// class クラス名 {
//     プロパティの定義
//     メソッドの
// }
// 家をクラスとして定義
class House {
    // コンストラクタ
    // 自動的に呼び出される
    constructor(color, rooms) {
        // 初期化処理
        this._color = color;
        this._rooms = rooms;
        this.address = "東京";
    }
    // セッター
    // set 任意の名前(引数: データ型) {
    //     処理
    //     プロパティに値を記憶する処理
    // }
    set rooms(count) {
        if (count < 0) {
            this._rooms = 0;
        }
        else {
            this._rooms = count;
        }
    }
    // ゲッター
    // get 任意の名前() : データ型 {
    //     return 戻り値;
    // }
    get rooms() {
        return this._rooms;
    }
    set color(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
    // メソッド
    // メソッド名(引数1: 型1, 引数2: 型2): 戻り値の型{
    //     return 戻り値
    // }
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        }
        else {
            console.log("セキュリティを停止しました");
        }
    }
    openDoor(isOn) {
        if (isOn) {
            console.log("ドアを開けました。");
        }
        else {
            console.log("ドアを閉めました。");
        }
    }
}
// インスタンス化
// const 変数名 = new クラス名();
const redHouse = new House("赤", 2);
// プロパティの使用
// redHouse.color = "赤";
// redHouse.rooms = 3;
// console.log(redHouse.color);
// console.log(redHouse.rooms);
redHouse.rooms = -3;
console.log(redHouse.rooms);
redHouse.color = "赤";
console.log(redHouse.color);
const blueHouse = new House("青", 2);
blueHouse.activateSecurity(true);
blueHouse.activateSecurity(false);
blueHouse.openDoor(true);
blueHouse.openDoor(false);
console.log("コンストラクタ");
const greenHouse = new House("緑", 3);
console.log(greenHouse.color);
console.log(greenHouse.rooms);
// アクセス修飾子
class House2 {
    constructor(color, rooms, address) {
        this.color = color;
        this.rooms = rooms;
        this.address = address;
    }
    displayColor() {
        console.log("この家は" + this.color + "です");
    }
    countRooms() {
        return this.rooms;
    }
    getAddress() {
        return this.address;
    }
}
const yellowHouse = new House2("黄色", 1, "東京");
// 継承
// 親クラス・基本クラス
class Home {
    constructor() {
        this.color = "白";
        this.rooms = 1;
    }
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        }
        else {
            console.log("セキュリティを停止しました");
        }
    }
}
// 派生クラス
class GarageHome extends Home {
    constructor() {
        super(...arguments);
        // 車庫の有無
        this.hasGarage = false;
    }
    // 開閉メソッド
    openGarage(isOn) {
        if (this.hasGarage) {
            if (isOn) {
                console.log("車庫を開けました");
            }
            else {
                console.log("車庫を閉めました");
            }
        }
        else {
            console.log("車庫はありません");
        }
    }
    // オーバーライド
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
            console.log("ガレージのセキュリティを作動しました");
        }
        else {
            console.log("セキュリティを停止しました");
            console.log("ガレージのセキュリティを停止しました");
        }
    }
}
const gh = new GarageHome();
gh.hasGarage = true;
gh.openGarage(true);
gh.openGarage(false);
// オーバーライド
console.log("オーバーライド");
gh.activateSecurity(true);
gh.activateSecurity(false);
// オーバーロード
class Home2 {
    activateSecurity(isOn, hasGarage) {
        if (isOn) {
            console.log("セキュリティを作動させました。");
            if (hasGarage) {
                console.log("ガレージのセキュリティを作動させました。");
            }
        }
        else {
            console.log("セキュリティを停止させました。");
            if (hasGarage) {
                console.log("ガレージのセキュリティを停止させました。");
            }
        }
    }
}
const myHome = new Home2();
console.log("オーバーロード");
myHome.activateSecurity(false);
myHome.activateSecurity(true);
myHome.activateSecurity(true, true);
// 抽象クラス
class Zukei {
}
class Triangle extends Zukei {
    // Triangle専用の処理が行える
    Draw() {
        console.log("三角形を描画します。");
    }
}
class Hexagon extends Zukei {
    Draw() {
        console.log("四角形を描画します。");
    }
}
const tri = new Triangle();
tri.Draw();
const hex = new Hexagon();
hex.Draw();
class MusicPlayer {
    constructor() {
        this.name = "sample";
    }
    play() {
        console.log(this.name + "を再生しました");
    }
    stop() {
        console.log(this.name + "を停止しました");
    }
}
const mp = new MusicPlayer();
mp.play();
mp.stop();
class VideoPlayer {
    constructor() {
        this.videoName = "Sample Video";
        this.name = "sample";
    }
    playVideo() {
        console.log(this.videoName + "を再生しました");
    }
    stopVideo() {
        console.log(this.videoName + "を停止しました");
    }
    play() {
        console.log(this.name + "を再生しました");
    }
    stop() {
        console.log(this.name + "を停止しました");
    }
}
const vp = new VideoPlayer();
vp.playVideo();
vp.stopVideo();
vp.play();
vp.stop();
class TelephoneCall {
    call() {
        console.log("電話を鳴らします。");
    }
}
const tell = new TelephoneCall();
tell.call();
// 例外処理
// try {
//     例外が発生する可能性があるコード
// } catch {
//     例外を処理するコード
// } finally { 
//     最後の必ず実行する処理
// }
try {
    const x = 10;
    const y = 0;
    if (y === 0) {
        throw new Error("ゼロで割り算はできません。");
    }
    // 例外が発生するので実行はされない
    const ans = x / y;
    console.log(ans);
}
catch (err) {
    console.log(err);
    // 発生した例外がどのErrorオブジェクトか調べる
    // 変数 instanceof オブジェクト
    if (err instanceof SyntaxError) {
        console.log("構文エラーが発生しました");
    }
    else if (err instanceof RangeError) {
        console.log("範囲外の操作が行われました。");
    }
    else {
        console.log("その他の例外が発生しました。");
    }
}
finally {
    console.log("プログラムを終了します。");
}
