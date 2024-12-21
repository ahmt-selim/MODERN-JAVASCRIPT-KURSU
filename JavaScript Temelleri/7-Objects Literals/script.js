//Object Literals

let val;
let person ={
    firstName:"Ahmet Selim",
    lastName:"Kısa",
    age:28,
    hobbies:["music", "game"],
    address:{
        city:"Karaman",
        country:"Turkey"
    },
    getBirthyear : function(){
        return parseInt(new Date().getFullYear() - this.age);
    }
};
console.log(typeof person);
console.log(person);

val = person.firstName;
val = person["firstName"];
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthyear();

console.log(val);

let val1;
let people = [  {firstName:"Ahmet",lastName:"Kısa"}, 
                {firstName:"Selim", lastName:"Kısa"},
                {firstName:"Mahmut", lastName:"Yılmaz"}
];

val1 = people[2].firstName;
console.log(val1);

for(let i=0; i<people.length; i++){
    console.log(people[i].firstName)
}


