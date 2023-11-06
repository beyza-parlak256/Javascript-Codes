/*
let sonuc;
let a = 20, b = 40, c = 32;

// ----- ARİTMETİK OPERATÖRLER -----
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a; 


// ----- ATAMA OPERATÖRLERİ -----
sonuc = a;
sonuc += b;

// ----- KARŞILAŞTIRMA OPERATÖRLERİ -----
sonuc = (a == b); // a, b ye eşit mi
sonuc = (a != b); // a, b ye eşit değil mi
sonuc = (3 === 3); // 3 tane = işareti önce değer sonra tip kontrolü yapar 
sonuc = (a >= b);

console.log(sonuc);

// ------ MANTIKSAL OPERATÖRLER -------

let isLoggedIn = true;

if(isLoggedIn){ // doğru ise demek
    console.log("Uygulamaya giriş yapıldı..");
}
else{ // false ise oluyor çünkü ilki true idi
    console.log("Uygulamaya giriş yapıldı..");
}
*/


// Kullanıcı Girişi Uygulaması
let userName = "BeyzaParlak";
let password = "1234";

if(userName == "BeyzaParlak"){
    if(password == "12345"){
        console.log("Kullanıcı girişi başarılı.");
    }
    else{
        console.log("Kullanıcı girişi başarısız.");
    }
}

