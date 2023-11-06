// 1: ÇARPIM TABLOSU
/*
console.log("----- ÇARPIM TABLOSU -----");
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        console.log(i + " x " + j + " = " + (i*j));
    }
    console.log("..................");
}
*/

let sayilar = [1,3,5,7,9];
/*
// 2: sayilar listesindeki her bir elemanı yazdır.
for(let i=0; i < sayilar.length; i++){
    console.log(i + ". sayi " + sayilar[i]);
}
*/

/*
// 3: sayilar listesinde 3 ün katı olan elemanları yazdır.
for(let i=0; i < sayilar.length; i++){
    if(sayilar[i] % 3 == 0){
        console.log(sayilar[i]);
    }
}
*/

let urunler = ["redmi note 12 pro", "redmi note 13", "iphone 15 pro max", "samsung galaxy s20 ultra", "samsung galaxy a54"];

/*
// 4: urunler listesindeki tüm ürünleri büyük harf ile yazdır.
for(let i=0; i < urunler.length; i++){
    console.log(urunler[i].toUpperCase());
}
*/

/*
// 5: urunler listesinde içinde pro geçen ürünleri yazdır.
for(let i=0; i < urunler.length; i++){
    if(urunler[i].includes("pro")){
        console.log(urunler[i]);
    }
}
*/

let ogrenciler = [
                    {"ad":"beyza","soyad":"wasd","yas":23,"notlar":[90,80,90]},
                    {"ad":"aslı","soyad":"ward","yas":23,"notlar":[90,100,95]},
                    {"ad":"sibel","soyad":"warsd","yas":23,"notlar":[90,80,85]},
];

// 6: ogrenciler listesindeki her öğrencinin not ortalamasını ve başarı durumunu yazdır.

for(let ogrenci of ogrenciler){
    let toplam = 0, ortalama = 0, adet = 0;
    for(let not of ogrenci.notlar){
        toplam += not;
        adet++;
    }
    ortalama = toplam / adet;
    console.log(ogrenci.ad + " " + ogrenci.soyad + " isimli ogrencinin not ortalaması : " + ortalama);
    if(ortalama >= 50){
        console.log("Başarılı");
    }
    else{
        console.log("Başarısız..");
    }
}







