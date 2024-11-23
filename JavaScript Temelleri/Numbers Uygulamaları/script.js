// Numbers

// let val;
// val=10;
// //val = Number('15');
// val = parseInt("10.5");
// val = parseFloat("10.5");
// val = parseInt("a100");
// val = isNaN("10");
// val = isNaN("a10");//İçindeği değerin number a çevriliğ çevrilmeyeceğini kontrol eder. Not a Number

// var num = 10.123456789;
// val = num.toPrecision(5); //Baştan itibaren içindeki sayı kadar veri getirir.
// val = num.toFixed(5);// virgülden sonra 5 basamak getirir.

// val = Math.PI;
// val = Math.round(2.45); // sayıyı en yakın tam sayıya yuvarlar. 
// val= Math.ceil(2.4); // Her zaman yukarı yuvarlar.
// val = Math.floor(2.9); // Her zaman aşağıya yuvarlar.
// val = Math.sqrt(64); // Karekök bulma.
// val = Math.pow(2,4); // Üs alır.
// val = Math.abs(-100); // Mutlak değer alır.
// val = Math.min(5,7,9,4,6,0,1); // gönderilen sayı dizisindeki en küçük sayıyı verir.
// val = Math.random(); //0-1 arasında Random sayı üretir.
// val = Math.floor(Math.random()*10);
// console.log(val)
// console.log(typeof val)


//Number Uygulamalar
var num  = 15.123456879;
// toplamda 3 basamaklı sayı kullan.
console.log(num.toPrecision(5));

// ondalık kısmı 5 basamakta sınırla
console.log(num.toFixed(5));

//en yakın sayıya yuvarla
console.log(Math.round(num));

//aşağı yuvarla
console.log(Math.floor(num));

//yukarı yuvarla
console.log(Math.ceil(num));

//50-100 sayı aralığında rastgele bir sayı üretin.
var min = 50;
var max = 100;
console.log(Math.floor(min + Math.random() * (max-min)))

/*Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayın
Brüt maaş: 3700 TL
Brüt mesai: 10.3 TL*/
//1-Ağustos ayı mesai toplamı 43 saat ise toplam brüt maaş nedir?
var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = 3700 + (10.3*42);
console.log(toplamBrutMaas);
//2-Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?

var toplamNetMaas = toplamBrutMaas - (toplamBrutMaas*25/100)

console.log(toplamNetMaas.toFixed(3));





