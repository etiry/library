let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
   	this.title = title;
	  this.author = author;
	  this.pages = pages;
	  this.read = read; 
  }
}

addBookToLibrary('Happy Place', 'Emily Henry', 385, false);
addBookToLibrary('The House of Eve', 'Sadeqa Johnson', 369, false);
addBookToLibrary('Einstein\'s Dreams', 'Alan Lightman', 144, true);
addBookToLibrary('The Likeness', 'Tana French', 466, true);
displayBooks();

function addBookToLibrary(title, author, pages, read) {
	newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function deleteBookFromLibrary(e) {
  bookToDelete = e.target.parentElement.parentElement;
  bookToDeleteIndex = bookToDelete.dataset.index;
  deletedBookIndex = myLibrary.splice(bookToDeleteIndex, 1);
  displayBooks();
}

function openAddBookForm() {
  document.querySelector('.add-book-form').style.display = 'block';
}

function closeAddBookForm() {
  document.querySelector('.add-book-form').style.display = 'none';
}

function submitAddBookForm(e) {
  e.preventDefault();

  title = document.querySelector('input[id=title]');
  author = document.querySelector('input[id=author]');
  pages = document.querySelector('input[id=pages]');
  read = document.querySelector('input[id=read]');

  addBookToLibrary(title.value, author.value, pages.value, read.checked);

  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;

  displayBooks();

  closeAddBookForm();
}

function toggleRead(e) {
  bookToToggle = e.target.parentElement;
  bookToToggleIndex = bookToToggle.dataset.index;
  if (myLibrary[bookToToggleIndex].read === true) {
    myLibrary[bookToToggleIndex].read = false;
  } else {
    myLibrary[bookToToggleIndex].read = true;
  }
  displayBooks();  
}

function addDeleteOnClick() {
  closeCardButtons = document.querySelectorAll('.close-button-card');
  for (let i = 0; i < closeCardButtons.length; i++) {
    closeCardButtons[i].addEventListener('click', deleteBookFromLibrary);
  }
}

function addToggleReadOnClick() {
  readButtons = document.querySelectorAll('.read-button');
  for (let i = 0; i < readButtons.length; i++) {
    readButtons[i].addEventListener('click', toggleRead);  
  }
}

function displayBooks() {
  const bookContainer = document.querySelector('.book-container')
  bookContainer.textContent = '';

  for (book of myLibrary) {
    const newBook = document.createElement('div');
    newBook.classList.add('card');
    newBook.setAttribute('data-index', myLibrary.indexOf(book));

    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.classList.add('close-button-card');
    newBook.appendChild(closeButtonContainer);
    const closeButton = document.createElement('img');
    closeButton.src = 'assets/close.svg';
    closeButtonContainer.appendChild(closeButton);

    const title = document.createElement('p');
    title.classList.add('card-item-top');
    title.textContent = book.title;
    newBook.appendChild(title);

    const author = document.createElement('p');
    author.classList.add('card-item');
    author.textContent = `by ${book.author}`;
    newBook.appendChild(author);

    const pages = document.createElement('p');
    pages.classList.add('card-item');
    pages.textContent = `${book.pages} pages`;
    newBook.appendChild(pages);

    const read = document.createElement('button');
    read.classList.add('read-button');
    book.read ? read.textContent = 'Read' : read.textContent = 'Not read';
    newBook.appendChild(read);

    bookContainer.appendChild(newBook);

    addDeleteOnClick();
    addToggleReadOnClick();
  }
}

const openButton = document.querySelector('.open-button');
openButton.addEventListener('click', openAddBookForm);

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submitAddBookForm);

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', closeAddBookForm);
