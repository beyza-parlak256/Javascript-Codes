
// // ------ Arrow Function -------------------------------------
// // Tek satır ise parantez kullanılmamalı yoksa hata alınır.
// // return olduğu zaman => kullanılır
// const entry = (name) => {
//     console.log("Hello " + name);
// }
// entry("Beyza");

// // -----------------------------------------------------------
// const operation = (x,y,z) => x*y*z;
// var result = operation(5,5,5);
// console.log("Result : " + result);

// // ---------------- Arrays -----------------------------------

// const numbers = [12,69,36,63,82,18,21,85,87,97];

// // filter() metodunun görevi; şarta uyan sayıları couple_numbers listesine ekler
// const couple_numbers1 = numbers.filter((number) => number % 2 == 0);
// // map() metodu verilen koşulun değerini döndürür, filtreleme yapmaz
// const couple_numbers2 = numbers.map((number) => number % 2 == 0);

// console.log(couple_numbers1);
// console.log(couple_numbers2);*/


// const products = [
//     {productName: "Lenovo Notebook ", model:"XL32", price: 32000},
//     {productName: "Monster Notebook ", model:"AX32", price: 16000},
//     {productName: "MSI Notebook ", model:"XCVQ", price: 45000},
//     {productName: "Lenovo Mouse ", model:"V1", price: 200},
//     {productName: "Logitech Keyboard ", model:"Q1", price: 1200}
// ];

// const feedback1 = products.map(product => product.productName);
// const feedback2 = products.filter(product => product.price > 20000);
// // burada önce filtreledik ve ardnıdan gelen array üzerinden listeledik
// const feedback3 = products.filter(product => product.price > 20000).map(product => product.productName);
// // find() metodu bulduğu ilk değere göre bilgi getirir
// // findIndex() metodu indexiyle ilgili işlemlerde kullanılır
// const feedback4 = products.find(product => product.price>10000);

// //console.log(feedback1);
// //console.log(feedback2);
// //console.log(feedback3);

// // ---------- MAPS -----------
// const provinces = new Map(); // object

// // set ile ekleme
// provinces.set(1,"Adana");
// provinces.set(2,"Adıyaman");
// provinces.set(31,"Hatay");
// provinces.set(28,"Giresun");
// provinces.set(25,"Erzurum");
// provinces.set(15,"Burdur");
// provinces.set(34,"İstanbul");

// let result = provinces.get(31); // verileri getirir
// result = provinces.size; // uzunluk döndürür
// result = provinces.has(34); // listede veri var mı?
// result = provinces.delete(1); // belirtileni listeeden siler
// // clear ile tüm elemanları siler
// console.log(result);
// console.log(provinces);


// // satır satır bilgi gelir
// for(let province of provinces.entries()){
//     console.log(province);
// }

// // keylere ulaşmak istiyorum
// for(let province of provinces.keys()){
//     console.log(province);
// }
// // valuelere ulaşmak istiyorum
// for(let province of provinces.values()){
//     console.log(province);
// }



