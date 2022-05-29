const password = document.getElementById("password");
const pw2 = document.getElementById("confirm");
let message = document.getElementById('message');

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

pw2.oninput = validate;