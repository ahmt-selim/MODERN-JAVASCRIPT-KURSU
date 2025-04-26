//Sinema Bilet Rezervasyonu

const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");//seat classına sahip ama reserved classına sahip olmayan nesneleri seçer.

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
    const selectedSeats = container.querySelectorAll(".seat.selected");
    
    const selectedSeatsArr = [];
    const seatsArr =[];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    //[1,3,5]
    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });


    let selectedSeatCount = selectedSeats.length;//container deki seat ve selected classına sahip nesnelerin sayısını verir.
        let price = select.value;
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * price;

        saveToLocalStorage(selectedSeatIndex);
}

function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}








































