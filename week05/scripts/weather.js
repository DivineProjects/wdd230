
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = '//api.openweathermap.org/data/2.5/onecall?lat={49.750265627063186}&lon={6.6315950909878545lon}&appid={57b35b35ea4398840f483c29f14b8533}';

async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', data.weather[0].main);
    captionDesc.textContent = `${desc}`;
}

apiFetch();

