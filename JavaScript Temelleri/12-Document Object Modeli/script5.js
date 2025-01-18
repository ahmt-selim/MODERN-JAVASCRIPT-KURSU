//Event Listeners

const btn=document.querySelector("#btnDeleteAll");

btn.addEventListener("click",function(e) {
    let val;
    val=e;
    val=e.target;//hangi butona tıklandığını gösterir.
    val=e.target.id;//buton idsini verir
    val=e.target.classList;//buton classlarını döner
    val=e.type;//buton olay tipi verir(click gibi)
    console.log(val);
});
btn.addEventListener("mouseover",function(e) {//mouse ile üzerine her gelindiğinde tetiklenir.
    let val;
    val=e;
    val=e.target;//hangi butona tıklandığını gösterir.
    val=e.target.id;//buton idsini verir
    val=e.target.classList;//buton classlarını döner
    val=e.type;//buton olay tipi verir(click gibi)
    console.log(val);
});

// btn.addEventListener("click",btnClick);

// function btnClick(e){
//     console.log("Butona basıldı.");
//     e.preventDefault();//İlgili butonda href '#' olduğu için nutona basıldığında sayfa yenilenip scroll en yukarı gider. preventDefault() fonskiyonu ile bu engellenir.
// }



console.log(btn);

























