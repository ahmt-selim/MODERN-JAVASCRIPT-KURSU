//Sinema Bilet Rezervasyonu

const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");


container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved"))//tıklanan elemanın classında seat içeriyorsa ve reserved içermiyorsa şartı ekledik.
    { 
        e.target.classList.toggle("selected"); //selected classı varsa kaldırır yoksa ekler.
        calculateTotal();
        
    }
});

select.addEventListener("change", function(e){
    calculateTotal();
});

function calculateTotal(){
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;//container deki seat ve selected classına sahip nesnelerin sayısını verir.
        let price = select.value;
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * price;
}










































