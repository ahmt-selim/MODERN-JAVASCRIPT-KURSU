//Prototype(Inhetitance)

//Kalıtım işlemi

let Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge = function(){//Bu şekilde bir fonksiyonu ilgili nesneye ekleyebiliriz.
    return 2025-this.yearOfBirth;
}
Person.prototype.getName = function(){//Bu şekilde bir fonksiyonu ilgili nesneye ekleyebiliriz.
    return this.name;
}
let ahmet = new Person("Ahmet", 1996, "Doktor");
let selim = new Person("Selim", 2000, "Öğretmen");

console.log(ahmet);
console.log(ahmet.calculateAge());
console.log("*******************");
console.log(selim);
console.log(selim.calculateAge());
console.log(selim.getName());






























