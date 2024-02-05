const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
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
        pwderror.style.display = 'none';
    }
});

