//Window Object

let val;
var a=10;

function abc(){
    return 0;
}
val=window;


// //alert
// alert("Merhaba");

// //promt
// var b = prompt("Bir sayı giriniz:");
// console.log(b);

// //confirm
// var val1 = confirm("Emin misiniz?");
// if(val1){
//     console.log("Ok");
// }else{
//     console.log("No");
// }

//scroll
//val = window.scrollX;
//val = window.scrollY;//window olmadan da çalışır.

//location
val = location;
let val1 = location.href;//ilgili url i döner.
let val2 = location.hostname;//hostname bilgisini getirir.
let val3 = location.host;
let val4 = location.protocol;//http protokol tipini döner.(http/https)
let val5 = location.search;//url sonundaki query string değerini getirir

console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);

//location.href="http://www.ahmetselimkisa.com.tr"; //ilgili sayfaya gider.

//location.reload(); //sayfayı yeniler.

//navigator
console.log(navigator.appCodeName);//Tarayıcı ile ilgili bildileri navigator ile çağırabilitoruz.

//document
document.getElementById('header');//html den header idli etiketi getirir.
