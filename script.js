let myLibrary = [];

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

addBookToLibrary('Happy Place', 'Emily Henry', 385, false);
addBookToLibrary('The House of Eve', 'Sadeqa Johnson', 369, false);
addBookToLibrary('Einstein\'s Dreams', 'Alan Lightman', 144, true);

const container = document.querySelector('.container')

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

  container.appendChild(newBook);
}