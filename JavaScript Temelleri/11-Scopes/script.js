//Scopes

// ** Global Scopes
var name="Çınar";
console.log(name);

function logName(){
    var name="Ahmet";
    var age=25;
    console.log(name,age);
}
logName();

if(true){
    var age=30;
    console.log("Block scope", age);
}
console.log("Global scope", age);

// ** Local Scopes

//Fonksiyonlar kendi scope'larını oluşturur.
//Bloklar yeni scope oluşturmaz.
//ES6 ile gelen let ve const block scope oluşturur. Yani blok içinde tanımlanan değişkenler blok dışında kullanılamaz.

console.log("******************");

if(true){
    var model = "Opel";
    let year=2016;
    const color="white";
    console.log("block scope",model,year,color);

}
console.log(model);
//console.log(year);
//console.log(color);

var i=1;
for(let i=0;i<10;i++){
    console.log("i",i);
}

console.log(i);






