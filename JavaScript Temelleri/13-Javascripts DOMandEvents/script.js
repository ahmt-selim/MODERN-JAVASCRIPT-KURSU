//UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");// # ile id bulma . ile class bulma yapılır
let items;

//load items
loadItems();

//call event listeners
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem);

    //delete an item
    taskList.addEventListener("click", deleteItem);

    //delete all items
    btnDeleteAll.addEventListener("click", deleteAllItems);
}

function loadItems(){

    items = getItemsFromLS();
    
    items.forEach(function(item){
        createItems(item);
    });
}

//get items from Local Storage
function getItemsFromLS(){
    if(localStorage.getItem("items") === null){
        items=[];
    }
    else{
        items = JSON.parse(localStorage.getItem("items"));
    }

    return items;
}

//set item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem("items", JSON.stringify(items));
}

//delete item from LS function
function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);
        }
        
    });
    localStorage.setItem("items", JSON.stringify(items));
}


//create items
function createItems(text){
    //create li
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));
    //create a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);
    
}

//add new item function
function addNewItem(e) {

    console.log(input.value);
    if (input.value === "") {
        alert("add new item");
        return;
    }
    //create item
    createItems(input.value);

    //save to LS
    setItemToLS(input.value);


    //clear input
    text = "";
    e.preventDefault();
}

//delete an item function
function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();

        //delete item from LS
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);

    }
    e.preventDefault();
}

//delete all items function
function deleteAllItems(e) {
    if (confirm("Are you sure?")) {
        //taskList.innerHTML="";

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }



    e.preventDefault();
}



















