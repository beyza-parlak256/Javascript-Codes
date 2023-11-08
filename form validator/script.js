// form, username, email, password, re-password bilgilerini alıyorum.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

// girdi ve bir mesaj alacak. değer girilmediğinde kırmızı rengi olacaktır(is-invalid)
function error(input,message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

// girdi başarılı ise tik işareti ile doğru olduğunu bize anlatacaktır
function success(input){
    input.className = 'form-control is-valid';
}

// bu fonksiyon email formatı için yazılmıştır ve hazır alınmıştır.kontrol eder ve küçük harfe çevirir
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Bir event oluşturuyorum. Submit butonuna tıklayınca bir olay gerçekleşecektir, bunun kodlarını yazalım.
form.addEventListener('submit', function(e){
    // formun varsayılan özelliğini kapatıp, submit etmemiş oluyoruz.
    e.preventDefault(); 

    // Eğer username değeri boş ise error fonk çağır, değilse succes fonk çağır.
    if(username.value === ''){
        error(username,'Enter a valid username!');
    }else{
        success(username);
    }

    if(email.value === ''){
        error(email,'Enter a valid email!');
    }else if(!validateEmail(email.value)){
        error(email,'Enter email in the correct format!');
    }else{
        success(email);
    }
    
    if(password.value === ''){
        error(password,'Enter a valid password!');
    }else{
        success(password);
    }
    
    if(repassword.value === ''){
        error(repassword,'Enter a valid password!');
    }else{
        success(repassword);
    }

});