//Ders 1
// console.log("Merhaba");
// console.error("Hata!");
// console.warn("Uyarı!");
// console.clear();

//Ders 2: Değişkenker

// var age;
// console.log(age);
// age=20;
// console.log(age);

// var fullname='Ahmet Selim KISA';
// console.log(fullname);
// fullname='Sadık Turan';
// console.log(fullname);

// //case sensitive (büyük küçük harf duyarlılığı)

// var firstName='Ahmet Selim';
// var FirstName ="Ahmet";
// console.log(firstName);
// console.log(FirstName);

// //var let const
// let city="Karaman";
// console.log(city);

// const email="abc@gmail.com";//const ile tanımlanan veriler sonradan değiştirilemez.
// console.log(email);
// email="bcd@gmail.com";
// console.log(email);

//Ders 3: Değişken Tipleri

//Primitive Types

    //string
    let firstName="Ahmet Selim";
    console.log(typeof(firstName));

    //number
    let age =20;
    let money =100.5;
    console.log(typeof(age));
    console.log(typeof(money));

    //boolean
    let isActive=true;
    console.log(typeof(isActive));

    //null
    let job=null;
    console.log(typeof(job));

    //undefined
    let car;
    console.log(typeof(car));

//Reference Types - Objects
    //Array 
    let names=["Ali", "Ahmet", "Can"];
    console.log(typeof(names));

    //Object
    let address={
        city:"Kocaeli",
        country:"Türkiye"
    };
    console.log(typeof(address));

    //Function
    var CalculateAge=function(){
        return 0;
    };
    console.log(typeof(CalculateAge));



























