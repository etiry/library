let myLibrary = [];

addBookToLibrary('Happy Place', 'Emily Henry', 385, false);
addBookToLibrary('The House of Eve', 'Sadeqa Johnson', 369, false);
addBookToLibrary('Einstein\'s Dreams', 'Alan Lightman', 144, true);
addBookToLibrary('The Likeness', 'Tana French', 466, true);
displayBooks();

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
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

function displayBooks() {
  const bookContainer = document.querySelector('.book-container')
  bookContainer.textContent = '';

  for (book of myLibrary) {
    const newBook = document.createElement('div');
    newBook.classList.add('card');

    const title = document.createElement('p');
    title.textContent = book.title;
    newBook.appendChild(title);

    const author = document.createElement('p');
    author.textContent = book.author;
    newBook.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    newBook.appendChild(pages);

    const read = document.createElement('p');
    book.read ? read.textContent = 'Read' : read.textContent = 'Not read';
    newBook.appendChild(read);

    bookContainer.appendChild(newBook);
  }
}

const openButton = document.querySelector('.open-button');
openButton.addEventListener('click', openAddBookForm);

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submitAddBookForm);

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', closeAddBookForm);
