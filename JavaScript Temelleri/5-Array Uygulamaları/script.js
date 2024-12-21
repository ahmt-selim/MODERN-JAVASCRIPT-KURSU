//Arrays
let names = ["Ahmet","Sena","Turan","Ada","Yiğit"];
let years = [2017, 2018, 1996, 2001, 2022, 2024];
let mix = ["Ahmet", "Kısa", 1996,null,undefined,["sinema","kitap"]];

names[0] = "Emel";
names[6] = "Yasin"
names[names.length] = "Ali";

years.push(1986); //Diziye yeni eleman ekler.
years.unshift(1984); //Dizinin başına yeni eleman ekler.

years.pop();//Dizinin Sonundaki elemanı siler.
years.shift(); //Dizinin başındaki elemanı siler.

let index = names.indexOf("Ali");//Elemanın indexini verir.
console.log("index: " + index);

names.splice(2,1,"seda"); //2. elemandan itibaren 1 tane elaman silip "seda"yı ekler.

console.log(names);
console.log(typeof names);
console.log(years);
console.log(mix);

let val = years.concat(names);//İki diziyi birleştirir.
console.log(val);


function over18(year){
    let age = 2024 - year;
    return age>=18;
}

let val1 = years.find(over18); //find: years dizisindeki elemanları tek tek over18 fonsiyonuna gönderip true dönen ilk değeri bulur.
console.log(val1);

let val2 = years.filter(over18); //filter: years dizisindeki elemanları tek tek over18 fonsiyonuna gönderip true dönen değerleri dizi halinde döner.
console.log(val2);

//Demo : Arrays

var arr = ["Bmw", "Mercedes", "Opel", "Mazda"];
//var arr = new Array("Bmw", "Mercedes", "Opel", "Mazda");
console.log(arr);
console.log(arr.length);
console.log(arr[0],"/ "+ arr[arr.length-1]);
arr[arr.length] = "Renault";
console.log(arr);

arr.reverse();
console.log(arr);

console.log(arr.indexOf("Opel"));
console.log(arr.indexOf("Proton"));
console.log(arr.includes("Subaru"));

var str = "Chevrolet,Dacia";
var arr2 = str.split(",");
console.log(arr2);
var arr3 = arr.concat(arr2);
console.log(arr3);


