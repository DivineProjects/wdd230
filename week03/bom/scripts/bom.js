
const favChapterInput = document.querySelector('#favchap'); // const input = document.querySelector('#favchap');
const addChapterButton = document.querySelector('button'); // const button = document.querySelector('button');
const listOfChapter = document.querySelector('#list'); // const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

addChapterButton.addEventListener('click', () => {
    if (favChapterInput.value != "") {
        displayList(favChapterInput.value); // call displayList with the favChapterInput.value argument
        chaptersArray.push(favChapterInput.value); // push the favChapterInput into the chaptersArray
        setChapterList; // update the localStorage with the chaptersArray by calling a function named setChapterList,
        favChapterInput.value = "";
        favChapterInput.focus();
    } else {
        favChapterInput.focus();
    }
});

// create BOM chapter list

// 
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;
    listOfChapter.append(li);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = '❌';
    li.append(deleteButton);

    deleteButton.addEventListener('click', () => {
        listOfChapter.removeChild(li);
        deleteChapter(li.textContent); // function removes the chapter from the array and localStorage.
        favChapterInput.focus();
    })
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};








