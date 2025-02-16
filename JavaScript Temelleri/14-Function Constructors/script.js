//Function Constructors

function Person(name,yearofBirth,job){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2025-this.yearofBirth;
    }
    //console.log(this);
}

let ahmet = new Person("Ahmet Selim", 2004, "Yazılımcı");

let emel = new Person("Emel", 2002, "Aşçı");

console.log(ahmet.name);
console.log(ahmet.job);
console.log(ahmet.calculateAge());
console.log("***************");
console.log(emel.name);
console.log(emel.yearofBirth);
console.log(emel.calculateAge());





































