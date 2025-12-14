const myLibrary = [];

function Book(title, author, pages, read = false) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.")
        }
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    myLibrary.push(book);
}

function displayLibrary(libraryArray) {
    for (let i = 0; i < libraryArray.length; i++) {
        let bookDisplay = document.createElement("div");
        let title = document.createElement("p");
        title.textContent = "Title: " + libraryArray[i].title;
        bookDisplay.appendChild(title);
        let author = document.createElement("p");
        author.textContent = "Author: " + libraryArray[i].author;
        bookDisplay.appendChild(author);
        let pages = document.createElement("p");
        pages.textContent = "Pages: " + libraryArray[i].pages;
        bookDisplay.appendChild(pages);
        library.appendChild(bookDisplay);
    }
}

addBookToLibrary("Mon frère", "Daniel Pennac", "140");
addBookToLibrary("Christine", "Stephen King", "410");
addBookToLibrary("Les cafards", "Jo Nesbo", "500");
console.log(myLibrary);
const library = document.querySelector(".library");
displayLibrary(myLibrary);