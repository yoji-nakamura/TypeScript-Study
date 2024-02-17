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
function getTriArea(): void {
    let area = 0;
    let base = 4;
    let height = 3;
    area = base * height / 2;
    console.log("面積" + area);
}
getTriArea();
// 三角形の面積　引数あり
function getTriAreaParam(base:number,height:number): void {
    let area = 0;
    area = base * height / 2;
    console.log("面積" + area);
}
const base = 4;
const height = 3;
getTriAreaParam(base,height);

// デフォルト引数
// 引数:データ型 = デフォルト値
function greet(name: string, greeting: string = "Hello"):void {
    console.log(`${greeting}、${name}`);
}
greet("Hiro");
// 引数がない時にデフォルトのが使用される。
greet("Hiro", "こんにちは");

// 可変長引数
// ...引数:データ型[]
function sumTotal(...nums: number[]): void {
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
function returnSumTotal(...nums: number[]): number {
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
const increment = function (num: number) {
    return num + 1;
}
console.log(increment(1));

// 関数に関数式を渡す
// 関数の引数として渡される関数をコールバック関数と呼ぶ
function applyOperation(num: number, action: Function): void {
    console.log(action(num));
}
const incrementFunc = function(num:number) {
    return num + 1;
}
const decrementFunc = function(num:number) {
    return num - 1;
}
applyOperation(5, incrementFunc);
applyOperation(5, decrementFunc);

// アロー関数
// const 変数 = (引数リスト):戻り値のデータ型 => {
//     return 戻り値;
// }
const arrowIncrement = (num: number): number => {
    return num + 1;
}
console.log(arrowIncrement(3));
const arrowDecrement = (num: number): number => num - 1;
console.log(arrowDecrement(3));

// ジェネリクス
// function 関数名<T>(引数: T): T {}
function getFirstElement<T>(array:T[]):T {
    return array[0];
}
const kanas = ["あ", "い", "う", "え", "お"];
const numbers = [1, 2, 3, 4, 5];
console.log(getFirstElement(kanas));
console.log(getFirstElement(numbers));
// 1~Nまでの合計数の関数式
const sumN = function (num: number): number {
    let total = 0;
    for (let index = 1; index <= num; index++) {
        total += index;
    }
    return total;
}
console.log(sumN(10));
// 名前を受け取りHelloをつけて返すアロー関数
const arrowGreet = (name: string): string => "Hello " + name;
console.log(arrowGreet("Hiro"));

// クラス
// class クラス名 {
//     プロパティの定義
//     メソッドの
// }
// 家をクラスとして定義
class House {
    // プロパティ
    // プロパティ名: データ型 = 初期値;
    private _color: string;
    // rooms: number = 0;
    private _rooms: number;
    address: string;
    // コンストラクタ
    // 自動的に呼び出される
    constructor(color:string,rooms:number) {
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
    set rooms(count: number) {
        if (count < 0) {
            this._rooms = 0;
        } else {
            this._rooms = count;
        }
    }
    // ゲッター
    // get 任意の名前() : データ型 {
    //     return 戻り値;
    // }
    get rooms(): number{
        return this._rooms;
    }
    set color(color: string) {
        this._color = color;
    }
    get color(): string{
        return this._color;
    }
    // メソッド
    // メソッド名(引数1: 型1, 引数2: 型2): 戻り値の型{
    //     return 戻り値
    // }
    activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        } else {
            console.log("セキュリティを停止しました");
        }
    }
    
    openDoor(isOn: boolean) {
        if (isOn) {
            console.log("ドアを開けました。");
        } else {
            console.log("ドアを閉めました。");
        }
    }
}
// インスタンス化
// const 変数名 = new クラス名();
const redHouse = new House("赤",2);
// プロパティの使用
// redHouse.color = "赤";
// redHouse.rooms = 3;
// console.log(redHouse.color);
// console.log(redHouse.rooms);
redHouse.rooms = -3;
console.log(redHouse.rooms);
redHouse.color = "赤";
console.log(redHouse.color);
const blueHouse = new House("青",2);
blueHouse.activateSecurity(true);
blueHouse.activateSecurity(false);
blueHouse.openDoor(true);
blueHouse.openDoor(false);
console.log("コンストラクタ");
const greenHouse = new House("緑",3);
console.log(greenHouse.color);
console.log(greenHouse.rooms);
// アクセス修飾子
class House2 {
    public color: string;
    private rooms: number;
    protected address: string;
    constructor(color:string,rooms:number,address:string) {
        this.color = color;
        this.rooms = rooms;
        this.address = address;
    }
    public displayColor(): void{
        console.log("この家は" + this.color + "です");
    }
    private countRooms(): number{
        return this.rooms;
    }
    protected getAddress(): string{
        return this.address;
    }
}
const yellowHouse = new House2("黄色", 1, "東京");

// 継承
// 親クラス・基本クラス
class Home {
    public color: string = "白";
    public rooms: number = 1;
    public activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        } else {
            console.log("セキュリティを停止しました");
        }
    }
}
// 派生クラス
class GarageHome extends Home{
    // 車庫の有無
    public hasGarage: boolean = false;
    // 開閉メソッド
    public openGarage(isOn: boolean) {
        if (this.hasGarage) {
            if (isOn) {
                console.log("車庫を開けました");
            } else {
                console.log("車庫を閉めました");
            }
        } else {
            console.log("車庫はありません");
        }
    }
    // オーバーライド
    public activateSecurity(isOn: boolean): void {
        if (isOn) {
            console.log("セキュリティを作動しました");
            console.log("ガレージのセキュリティを作動しました");
        } else {
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
class Home2{
    activateSecurity(isOn: boolean): void;
    activateSecurity(isOn: boolean, hasGarage: boolean): void;

    activateSecurity(isOn: boolean, hasGarage?: boolean): void{
        if (isOn) {
            console.log("セキュリティを作動させました。");
            if (hasGarage) {
                console.log("ガレージのセキュリティを作動させました。");
            }
        } else {
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
