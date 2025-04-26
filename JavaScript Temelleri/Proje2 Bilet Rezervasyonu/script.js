//Sinema Bilet Rezervasyonu

const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");//seat classına sahip ama reserved classına sahip olmayan nesneleri seçer.

getFromLocalStorage();
calculateTotal();

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
var selectedSeatIndex = [];
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
    selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;//container deki seat ve selected classına sahip nesnelerin sayısını verir.
        let price = select.value;
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * price;

}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }


    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}


const saveButton = document.getElementById("save");

saveButton.addEventListener("click", function() {
    saveToLocalStorage(selectedSeatIndex);
});
function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}








































