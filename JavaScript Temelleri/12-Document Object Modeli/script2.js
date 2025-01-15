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

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));//. başına koyulan nokta ile bulduğu ilk elemanı seçer.
// console.log(document.querySelector("div"));//ilk "div"i getirir.

// document.querySelector("li").style.color="red";//Bulduğu ilk "li" elemanını red yaptı.
// document.querySelector("li:last-child").style.color="blue";//son "li" elemanını mavi yapar.
// document.querySelector("li:nth-child(2)").style.color="green";//2. "li" elemanını yeşil yapar.


// document.querySelector("li:nth-child(3)").textContent="task item";//3. "li" elemanını textini değiştirir.





//*** Multiple Elements

//class name
//document.getElementByClassName()

let val;
// val=document.getElementsByClassName("list-group-item");

// //val=val[2];
// val[2].style.color="green";
// val[2].style.fontSize="25px";
// val[1].textContent="new item";

// for(let i=0;i<val.length;i++){
//     val[i].style.color="red";
//     val[i].textContent="Button"+(i+1);
// }


//document.getElementByTagName()

// val=document.getElementsByTagName("li");
// val=document.getElementById("task-list");
// val=val.getElementsByTagName("a");


//document.querySelectorAll()

// val=document.querySelectorAll("li");

// val.forEach(function(item,index){
//     item.textContent=index + " - hello"
// });

val=document.querySelectorAll("li:nth-child(odd)");//li etiketlerinin tek sayılı indexlerini getirir.

val.forEach(function(item){
    item.style.background="#ccc"
})




console.log(val);
