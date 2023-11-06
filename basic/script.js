// ---------- DEĞİŞKENLER -----------------
/*

var maasAli = 10000;
var maasCan = 8000;
var zam = 0.3;

console.log("Ali'nin maaşı " + (maasAli + (maasAli * zam)));
console.log("Can'ın maaşı " +(maasCan + (maasAli * zam)));
*/

/*
var urunAdi = "Redmi Note 13 T Pro";
let urunFiyati = 15000;

console.log(typeof urunAdi);
console.log(typeof urunFiyati);

let sayi1 = 10;
let sayi2 = 50;
console.log(sayi1 + sayi2); // burada int toplama işlemi yapıldı
*/
/*
let sayi12 = "10";
let sayi22 = "50";
console.log(sayi12.toString() + sayi22.toString()); // burada string toplama işlemi yapıldı

let sayi3 = "56";
let sayi4 = "77";
console.log(Number(sayi3) + Number(sayi4)); // burada stringi inte çevirip toplama işlemi yapıldı

/*
let ad = "Beyza";
let soyad = "Parlak";
console.log(ad + " " + soyad);

let sinavNotu = 100;
let basariliMi = (sinavNotu>70); // boolean değişken kullanımı
console.log(basariliMi);
console.log(typeof(basariliMi)); // değişkenin türünü öğrenmek istiyorum
*/
/**/
let ogrenciAd_1 = "Ada Bilgi";
let ogr_1DogumTarih = 2012;
let ogr1_1 = 70;
let ogr1_2 = 70;
let ogr1_3 = 80;
let ortalama_1 = (ogr1_1 + ogr1_2 + ogr1_3) / 3;
//console.log(parseInt(ortalama_1));
//console.log(ortalama_1 >= 50); // ortalama 50 ye eşit ve buyukse true döndürür

let ogrenciAd_2 = "Deniz Bilgi";
let ogr_2DogumTarih = 2010;
let ogr2_1 = 40;
let ogr2_2 = 40;
let ogr2_3 = 50;
let ortalama_2 = (ogr2_1 + ogr2_1 + ogr2_3) / 3;
//console.log(parseInt(ortalama_2));
//console.log(ortalama_2 >= 50);  // ortalama 50 ye eşit ve buyukse true döndürür


let suankiYil = new Date().getFullYear(); // bilgisayarın şuanki saatini alır
let ogr_1Yas = suankiYil - parseInt(ogr_1DogumTarih); // parseint ile int sonuç verir
let ogr_2Yas = suankiYil - parseInt(ogr_2DogumTarih);


