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
        // Create a new book div
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        // Create new elements about title
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        let introTitle = document.createElement("p");
        let title = document.createElement("p");
        
        // Create new elements about author
        let authorDiv = document.createElement("div");
        authorDiv.classList.add("author");  
        let introAuthor = document.createElement("p");
        let author = document.createElement("p");

        // Create new elements about pages
        let pagesDiv = document.createElement("div");
        pagesDiv.classList.add("pages");
        let introPages = document.createElement("p");
        let pages = document.createElement("p");

        // Create new elements about read
        let readDiv = document.createElement("div");
        readDiv.classList.add("read");
        let introRead = document.createElement("p");
        let read = document.createElement("p");

        // Add content to titleDiv and append it to bookDiv
        introTitle.textContent = "Title";
        titleDiv.appendChild(introTitle);
        title.textContent = libraryArray[i].title;
        titleDiv.appendChild(title);
        bookDiv.appendChild(titleDiv);
        
        // Add content to authorDiv and append it to bookDiv
        introAuthor.textContent = "Author";
        authorDiv.appendChild(introAuthor);
        author.textContent = libraryArray[i].author;
        authorDiv.appendChild(author);
        bookDiv.appendChild(authorDiv);

        // Add content to pagesDiv and append it to bookDiv   
        introPages.textContent = "Pages";
        pagesDiv.appendChild(introPages);
        pages.textContent = libraryArray[i].pages;
        pagesDiv.appendChild(pages);
        bookDiv.appendChild(pagesDiv);

        // Add content to readDiv and append it to bookDiv
        introRead.textContent = "Read";
        readDiv.appendChild(introRead);
        if (libraryArray[i].read) {
            read.textContent = "Yes";
        }
        else {
            read.textContent = "No";
        }
        readDiv.appendChild(read);
        bookDiv.appendChild(readDiv);

        // Add bookDiv to library
        library.appendChild(bookDiv);
    }
}


addBookToLibrary("Mon frère", "Daniel Pennac", "140");
addBookToLibrary("Christine", "Stephen King", "410");
addBookToLibrary("Les cafards", "Jo Nesbo", "500");
console.log(myLibrary);
const library = document.querySelector(".library");
displayLibrary(myLibrary);