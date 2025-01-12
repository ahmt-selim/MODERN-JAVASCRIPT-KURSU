/*Demo Loops : Sayi Tahmin Oyunu
1-10 arasi rastgele sayi üretilen bir say1y1
asagi yukari ifadeleri ile buldurmaya çalisin.
** puanlama yapin.
** kullanici kaç kerede bilecegini belirtebilsir.
*/

var hak = 5,can;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);

console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt("Bir sayı giriniz"));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan: ${100 - (20)*(sayac-1)}`)

        break;
    }else if(sayi > tahmin){
        console.log("yukarı");
    }else{
        console.log("aşağı");
    }

    if(hak == 0){
        console.log("hakkınız bitti. sayı: "+sayi);
    }
}

