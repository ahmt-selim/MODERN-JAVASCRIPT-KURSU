// // Date Object

// let d = new Date();
// let birthday= new Date(1996,11,21);
// //Set Methods
// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);


// //Get Methods
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// console.log(d);
// console.log(typeof d);

// console.log(d.getFullYear()-birthday.getFullYear())
// console.log(d.getMonth()-birthday.getMilliseconds())
// console.log(d.getDate()-birthday.getDate())

//Uygulamalar

//Tarih ve saat bilgisi içeren bir Date Objesi oluşturunuz
var dtA = new Date('8/24/1990 15:10:00');//Ay/Gün/Yıl Saat:Dakika:Saniye
var dtB=new Date(2010,7,21,14,50,10);

console.log(dtA)
console.log(dtB)

//01/01/1999 tarihinden 1 gün öncesini gözteriniz.
var date1=new Date("1/1/1990");
var date2 =date1.getDate();
date1.setDate(date2-1);
console.log(date1);

//2 tarih arasındaki geçn süreyi hesapla.
var startDate= new Date("1/1/2020");
var endDate=new Date("1/1/2024");
var fark = endDate-startDate
console.log(fark);//İki tarih nesnesinin farkı alındığında sonucu milisaniye cinsinden döner.
var milisaniye = fark;
var saniye = fark/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gun = saat/24;

console.log(gun);

//Yaş hesaplama.
var birthday = new Date("11/21/1996")
console.log(birthday.getTime()); //Bu tarihin milisaniye cinsinden değeri 
var ageDifsMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifsMs);
console.log(ageDate)
console.log(ageDate.getFullYear() - 1970);//Milisaniye cinsinden hesaplanan tarih bilgilerinin içinde 1970 tarihi de vardır.

// Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate()+1);
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);












