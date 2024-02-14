
const directory = document.querySelector('.directGrid');

const url = "https://divineprojects.github.io/wdd230/chamber/data/members.json";

async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayMembers(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};

// call directory list view
const displayMembers = (members) => {
    members.forEach((member) => {
        let cimg = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let industry = document.createElement('p');
        let mlevel = document.createElement('p');
        let url = document.createElement('p');
        let card = document.createElement('section');

        name.textContent = member.name;
        address.textContent = member.addresses;
        phone.textContent = member.phone;
        industry.textContent = member.industry;
        mlevel.textContent = member.mlevel;
        url.innerHTML = `<a href="${member.URLs}" target="_blank">${member.URLs}</a>`;

        cimg.setAttribute('src', member.imageurl);
        cimg.setAttribute('loading', 'lazy');
        cimg.setAttribute('alt', `cimg of ${member.name} `);

        card.appendChild(cimg);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(industry);
        card.appendChild(mlevel);

        directory.appendChild(card);
        //
    });
};

apiFetch();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

gridbutton.addEventListener("click", () => {
    display.classList.add("directGrid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("directGrid");
}


