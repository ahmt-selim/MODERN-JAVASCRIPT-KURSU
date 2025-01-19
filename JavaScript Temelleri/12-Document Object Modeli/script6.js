//**Mouse Events */

const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelector("#task-list");

//click
// btn.addEventListener("click", eventHandler);
// ul.addEventListener("click", eventHandler);

//double click
//btn.addEventListener("dblclick",eventHandler)

//mouse down (mouse'a ilk tıklandığında çalışır.)
//btn.addEventListener("mousedown", eventHandler);

//mouse up (mouse'a tıklandığında değil tık kaldırıldığında çalışır)
//btn.addEventListener("mouseup", eventHandler);

// //mouse enter (herhangi bir kordinat içine girdiğinde tetiklenir)
// ul.addEventListener("mouseenter",eventHandler);

// //mouse leave (herhangi bir kordinat içinden çıktığında tetiklenir)
// ul.addEventListener("mouseleave",eventHandler);

// //mouse over(Seçili etiket içindeki herhangi bir etikete geçildiğinde çalışır)
// ul.addEventListener("mouseover", eventHandler);
// //mouse out(Seçili etiket içindeki herhangi bir etiketten çıkıldığında çalışır)
// ul.addEventListener("mouseout", eventHandler);

//mouse move
ul.addEventListener("mousemove",eventHandler);


function eventHandler(e){
    console.log("event type : " + e.type);
}


