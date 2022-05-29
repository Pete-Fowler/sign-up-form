const password = document.getElementById("password");
const pw2 = document.getElementById("confirm");
let message = document.getElementById('message');
const phone = document.getElementById('phone');
let phonemsg = document.getElementById('phone-msg');

function validate() {
    if (pw2.value === password.value) {
        password.classList.remove('nomatch');
        pw2.classList.remove('nomatch');
        message.textContent = '';
    } else {
        password.classList.add('nomatch');
        pw2.classList.add('nomatch');
        message.textContent = '*Passwords must match';
    }
}

function phoneValidate() {
    if (phone.checkValidity() == false) {
        phonemsg.textContent = '*Format is xxx-xxx-xxxx';
    } else {
        phonemsg.textContent = '';
    }
    
}

pw2.oninput = validate;
phone.oninput = phoneValidate;
