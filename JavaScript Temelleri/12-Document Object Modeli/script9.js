//LOCAL STORAGE
//Tarayıcı kapanca bile belli url ile ilişkilendrilmiş veriler burada tutulur.
let val;
//setItem
const firstName = localStorage.setItem("firstName", "Ahmet");
const lastName = localStorage.setItem("lastName", "Kısa");

let hobies = ["sinema", "araba", "gezmek"];


//getItem
val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");

//removeItem
//localStorage.removeItem("firstName");

//clear
//localStorage.clear();

//set array to storage
//localStorage.setItem("hobies", hobies); //Bu şekilde array bilgi yazdırıldığında string olarak yazılır.
localStorage.setItem("hobies", JSON.stringify(hobies));//JSON.stringify olarak yazdırmak istediğimizde başına JSON eklemeliyiz.
val = JSON.parse(localStorage.getItem("hobies"));

console.log(localStorage);
console.log(val);




//SESSİON STORAGE
//Tarayıcı açık kaldığı sürece veriler hafızada tutulur.
// const city = sessionStorage.setItem("city", "Karaman");
// const country = sessionStorage.setItem("country", "Türkiye");

// console.log(sessionStorage);


















