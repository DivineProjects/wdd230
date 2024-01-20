
const favChapterInput = document.querySelector('#favchap');
const addChapterButton = document.querySelector('button');
const listOfChapter = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
deleteButton.setAttribute('class', 'deleteButton');
deleteButton.textContent = '❌';


addChapterButton.addEventListener('click', () => {
    if (favChapterInput.value != "") {
        li.textContent = favChapterInput.value;
        listOfChapter.append(li);
        li.append(deleteButton);
        favChapterInput.focus();
        favChapterInput.value = ""
    } else {
        favChapterInput.focus();
    }

});

deleteButton.addEventListener('click', () => {
    listOfChapter.removeChild(li);
    favChapterInput.focus();
})