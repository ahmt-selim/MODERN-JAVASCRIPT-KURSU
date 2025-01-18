//Createing Elements(Element oluşturup ekleme)

//create element

const li = document.createElement("li");

//add class
li.className="list-group-item list-group-item-secondary";

//add attribute
li.setAttribute("title","new item");
li.setAttribute("data-id", "5");

//text node
const text=document.createTextNode("new item");
li.appendChild(text);

const a=document.createElement("a");
a.setAttribute("href","#");
a.className="delete-item float-right";
a.innerHTML='<i class="fas fa-times"></i>';//a etiketinin içine verilen html yi direkt ekler.

//append a to li
li.appendChild(a);

//append li to ul
document.querySelector("#task-list").appendChild(li);

//console.log(li);

//Removing Elements(Dom etiketlerini silme)

const taskList = document.querySelector("#task-list");
//**remove element
//taskList.remove();//Tüm listeyi kaldırır
//taskList.childNodes[6].remove();//text-element-text-element olarak olışan nodelara karşılık gelen indexi kaldırır.
//taskList.children[3].remove();//3. child'ı kaldırır.
//taskList.removeChild(taskList.children[0]);// bu şekilde de istenilen element kaldırılabilir.

//**removing attributes
//taskList.children[3].removeAttribute("class");

// for(let i=0;taskList.children.length;i++){//Toplu işlem
//     taskList.children[i].removeAttribute("class");
// }
//console.log(taskList);

////**replacing elements
// const cardHeader = document.querySelector(".card-header");

// //create element
// const h2=document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent=document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);

//**Classes

let val;
link=taskList.children[0].children[0];
// val=link.className;
// val=link.classList;

link.classList.add("new");//class ekleme
link.classList.remove("new");//class kaldırma

//**Attributes */
val=link.getAttribute("class");
val=link.getAttribute("href");
val=link.setAttribute("href","https://ahmetselimkisa.com.tr");
val=link.hasAttribute("href");
console.log(val);




