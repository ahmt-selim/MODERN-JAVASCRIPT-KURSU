//Loops

//for loop

// for(let i=2; i<10; i++){
//     //console.log(i);
//     if(i==3){
//         console.log("En sevdiğim rakam:" + i);
//         continue;
//     }
//     console.log(i);
// }

//while loop

// let j =0;
// while(j<11){
//     console.log(j);
//     j++;
// }

//do-while loop

// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i<5)

//Loops in Array & Objects

let cars = ["Bmw", "Mercedes", "Toyota"];
let people = [
    {firstName:"Ahmet", lastName: "Kısa"},
    {firstName:"Selim", lastName: "Kara"},
    {firstName:"Mahmut", lastName: "Yılmaz"}
];
//Arrays

for(let i =0; i<people.length;i++)
{
    console.log(people[i].firstName)
}

//Object
//for in
for(let i in cars){
    console.log(`index : ${i} value : ${cars[i]}`);
}

//foreach

cars.forEach(function(item){
    console.log(item);
});

//map: returns an array

let val = people.map(function(item){
    return item.firstName + " " + item.lastName;
});
console.log(val);

let numbers=[1,5,7,8,11];

let num = numbers.map(function(n){
    return n*n;
})
console.log(num);
