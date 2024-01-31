


const modeButton = document.querySelector('#mode');
const main = document.querySelector('main');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.classList.toggle('main-dark');
        modeButton.textContent = "🔆";
    } else {
        modeButton.textContent = "🕶️";
        main.classList.toggle('main-dark');
    }


});