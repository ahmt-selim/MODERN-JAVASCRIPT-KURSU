//Functions

function yasHesapla(dogumYili){
    return 2025- dogumYili;
}

let val = yasHesapla(1996);
console.log(val);

function emeklilikHesabi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65-yas;

    if(emeklilik >0){
        console.log(`Emekli olmanıza ${emeklilik} yıl kaldı.`);
    }else {
        console.log("Zaten emekli oldunuz.");
    }
}

emeklilikHesabi(1996, "Ahmet Selim");

//Functions Declarations

// function sum(a,b){
//     var c=a+b;
//     return c;
// }
// console.log(sum(10,20));


//Function Expressions

// const sum = function (a,b){
//     var c = a+b;
//     return c;
// }


const sum = function (a=0,b=0){
    if(typeof a === 'undefined'){a=0;}
    if(typeof b === 'undefined'){b=0;}
    var c = a+b;
    return c;
}
console.log(sum(10,20));
console.log(sum(10));
console.log(sum(10,30,20,45));
console.log(sum());

function args(){
    console.log(arguments);
}

console.log(args(10,50,45,90));

function sumAll(){
    var total=0;

    for(let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}

console.log(sumAll(10,20,30,40));

//Demo : Functions

var hesapA={
    ad:"Ahmet Selim",
    hesapNo:"35451321",
    bakiye:5000,
    ekHesap:3000
}

var hesapB={
    ad:"Ayşe",
    hesapNo:"25464342",
    bakiye:3000,
    ekHesap:1000
}

function paraCek(hesap, miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye>=miktar){
        hesap.bakiye -= miktar;
        console.log("Paranızı alabilirsiniz.")
    }
    else{
        var toplam = hesap.bakiye + hesap.ekHesap;
        if(toplam >= miktar){
            if(confirm("Ek hesabınızı kullanmak ister misiniz?")){
                console.log("Paranızı alabilirsiniz.")
                var bakiye =hesap.bakiye;
                var ekhesap=miktar-bakiye;
                hesap.bakiye=0;
                hesap.ekHesap-=ekhesap;
            }
            else{
                console.log(hesap.hesapNo + " nolu ek hesabınızda yeterli miktar bulunmamaktadır.");
            }
        }
        else{
            console.log("Üzgünüz bakiye yetersiz.");
        }
    }
    
}

paraCek(hesapA,6000);
paraCek(hesapA,4000);
//paraCek(hesapB,1000);



