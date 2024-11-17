//Ders 1
// console.log("Merhaba");
// console.error("Hata!");
// console.warn("Uyarı!");
// console.clear();

//Ders 2: Değişkenker

// var age;
// console.log(age);
// age=20;
// console.log(age);

// var fullname='Ahmet Selim KISA';
// console.log(fullname);
// fullname='Sadık Turan';
// console.log(fullname);

// //case sensitive (büyük küçük harf duyarlılığı)

// var firstName='Ahmet Selim';
// var FirstName ="Ahmet";
// console.log(firstName);
// console.log(FirstName);

// //var let const
// let city="Karaman";
// console.log(city);

// const email="abc@gmail.com";//const ile tanımlanan veriler sonradan değiştirilemez.
// console.log(email);
// email="bcd@gmail.com";
// console.log(email);

// //Ders 3: Değişken Tipleri

// //Primitive Types

//     //string
//     let firstName="Ahmet Selim";
//     console.log(typeof(firstName));

//     //number
//     let age =20;
//     let money =100.5;
//     console.log(typeof(age));
//     console.log(typeof(money));

//     //boolean
//     let isActive=true;
//     console.log(typeof(isActive));

//     //null
//     let job=null;
//     console.log(typeof(job));

//     //undefined
//     let car;
//     console.log(typeof(car));

// //Reference Types - Objects
//     //Array 
//     let names=["Ali", "Ahmet", "Can"];
//     console.log(typeof(names));

//     //Object
//     let address={
//         city:"Kocaeli",
//         country:"Türkiye"
//     };
//     console.log(typeof(address));

//     //Function
//     var CalculateAge=function(){
//         return 0;
//     };
//     console.log(typeof(CalculateAge));

//Ders 4:Tür dönüşümü

let num1=Number("5"); //string to number
let num2=Number("10");
let total = num1+num2;
console.log(total);
console.log(typeof total);

let num3=String(10);//number to string
console.log(num3);
console.log(typeof num3);

let val;

//bool to string
val=String(true);
console.log(val);
console.log(typeof val);

//date to string
val=String(new Date());
console.log(val);

//arrat to string
val = String([1,2,3,4,5]);
console.log(val);

//toString()
val=(10).toString();
console.log(val);

//string to number
val=Number("15");
console.log(val);
console.log(val.toFixed(3));

//bool to number 
let val1;
let val2;
let val3;
val=Number(true);
val1=Number(false);
val2=Number(null);
val3=Number("asda");

console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);

//parsaInt
//parseFloat

val= parseInt("18");
val1=parseFloat("15.67");
console.log(val);
console.log(val1);












