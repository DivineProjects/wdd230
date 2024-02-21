

const pwd = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');
const pwderror = document.querySelector('.pwderror');
var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
pwd2.addEventListener('focusout', () => {
    if (pwd.value !== pwd2.value) {
        pwderror.style.display = 'block';
        pwderror.textContent = "❗ Passwords do not match!";
        pwd.value = "";
        pwd2.value = "";
        pwd.focus();
    } else if (pwd.value.length < 8 && pwd2.value.length < 8) {

        pwderror.style.display = 'block';
        pwderror.textContent = "❗ Password need at least 8 characters";
        pwd.value = "";
        pwd2.value = "";
        pwd.focus();

    } else {
        pwderror.value = 'Passwords Match!!';
        pwderror.style.backgroundColor = 'lightgreen';

        // After 1 second, revert the background color and hide the message
        setTimeout(() => {
            pwderror.style.display = 'none';
        }, 1500);

    }


});


