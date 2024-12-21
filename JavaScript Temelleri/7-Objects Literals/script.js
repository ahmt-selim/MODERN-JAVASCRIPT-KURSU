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

//Uygulama

var aracBilgileri = [
    {
    id: "bmw116d_123",
    model: "Bmw 116d",
    yil: 2015,
    renk: "Beyaz",
    servisKayitlari: [
        {
            id: "bmw116d_123_1",
            tarih: "20.01.2016",
            km: "13000",
            ucret: 900,
            detay: [
                {id:"bmw116d_123_1_1",aciklama: "Yağ değişimi",ucret: 300},
                {id:"bmw116d_123_1_2",aciklama: "Fitre değişimi",ucret: 300},
                {id:"bmw116d_123_1_3",aciklama: "Fren hidroliği değişimi",ucret: 300}
            ]
        },
        {
            id: "bmw116d_123_2",
            tarih: "10.01.2017",
            km: "28000",
            ucret: 1800,
            detay: [
                {id:"bmw116d_123_2_1",aciklama: "Yağ değişimi",ucret: 350},
                {id:"bmw116d_123_2_2",aciklama: "Fitre değişimi",ucret: 350},
                {id:"bmw116d_123_2_3",aciklama: "Fren hidroliği değişimi",ucret: 300},
                {id:"bmw116d_123_2_4",aciklama: "Balata değişimi",ucret: 800}
            ]
        }
    ]
    },
    {
        id: "bmw118i_123",
        model: "Bmw 118i",
        yil: 2015,
        renk: "Beyaz",
        servisKayitlari: [
            {
                id: "bmw118i_123_1",
                tarih: "20.01.2016",
                km: "13000",
                ucret: 900,
                detay: [
                    {id:"bmw118i_123_1_1",aciklama: "Yağ değişimi",ucret: 300},
                    {id:"bmw118i_123_1_2",aciklama: "Fitre değişimi",ucret: 300},
                    {id:"bmw118i_123_1_3",aciklama: "Fren hidroliği değişimi",ucret: 300}
                ]
            },
            {
                id: "bmw118i_123_2",
                tarih: "10.01.2017",
                km: "28000",
                ucret: 1800,
                detay: [
                    {id:"bmw118i_123_2_1",aciklama: "Yağ değişimi",ucret: 350},
                    {id:"bmw118i_123_2_2",aciklama: "Fitre değişimi",ucret: 350},
                    {id:"bmw118i_123_2_3",aciklama: "Fren hidroliği değişimi",ucret: 300},
                    {id:"bmw118i_123_2_4",aciklama: "Balata değişimi",ucret: 800}
                ]
            }
        ]
        }
]

console.log(aracBilgileri[0]);
console.log(aracBilgileri[1]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[1].model);
console.log(aracBilgileri[0].servisKayitlari[0]);
console.log(aracBilgileri[1].servisKayitlari[1].detay[2].aciklama);






