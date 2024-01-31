const displayNumOfVisits = document.querySelector(".visits");
//Get the stored VALUE in localStorage if it exists. 
let numOfVisits = Number(window.localStorage.getItem("numOfVisits-ls")) || 0;

if (numOfVisits !== 0) {
    displayNumOfVisits.textContent = numOfVisits;
} else {
    displayNumOfVisits.textContent = `🥳 Welcome!!! This is your first visit.`;
}

numOfVisits++;
localStorage.setItem("numOfVisits-ls", numOfVisits);

