// Strings

// const firstName='Ahmet Selim';
// const lastName = "Kısa";
// const age = 35;
// let val;

// // string concatenation(string birleştirme işlemi)

// val = firstName + " " + lastName;
// val = "Ahmet Selim";
// val += " Kısa";

// val = "Benim adım "+firstName+" "+lastName + " ve yaşım " + age + ". İzmit'te yaşıyorum";

// //string concat

// val = firstName.concat(" ", lastName);


// val = val.toUpperCase();
// val = val.toLowerCase();

// //val = val[3];
// //val = val.indexOf("t");
// //val = val.indexOf("kisa");

// //val = val.substring(3,8);

// val = val.replace("ahmet", "mehmet");


// console.log(val);
// console.log(typeof val);



// //string length
// val = val.length // string karakter sayısı
// console.log(val);
// console.log(typeof val);

//Template Strings

const fullName = "Ahmet Kısa";
const city = "Karaman";
const yearOfBirth = 1996;

let val;

val = "My name is " + fullName + ". I'm " + (2024-yearOfBirth) + " years old and I live in " + city;

console.log(val);
//terrnary operatörü
val = `My name is ${fullName}. I'm ${2024-yearOfBirth} years old and I live in ${city}`;

console.log(val);



