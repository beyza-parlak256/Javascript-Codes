/*
let ad = "Beyza";
let soyad = "PARLAK";
let yas = 23;
let sehir = "HATAY";

let mesaj = "Adim: " + ad + " Soyadim: " + soyad + " Yasim: " + yas + " Yasadigim Sehir: " + sehir + " Emeklilige Kalan Yil: " + (65 - yas);
// alt ve üst aynı işlevde. Ters tırnak işareti -> alt gr + i + , 
let mesaj1 = `Adim: ${ad}, Soyadim: ${soyad}, Yasim: ${yas}, Yasadigim Sehir: ${sehir}, Emeklilige Kalan Yil: ${65-yas}`;
console.log(mesaj);
*/


let metin = " Javascript Öğreniyorum";

let sonuc1= metin.toLowerCase();
let sonuc2 = metin.toUpperCase();
let sonuc4 = metin.slice(0,6);
let sonuc5 = metin.slice(-10,-5); // -10 ile -5 arasını alır
let sonuc6 = metin.substring(10); // ilk 10 karakteri siler
let sonuc7 = metin.replace("Javascript", "Python"); // değişirir

//console.log(sonuc1);
//console.log(sonuc2);
//console.log(sonuc4);
//console.log(sonuc5);
//console.log(metin.length);
//console.log(sonuc6);
//console.log(sonuc7);

console.log(metin.trimEnd()); // sondaki bosluk karakterkerini siler
console.log(metin.trimStart()); // baştaki bosluk karakterkerini siler
console.log(metin.indexOf("Öğreniyorum")); // kelimeyi bulup kaçtan başladığını yazar