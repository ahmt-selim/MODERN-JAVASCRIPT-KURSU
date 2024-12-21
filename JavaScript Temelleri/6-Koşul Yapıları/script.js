// İf/Else

const firstName = "Ahmet";
const age = 19;
const isStudent = true;
const school = "high school";

if (firstName === "Sena") {
    console.log("Merhaba Sena");
}

if (age === 19) {
    console.log("Yaşınız 19");
}

if (isStudent) {
    console.log("Merhaba Öğrenci");
} else {
    console.log("Öğrenci değilsiniz.");
}

if (age >= 18) {
    if (school == "univercity" || school == "high school") {
        console.log("Ehliyet alabilirsiniz.")
    }
    else {
        console.log("Eğitim durumunuz yetersiz")
    }

} else {
    console.log("Ehliyet alamazsınız.")
}

if (age > 0 && age < 12) {
    console.log(`${firstName} is a child.`);
} else if (age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager.`);
}
else {
    console.log(`${firstName} is a adult.`);
}

//Switch

let category = "telefon";

switch (category) {
    case "tablet":
        console.log("Tablet kategorisi");
        break;
    case "telefon":
        console.log("Telefon kategorisi");
        break;
    case "bilgisayar":
        console.log("Bilgisayar Kategorisi");
        break;
    default:
        console.log("Tanımsız Kategori");

}

let day;
console.log(new Date().getDay())
switch (new Date().getDay()) {
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Salı";
        break;
    case 3:
        day = "Çarşamba";
        break;
    case 4:
        day = "Perşembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
    case 0:
        day = "Pazar";
        break;
}
console.log("Bugün günlerden:",day)
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = "Hafta İçi";
        break;
    case 6:
    case 0:
        day = "Hafta Sonu";
        break;
}
console.log("Bugün günlerden:",day)

//Uygulama
var res = prompt("Who is there?");
if(res == "cancel"){
    console.log("Cancelled");
}
else if(res == "admin"){
    console.log("Welcome Admin");
    var password = prompt("Enter your password.");
    if(password == "cancel"){
        console.log("Cancelled");
    }
    else if(password == "123"){
        console.log("Welcome Admin");
    }
    else{
        console.log("Wrong Password");
    }
}
else{
    console.log("I dont know you.");
}







