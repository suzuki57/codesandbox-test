// const let等の変数宣言

// var vall = "var変数";
// console.log(vall);

// // var変数は上書きが可能
// vall = "vall変数を上書き";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let宣言を再宣言";
// console.logo(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数上書き";

// const val3 = "const変数を再宣言"

// constで定義したオブジェクトプロパティの変更が可能
// const val4 = {
//   name:"takanori",
//   age:34,
// };
// val4.name="inu";
// val4.address = "miyagi";
// console.log(val4);

// constで定義したオブジェクトプロパティの変更が可能
// const val5 = ["dog" ,"cat"];
// val5[0] = "orange";
// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "takanori";
// const age = "34";

// // 私の名前はtakanoriです。年齢は３４歳です。

// // 従来の方法
// const message1 = "私の名前は"+name+"です。年齢は"+age+"歳です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// アロー関数
// function func1(str){
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1+num2;
// };
// console.log(func3(10,29));

// 分割代入
// const myProfile ={
//   name:"takanori",
//   age:34,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["takanori", 34];

// const massage3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(massage3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// デフォルト値、引数など
// const sayHello = (name = "gesuto") => console.log(`こんいちは！${name}さん！`);
// sayHello("takanori");

// スプレッド構文
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 =[...arr4,...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);

// mapやfilter

// const nameArr = ["田中","山田","takanori"];
// for(let index = 0; index <nameArr.length; index++){
//   console.log(`${index　+1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name)=>console.log(name));
// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2===1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if(name==="takanori"){
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

// 三項演算子
// ある条件　？　条件がtrueの時 : 条件がfalseの時
// const vall = 1 === 0 ?'trueです' : 'falseです';
// console.log(vall);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1,num2) =>{
//   return num1 + num2 > 100 ? "100を越えています！！" : "許容範囲内です";
// }
// console.log(checkSum(50,40));

// 論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か２はtrueになります");
// }
// if(flag1 && flag2){
//   console.log("1か２はtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
