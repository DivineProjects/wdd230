const displayNumOfVisits = document.querySelector(".visits");
//Get the stored VALUE in localStorage if it exists. 
let numOfVisits = Number(window.localStorage.getItem("numOfVisits-ls")) || 0;

if (numOfVisits !== 0) {
    displayNumOfVisits.textContent = numOfVisits;
} else {
    displayNumOfVisits.textContent = "🥳 Welcome! Let us know if you have any questions.";
}

numOfVisits++;
localStorage.setItem("numOfVisits-ls", numOfVisits);


// dates calculations
const daysSinceLastVisit = document.querySelector(".hello");
let currentDate = Number(new Date());
let lastVisitDate = Number(window.localStorage.getItem("lastVisitDate-ls")) || Number(new Date());
let days = Math.round((currentDate - lastVisitDate) / (1000 * 3600 * 24));

if (days < 1) {
    daysSinceLastVisit.textContent = "Back so soon! Awesome! ";

} else if (days == 1) {
    daysSinceLastVisit.textContent = `You last visited ${days} day ago.`;
}
else {
    daysSinceLastVisit.textContent = `You last visited ${days} days ago.`;
}

localStorage.setItem("lastVisitDate-ls", Number(new Date()));






