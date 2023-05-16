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
