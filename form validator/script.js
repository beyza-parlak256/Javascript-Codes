// form, username, email, password, re-password bilgilerini alıyorum.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

// girdi ve bir mesaj alacak. değer girilmediğinde kırmızı rengi olacaktır(is-invalid)
function error(input, message) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
// girdi başarılı ise tik işareti ile doğru olduğunu bize anlatacaktır
function success(input) {
    input.className = 'form-control is-valid';
}

// bu fonksiyon email formatı için yazılmıştır ve hazır alınmıştır.kontrol eder ve küçük harfe çevirir
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, 'incorrect email address');
    }
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === '') {
            error(input, `${input.id} is required.`);
        }else{
            success(input);
        }
    });  
}

function checkWordLenght(input,min,max){
    if(input.value.lenght < min){
        error(input,`${input.id} Must have a minimum of  ${min} characters`);
    }else if(input.value.lenght > max){
        error(input,`${input.id} Must have a maximum of  ${max} characters`);
    }else{
        success(input);
    }
}

// girilen iki parola aynı mı kontrol edi-elim
function checkPasswords(input1,input2){
    if(input1.value !== input2.value){
        error(input2,'Passwords are not the same!');
    }
}

// phone için bazı validationlar vardır, onlar için yazılmış bir koddur
// 10 karakterli olmalıdır vs.
function checkPhoneNumber(input){
    var phone = /^\d{10}$/;
    if(!phone.test(input.value)){
        error(input,` Enter your 10 character phone number`);
    }
}

// Bir event oluşturuyorum. Submit butonuna tıklayınca bir olay gerçekleşecektir, bunun kodlarını yazalım.
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email);
    checkLength(username,7,15);
    checkLength(password,5,12);
    checkPasswords(password,repassword);
    checkPhoneNumber(phone);
});