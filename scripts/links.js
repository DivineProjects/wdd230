
const baseURL = "https://divineprojects.github.io/wdd230/";
const linksURL = "https://divineprojects.github.io/wdd230/data/links.js"
const card = document.querySelector('#card1');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks);
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





























