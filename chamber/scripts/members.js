
const directory = document.querySelector('.directory');

const url = "data/members.json";


async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayMembersLV(data)
            // displayMembersWider(data);
            // displayMembers(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};


const displayMembers = (members) => {
    // card build code goes here
    members.forEach((member) => {
        let portrait = document.createElement('img');
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
        industry.textContent = `Industry: ${member.industry}`;
        mlevel.textContent = `Membership Level: ${member.mlevel}`;
        url.innerHTML = `<a href="${member.URLs}" target="_blank">${member.URLs}</a>`;

        card.setAttribute('class','directCard');

        console.log(member.name);
        /*  portrait.setAttribute('src', member.imageurl);
         portrait.setAttribute('loading', 'lazy');
         portrait.setAttribute('alt', `Portrait of ${member.name} `);
         portrait.setAttribute('width', '340');
         portrait.setAttribute('height', '440'); */

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(industry);
        card.appendChild(mlevel);

        directory.appendChild(card);
        // card.appendChild(portrait);

        //cards.appendChild(card);
    });
};



const displayMembersWider = (members) => {
    // card build code goes here
    members.forEach((member) => {
        let portrait = document.createElement('img');
        let name = document.createElement('span');
        let address = document.createElement('span');
        let phone = document.createElement('span');
        let industry = document.createElement('span');
        let mlevel = document.createElement('span');
        let url = document.createElement('span');
        let card = document.createElement('section');

        name.textContent = member.name;
        address.textContent = member.addresses;
        phone.textContent = member.phone;
        industry.textContent = `Industry: ${member.industry}`;
        mlevel.textContent = `Membership Level: ${member.mlevel}`;
        url.innerHTML = `<a href="${member.URLs}" target="_blank">${member.URLs}</a>`;

        card.setAttribute('class','directCard');

        console.log(member.name);
        /*  portrait.setAttribute('src', member.imageurl);
         portrait.setAttribute('loading', 'lazy');
         portrait.setAttribute('alt', `Portrait of ${member.name} `);
         portrait.setAttribute('width', '340');
         portrait.setAttribute('height', '440'); */

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(industry);
        card.appendChild(mlevel);

        directory.appendChild(card);
        // card.appendChild(portrait);

        //cards.appendChild(card);
    });
};


// call directory list view
const displayMembersLV = (members) => {
    // card build code goes here
    members.forEach((member) => {
        let portrait = document.createElement('img');
        let name = document.createElement('span');
        let address = document.createElement('span');
        let phone = document.createElement('span');
        let industry = document.createElement('span');
        let mlevel = document.createElement('span');
        let url = document.createElement('span');
        let card = document.createElement('section');

        name.textContent = member.name;
        address.textContent = member.addresses;
        phone.textContent = member.phone;
        industry.textContent = `Industry: ${member.industry}`;
        mlevel.textContent = `Membership Level: ${member.mlevel}`;
        url.innerHTML = `<a href="${member.URLs}" target="_blank">${member.URLs}</a>`;

        card.setAttribute('class','directCardLV');

        console.log(member.name);
        /*  portrait.setAttribute('src', member.imageurl);
         portrait.setAttribute('loading', 'lazy');
         portrait.setAttribute('alt', `Portrait of ${member.name} `);
         portrait.setAttribute('width', '340');
         portrait.setAttribute('height', '440'); */

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(industry);
        card.appendChild(mlevel);

        directory.appendChild(card);
        // card.appendChild(portrait);

        //cards.appendChild(card);
    });
};

apiFetch() 