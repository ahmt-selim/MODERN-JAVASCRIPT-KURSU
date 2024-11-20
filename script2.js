//Operatörler

let val;
const a=10;
const b=5;
let c=3;
//1-Aritmetik Operatörler

val=a+b;
val=a-b;
val=a*b;
val=a/b;

val=a%b; // a mod b =Bölümünden kalan
val=c++; // c yi val'e yaz sonra 1 arttır.
val=++c; // c yi 1 arttır sonra val'e yaz
val=--c;

//2-Atama Operatörleri
val=a;
val+=a; // val = val + a;
val-=a; // val = val - a;
val*=a; // val = val * a;

//3-Karşılaştırma Operatörleri

c = 5;

val = a==b;
val = b==c;
val = a===b; // tür ve değer karşılaştırması yapılır.
val = 5 === '5';
val = a != b;
val = a !== b;
val = a > b;
val = a<b;
val = a<=b;
val = a>=b;

//4-Mantıksal Operatörler

// && = AND


// || OR 


// ! Not


console.log(val);
console.log(typeof val);