console.log("Hellow world");

const first_variable = "Merhaba bu benim ilk calismam" ; // string
let second_variable = 15 ;

//first_variable = " Bunun değerini değiştirdim "   const ile olutşruduğumuz değişkenin değeri tekrar değiştiremez.

second_variable = 20 ;

let third_variable = 10 ;

//console.log("second_variable");

console.log("ikinci depişkenin değeri: ", second_variable);

const array_variable = [1,5,10,15,"Hellow",10];

console.log(array_variable);

const array_lenght = array_variable.length;
const last_element = array_variable[array_lenght - 1];

const new_element = 50.55 ;

array_variable.push(new_element);
console.log("array güncellendi:" , array_variable);


let new_array = [];

array_variable.map(t => new_array.push(t));

array_variable.map((t , index) => console.log("su anki eleman: ",t + "ve" + index))
//console.log ("new array in ciktisi:",new_array);

const boolean_variable_1 = true; // bootlean veri tipi
const bootlean_variable_2 = false; // bootlean veri tipi

// OPERATORLER // 

const kontrol_1 = (3 !==5); // true değerine sahip boolean döner
const kontrol_2 = (3 == 5); // false
const kontrol_3 = (3 > 5); // false
const kontrol_4 = (3 < 5); // true

const kontrol_5 = (15 < 20 && 3 < 1); // kontrol_5 nin true olmasi için hepsinin true olmasi gerekir.
const kontrol_6 = (6 < 7 ||  8 < 3); // kontrol_6 nin true olmasi için sadece bir şartın true olmasi yeterli.
const kontrol_7 = !kontrol_6; // kontrol_6 sonucunun tersi alır.true ise false , false ise true yapar.

const yeni_sayi = 5;

if(yeni_sayi == 4)
{
console.log("Kontrol dogru , if blogu")
}
else if (yeni_sayi ==5){
console.log("Kontrol dogru else if blogu")
}
else
{
console.log("Kontrol yanlis")
}


let hayvanlar_liste = ["Kaplan","Aslan"]

if (hayvanlar_liste.length < 3)
{
    console.log("toplam 3 den kucuktur"); 
}
    else if (hayvanlar_liste.length === 3)
{
    console.log("toplam 3 e esittir"); 
}
else 
{
    console.log("toplam 3 den fazla vardir");
}
