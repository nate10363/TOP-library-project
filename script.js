const myLibrary = [];

// UI

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const numpagesInput = document.querySelector('#numpages');
const readInput = document.querySelector('#read');

const libraryContainer = document.querySelector('#libraryContainer');
const addBtn = document.querySelector('#add-btn');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// dialog functions
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});


function Book(title, identifier, author, numpages, read) {
    this.title = title;
    this.identifier = identifier
    this.author = author;
    this.numpages = numpages;
    this.read = read;
}

function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    numpagesInput.value = '';
    readInput.checked = '';

}


function addBookToLibrary() {

    if (titleInput.value === '' ||
        authorInput.value === '' ||
        numpagesInput.value === '') {
            alert('Please enter valid inputs');
            showModal();
            return;
    }

    myLibrary.push(new Book(
        titleInput.value, 
        `grid${titleInput.value}`,
        authorInput.value, 
        numpagesInput.value, 
        readInput.checked,
    ));

    addBookToTable(titleInput.value, 
        authorInput.value, 
        numpagesInput.value);

    clearInputs();

}

function deleteBook(parent, id) {

    parent.remove();

    for (let i = 0; i < myLibrary.length; i++) {


        if (myLibrary[i].identifier === id) {
            myLibrary.splice(i, 1, );
        }

        
    }

}

function addBookToTable(title, author, numpages) {   
    
    libraryContainer.innerHTML += `
        <div class="gridItem" id="grid${title}">
            <p class="titleText">${title}</p>
            <p class="authorText">by ${author}</p>
            <p>${numpages} pages</p>
            <label class="checkbox ${readInput.checked ? "checkboxPara" : ''}" id="${title}" onclick="toggleReadStatus(this)">Read</label>
            <button class="delete-btn" onclick="deleteBook(this.parentNode, this.parentNode.getAttribute('id'))">Delete</button>
        </div>
    `

}

const toggleReadStatus = (id) => {

    id.classList.toggle('checkboxPara'); 

    for (let i = 0; i < myLibrary.length; i++) {

        if (myLibrary[i].title == id.getAttribute('id')) {
            myLibrary[i].read = !myLibrary[i].read;
        }
    }

}




addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    dialog.close();
});

// const logLibrary = document.getElementById('console');
// logLibrary.addEventListener('click', () => {
//     console.log(myLibrary)
// });