//UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");// # ile id bulma . ile class bulma yapılır

//call event listeners
eventListeners();

function eventListeners(){
    //submit event
    form.addEventListener("submit", addNewItem);
}

//add new item
function addNewItem(e){

    console.log(input.value);
    if(input.value === ""){
        alert("add new item");
    }
    //create li
    const li = document.createElement("li");
    li.className="list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));
    //create a
    const a = document.createElement("a");
    a.classList="delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML='<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

    //clear input
    input.value="";
    e.preventDefault();
}






















