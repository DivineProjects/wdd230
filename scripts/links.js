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
    weather.innerHTML = `<img src="${iconsrc}" alt="${data.weather[0].description}">  <span id="weather-disc">${data.weather[0].description}</span> <span id="imgWeather">${data.main.temp}&deg;C </span> <br>`;
}

apiFetch();









// Dynamic Activity Links

const baseURL = "https://divineprojects.github.io/wdd230/";
const linksURL = "https://divineprojects.github.io/wdd230/data/links.json"
const card = document.querySelector('#card1');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.weeks);
    displayLinks(data.weeks);

}

function displayLinks(weeks) {

    weeks.forEach(week => {
        let ul = document.createElement("ul");
        let li = document.createElement("li");
        let i = 1;
        let ancher = "";
        // loop & convert lists into anchers
        week.links.forEach(link => {
            if (i === 1) {
                ancher = ancher + `${week.week}: <a href="${link.url}" target="_blank">${link.title}</a>`;
            } else {
                ancher = ancher + ` | <a href="${link.url}" target="_blank">${link.title}</a>`
            }

            i += 1;
        });

        li.innerHTML = ancher;
        ul.appendChild(li);
        card.appendChild(ul);

    });
}

getLinks();





























