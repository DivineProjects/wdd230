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


const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&exclude=hourly,daily&appid=${key}&units=metric`;
// https://api.openweathermap.org/data/2.5/forecast?lat=-20.1525730567213&lon=28.58308545902036&appid=57b35b35ea4398840f483c29f14b8533&units=metric


//WEATHER FORECAST API
const forecastId = document.querySelector('.cardContainer');
// const url = `//api.openweathermap.org/data/2.5/onecall?lat={49.750265627063186}&lon={6.6315950909878545}&appid={57b35b35ea4398840f483c29f14b8533}';

const furl = "https://api.openweathermap.org/data/2.5/forecast?lat=-20.1525730567213&lon=28.58308545902036&appid=57b35b35ea4398840f483c29f14b8533&units=metric";
// const furl = 'data/forecast.json'

async function apiFetch1() {

    try {
        const response = await fetch(furl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayFocust(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};

function displayFocust(data) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // const day = new Date(data.list[0].dt).getDay();
    a = 8;
    i = 0;

    data.list.forEach(forecast => {
        // const day = new Date(forecast.dt).getDay();
        // days[day];
        // console.log(forecast);
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

        let li = document.createElement("li");
        if (a % 8 === 0 && i < 3) {
            const day = new Date(forecast.dt_txt).getDay();
            i += 1;
            // days[day];
            // console.log(new Date(forecast.dt_txt));
            // console.log(days[day]);
            // li.innerHTML = `< span class="setSpan" > <span class="time">${days[day]}</span> <span class="icon"><img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}"> </span> <span class="temperature">${forecast.main.temp}°C</span> -
            // <span class="description">${forecast.weather[0].description}</span> </ > `;
            // li.setAttribute('class', 'dayCard')
            li.innerHTML = `
                <span class="setSpan">
                    <div class="mainFocust">
                        <p class="headerFocust">${days[day]}</p>
                        <div class="iconTempPart">
                            <div class="iconTemp">
                                <img class="iconTempImg" src="${iconsrc}" alt="${forecast.weather[0].description}"></img>
                            </div>
                            <div class="temp">
                                <div class="infoPart topInfo">
                                    <div class="temper"> ${Math.round(forecast.main.temp_max)}</div>
                                </div>
                                <div class="infoPart topInfo">
                                    <div class="temper">${Math.round(forecast.main.temp_min)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            `;

            forecastId.appendChild(li);
        }

        a += 1;

    });
    // console.log(days[day]);
    // console.log(data.list[0].dt_txt);
    // console.log(data.list[0].main.temp);
    // console.log(data.list[0].weather[0].description);
    // console.log(`https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`);
    // const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // weather.innerHTML = `<img src="${iconsrc}" alt="${data.weather[0].description}">  <span id="weather-disc">${data.weather[0].description}</span> <span id="imgWeather">${data.main.temp}&deg;C </span> <br>`;
}

apiFetch1();


// Example JSON data containing chamber member information

const membersURL = "https://divineprojects.github.io/wdd230/chamber/data/members.json";
// const membersURL = "data/members.json";
const cardAdvert = document.querySelector('.advertisements');

async function getAdvert() {
    const response = await fetch(membersURL);
    const members = await response.json();
    // Filter members with silver or gold membership levels
    // console.log(members);
    const spotlightMembers = members.filter(member => member.mlevel === 'silver' || member.mlevel === 'gold');
    // console.log(spotlightMembers);

    displayAdvert(spotlightMembers);

}



// Display spotlight advertisements
function displayAdvert(adverts) {

    // Generate a random array
    const randomAdvertList = shuffleArray(adverts);
    if (adverts.length > 2) {
        i = 0;
        while (i < 2) { // limit adverts to 2
            const advert = randomAdvertList[i];
            const advertisementElement = document.createElement('div');

            advertisementElement.innerHTML = `
            <div class="advertContainer">
                <h3>${advert.name}</h3>
                <p class= "membership-${advert.mlevel}">Membership Level: ${advert.mlevel}</p>
                <p>Location: ${advert.addresses}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et, voluptate hic ullam quidem 
            atque explicabo voluptatem ab laudantium? Aliquam.</p> </div>`;
            cardAdvert.appendChild(advertisementElement);
            i += 1;
        }

    } else {
        adverts.forEach(advert => {
            const advertisementElement = document.createElement('div');
            advertisementElement.innerHTML = `
            <div class="advertContainer">
            <h3>${advert.name}</h3>
            <p class= "membership-${advert.mlevel}">Membership Level: ${advert.mlevel}</p>
            <p>Location: ${advert.addresses}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et, voluptate hic ullam quidem 
            atque explicabo voluptatem ab laudantium? Aliquam.</p> </div>
        `;
            cardAdvert.appendChild(advertisementElement);
        });
    }
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// reset the advert every 20 seconds
getAdvert();


function checkAndDisplayBanner() {
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        document.querySelector('#banner').style.display = 'block';
    }
}

const closeBanner = document.querySelector('#banner');
closeBanner.addEventListener('click', () => {
    closeBanner.style.display = 'none';
});

// Check and display the banner when the page loads
window.onload = checkAndDisplayBanner;



























