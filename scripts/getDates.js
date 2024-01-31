let oLastModif = new Date(document.lastModified);
let todayDate = new Date();
document.querySelector('#currentYear').textContent = todayDate.getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${oLastModif}`;



