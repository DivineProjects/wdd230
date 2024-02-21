const value = document.querySelector("#value");
const input = document.querySelector("#rating");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
});

const pwd = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');
const pwderror = document.querySelector('.pwderror');


pwd2.addEventListener('input', () => {
    if (pwd.value !== pwd2.value) {
        pwderror.style.display = 'block';
    } else {
        pwderror.style.backgroundColor = 'lightgreen';
        pwderror.value = 'Passwords Match!!';
        // After 1 second, revert the background color and hide the message
        setTimeout(() => {pwderror.style.display = 'none';
        }, 1000);

        
    }
});

