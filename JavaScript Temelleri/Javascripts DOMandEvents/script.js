//UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");// # ile id bulma . ile class bulma yapılır
const items = ["item 1", "item 2", "item 3"];

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
    items.forEach(function(item){
        createItems(item);
    });
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
    }
    //create item
    createItems(input.value);

    //clear input
    text = "";
    e.preventDefault();
}

//delete an item function
function deleteItem(e) {
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
    e.preventDefault();
}

//delete all items function
function deleteAllItems(e) {
    if (confirm("Are you sure?")) {
        //taskList.innerHTML="";

        taskList.childNodes.forEach(function (item) {
            //console.log(item);
            if (item.nodeType === 1) {
                item.remove();
            }
        });
    }



    e.preventDefault();
}



















