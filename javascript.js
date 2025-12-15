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

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayLibrary() {
    // Clear the content of the .library div
    const library = document.querySelector(".library");
    while (library.firstChild) {
        library.removeChild(library.firstChild)
    }
    
    for (let i = 0; i < myLibrary.length; i++) {
        // Create a new book div and add id to it
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

        // Create new elements about read and remove button
        let readDiv = document.createElement("div");
        readDiv.classList.add("read");
        let introRead = document.createElement("p");
        let read = document.createElement("p");
        let removeButton = document.createElement("button");
        removeButton.dataset.id = myLibrary[i].id;

        // Add content to titleDiv and append it to bookDiv
        introTitle.textContent = "Title";
        titleDiv.appendChild(introTitle);
        title.textContent = myLibrary[i].title;
        titleDiv.appendChild(title);
        bookDiv.appendChild(titleDiv);
        
        // Add content to authorDiv and append it to bookDiv
        introAuthor.textContent = "Author";
        authorDiv.appendChild(introAuthor);
        author.textContent = myLibrary[i].author;
        authorDiv.appendChild(author);
        bookDiv.appendChild(authorDiv);

        // Add content to pagesDiv and append it to bookDiv   
        introPages.textContent = "Pages";
        pagesDiv.appendChild(introPages);
        pages.textContent = myLibrary[i].pages;
        pagesDiv.appendChild(pages);
        bookDiv.appendChild(pagesDiv);

        // Add content and removeButton to readDiv and append it to bookDiv
        introRead.textContent = "Read";
        readDiv.appendChild(introRead);
        if (myLibrary[i].read == "true") {
            read.textContent = "yes";
        }
        else {
            read.textContent = "no";
        }
        readDiv.appendChild(read);
        removeButton.textContent = "remove";
        readDiv.appendChild(removeButton);
        bookDiv.appendChild(readDiv);

        // Add bookDiv to library
        library.appendChild(bookDiv);

        // Create addEventListener to remove book
        removeButton.addEventListener("click", ()=> {
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].id == removeButton.dataset.id) {
                myLibrary.splice(i, 1);
                break;
            }
        }
        displayLibrary();
        })

    }
}

addBookToLibrary("Mon frère", "Daniel Pennac", "140");
// addBookToLibrary("Christine", "Stephen King", "410");
// addBookToLibrary("Les cafards", "Jo Nesbo", "500");
const library = document.querySelector(".library");
displayLibrary();
const newBook = document.querySelector("button");
const form = document.querySelector("form");

// New book button clicked
newBook.addEventListener("click", ()=> {
    form.style.display = "flex";
})

// Submit form
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector("input[name='book-read']:checked").value;
    addBookToLibrary(title, author, pages, read);
    displayLibrary();
    form.style.display = "none";
    // Clear the form after adding book
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("not-read").checked = "false";
})
