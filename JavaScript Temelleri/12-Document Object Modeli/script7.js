//**Keyboard Events

const input =document.querySelector("#txtTaskName");
const form =document.querySelector("form");
const select=document.querySelector("select");
// input.addEventListener("keydown",eventHandler);//klavyeden bir tuşa basıldığında tetiklenir.
// input.addEventListener("keyup",eventHandler);//bir tuşa basılıp kaldırıldığında tetiklenir.
//input.addEventListener("keypress",eventHandler);//herhangi bir tuşa basıldığında tetiklenir.
//input.addEventListener("focus", eventHandler);//ilgili textboxa veya nesneye focus olunduğunda tetiklenir.
//input.addEventListener("cut",eventHandler);//kesme işlemi yapıldığında tetiklenir.
//input.addEventListener("paste",eventHandler);//yapıştırma işlemi yapıldığında tetiklenir.
//input.addEventListener("select",eventHandler);//textboxtan herhangibir veri seçildiğinde çalışır.

select.addEventListener("change",eventHandler);//comboboxtaki değer değiştirildiğinde tetiklenir.

form.addEventListener("submit",eventHandler);//form submit olduğunda çalışır.




function eventHandler(event){
    console.log("event type : " + event.type);
    // console.log("key code: " + event.keyCode);
    // console.log("value : " + event.target.value);
    //event.target.style.backgroundColor="yellow";

    event.preventDefault();//ile bu eventin varsayılan özelliğini iptal etmiş oluyoruz.
}





















