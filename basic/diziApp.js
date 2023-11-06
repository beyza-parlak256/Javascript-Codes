// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluştur.
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length);
// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]);
console.log(meyveler[meyveler.length-1]);

// 4- "Elma" dizinin elemanı mıdır?
console.log(meyveler.includes("Elma"));

// 5- "Kiraz" ı dizinin sonuna ekle.
// meyveler[meyveler.length] = "Kiraz";
console.log(meyveler.push("Kiraz"));

// 6- Dizinin son iki elemanını sil.
/*
console.log(meyveler.pop());
console.log(meyveler.pop());*/
meyveler.splice(meyveler.length-2); // son iki elemanı silen 2.yol
 
// 7- Aşağıdaki bilgileri dizi içerisinde sakla ve her öğrencinin yaşını, not ortalamasını hesapla.
    /* Ogr 1: Beyza PARLAK 2000 (80,50,90)
       Ogr 2: Aslı GÜLTEKİN 2000 (95,100,100)
       Ogr 3: Ali Bilgin 2006 (65,80,70)
       Ogr 4: Burak PAK 1999 (90,95,100)
    */

let ogr1 = ["Beyza","PARLAK",2000,[80,50,90]];
let ogr2 = ["Aslı","GÜLTEKİN",2000,[95,100,100]];
let ogr3 = ["Ali","BİLGİN",2006,[65,80,70]];
let ogr4 = ["Burak","PAK",1999,[90,95,100]];
let ogrenciler = [ogr1,ogr2,ogr3,ogr4];

let yas_1 = new Date().getFullYear() - ogrenciler[0][2];
let yas_2 = new Date().getFullYear() - ogrenciler[1][2];
let yas_3 = new Date().getFullYear() - ogrenciler[2][2];
let yas_4 = new Date().getFullYear() - ogrenciler[3][2];

console.log(yas_1);
console.log(yas_2);
console.log(yas_3);
console.log(yas_4);

let not_1 = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let not_2 = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let not_3 = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;
let not_4 = (ogrenciler[3][3][0] + ogrenciler[3][3][1] + ogrenciler[3][3][2]) / 3;

console.log(not_1.toFixed(1),not_2.toFixed(1),not_3.toFixed(1),not_4.toFixed(1));




