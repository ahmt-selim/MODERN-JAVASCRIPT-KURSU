// Date Object

let d = new Date();
let birthday= new Date(1996,11,21);
//Set Methods
d.setFullYear(2020);
d.setMonth(5);
d.setDate(20);
d.setHours(10);


//Get Methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d);
console.log(typeof d);

console.log(d.getFullYear()-birthday.getFullYear())
console.log(d.getMonth()-birthday.getMilliseconds())
console.log(d.getDate()-birthday.getDate())


