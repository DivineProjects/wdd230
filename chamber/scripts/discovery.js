// select HTML elements in the document
const weather = document.querySelector('.weather');
// const url = `//api.openweathermap.org/data/2.5/onecall?lat={49.750265627063186}&lon={6.6315950909878545}&appid={57b35b35ea4398840f483c29f14b8533}';

key = '57b35b35ea4398840f483c29f14b8533';
lattitude = '-20.1525730567213';
longitude = '28.58308545902036';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid=${key}&units=metric`;


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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // console.log(data.weather[0].description);
    // weather.innerHTML = `<img src="${iconsrc}" alt="${data.weather[0].description}">  <span id="weather-disc">${data.weather[0].description}</span> <span id="imgWeather">${data.main.temp}&deg;C </span> <br>`;
    weather.innerHTML = `
    <span class="setSpan">
                    <div class="mainFocust">
                        <p class="headerFocust">today</p>
                        <div class="iconTempPart">
                            <div class="iconTemp">
                                <img class="iconTempImg" src="${iconsrc}" alt="${data.weather[0].description}"></img>
                            </div>
                            <div class="temp">
                                <div class="infoPart topInfo">
                                    <div class="temper"> ${Math.round(data.main.temp)}&deg;C</div>
                                </div>
                            </div>
                            <div class="temp">
                                <div class="infoPart topInfo">
                                    <div class="discWeather">${data.weather[0].description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
    `;
}

apiFetch();






























