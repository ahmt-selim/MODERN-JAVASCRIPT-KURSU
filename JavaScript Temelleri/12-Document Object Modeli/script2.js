//Selecting Elements

//*** Single Elements

//*document.getElementById()
// let val;
// val=document.getElementById("header");
// val=document.getElementById("header").id;
// val=document.getElementById("header").className;

// val=document.getElementById("header");
// //val=val.id;
// //val=val.className;
// val.style.fontSize="45px";
// val.style.color="red";
// val.style.fontWeight="bold";

// document.getElementById("header").innerText="My ToDo App";
// document.getElementById("header").innerHTML="<b>My ToDo App</b>";


// console.log(val);

//*document.querySelector()

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header"));//. başına koyulan nokta ile bulduğu ilk elemanı seçer.
console.log(document.querySelector("div"));//ilk "div"i getirir.

document.querySelector("li").style.color="red";//Bulduğu ilk "li" elemanını red yaptı.
document.querySelector("li:last-child").style.color="blue";//son "li" elemanını mavi yapar.
document.querySelector("li:nth-child(2)").style.color="green";//2. "li" elemanını yeşil yapar.


document.querySelector("li:nth-child(3)").textContent="task item";//3. "li" elemanını textini değiştirir.





//*** Multiple Elements




