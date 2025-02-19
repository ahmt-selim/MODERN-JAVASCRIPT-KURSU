//Function Constructors Uygulamaları

/*
Demo : Creating Objects
** Disaridan name ve salary bilgilerini alan Employee
constructor'i tanimlay1n1z.
** Yil içinde o ana kadar alinan toplam maas ve
alinan toplam vergi tutarini hesaplayan fonksiyonu
olusturun.
Vergi dilimleri
** 20.000 'e kadar %20 vergi
** 30.000 'e kadar %25 vergi
** 30.000 'den sonra %27 vergi
* *
*/

let Employee = function(name, salary){
    if(!(this instanceof Employee)){ //Eğer Employee fonksiyonu new ile türetilmemişse biz otomatik olarak new'liyoruz.
        return new Employee(name, salary);
    }
    this.name=name;
    this.salary=salary;
}

Employee.prototype.calculateSalary = function(){
    var month = new Date().getMonth()+1;
    var tax = 0,total=this.salary*month;

    if(total <= 20000){
        tax = total*0.2;
    }
    else if(total > 20000 && total <= 30000){
        tax = total*0.25;
    }
    else{
        tax=total*0.3;
    }

    return{
        tax:tax,
        paid : total - tax
    }
}

var emp1 = new Employee("Ahmet", 3000);
console.log(emp1);
var emp1_salary = emp1.calculateSalary();
console.log(emp1_salary);
console.log(`${emp1.name} isimli personel toplam ${emp1_salary.tax} TL vergi kesintisi ile ${emp1_salary.paid} TL maaş almıştır.`);

var emp2 = Employee("Can", 4000);
console.log(emp2);
var emp2_salary = emp2.calculateSalary();
console.log(emp2_salary);
console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax} TL vergi kesintisi ile ${emp2_salary.paid} TL maaş almıştır.`);































