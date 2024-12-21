// //Operatörler

// let val;
// const a=10;
// const b=5;
// let c=3;
// //1-Aritmetik Operatörler

// val=a+b;
// val=a-b;
// val=a*b;
// val=a/b;

// val=a%b; // a mod b =Bölümünden kalan
// val=c++; // c yi val'e yaz sonra 1 arttır.
// val=++c; // c yi 1 arttır sonra val'e yaz
// val=--c;

// //2-Atama Operatörleri
// val=a;
// val+=a; // val = val + a;
// val-=a; // val = val - a;
// val*=a; // val = val * a;

// //3-Karşılaştırma Operatörleri

// c = 5;

// val = a==b;
// val = b==c;
// val = a===b; // tür ve değer karşılaştırması yapılır.
// val = 5 === '5';
// val = a != b;
// val = a !== b;
// val = a > b;
// val = a<b;
// val = a<=b;
// val = a>=b;

// //4-Mantıksal Operatörler

// // && = AND


// // || OR 


// // ! Not


// console.log(val);
// console.log(typeof val);

// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan=60;
const kgAda=40;

const heightCan=1.70;
const heightAda=1.50;

IndexAda = (kgAda)/(heightAda*heightAda);
IndexCan = (kgCan)/(heightCan*heightCan);

console.log(IndexAda,IndexCan);
















