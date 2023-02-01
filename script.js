let myLibrary = [];

function Book(name, author, pageCount = 0,  read = false){
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

Book.prototype.addBookToLibrary = function(){
    myLibrary.push(this);
}



initSomeBooks();
showAllBooks();

function initSomeBooks() {
    let hobbit = new Book('The Hobbit', 'J.R.R. Tolkien',19, false);
    let lordRing = new Book('The Lord of the Rings', 'J.R.R. Tolkien');
    let blackCompany = new Book('The Black Compagny', 'Glen Cook', 319, true)

    hobbit.addBookToLibrary();
    lordRing.addBookToLibrary();
    blackCompany.addBookToLibrary();
}
function showAllBooks() {
    mainDiv = document.querySelector("#main")
    mainDiv.replaceChildren();
    myLibrary.forEach(book => {
        mainDiv.appendChild(getBook(book));
    });
}
function getBook(book){
    let card = document.createElement("div");
    card.classList.add("card");

    let bookNameInfo = document.createElement("div");
    bookNameInfo.classList.add("info");
    let bookNameTitle = document.createElement("p");
    bookNameTitle.classList.add("title");
    let bookNameValue = document.createElement("p");
    bookNameValue.classList.add("value");
    bookNameTitle.textContent = `Book :`;
    bookNameValue.textContent = `${book.name}`;
    bookNameInfo.appendChild(bookNameTitle);
    bookNameInfo.appendChild(bookNameValue);
 
    let authorInfo = document.createElement("div");
    authorInfo.classList.add("info");
    let authorTitle = document.createElement("p");
    authorTitle.classList.add("title");
    let authorValue = document.createElement("p");
    authorValue.classList.add("value");
    authorTitle.textContent = `Author :`;
    authorValue.textContent = `${book.author}`;
    authorInfo.appendChild(authorTitle);
    authorInfo.appendChild(authorValue);

    let otherInfo = document.createElement("div");
    otherInfo.classList.add("info");
    let otherTitle = document.createElement("p");
    otherTitle.classList.add("title");
    otherTitle.textContent = `Infos :`;
    let pageCountValue = document.createElement("p");
    pageCountValue.classList.add("value");
    pageCountValue.textContent = `${book.pageCount} pages`;
    let readValue = document.createElement("p");
    readValue.classList.add("value");
    readValue.textContent = `${book.name?'Already read':'Not read yet'}`;
    otherInfo.appendChild(otherTitle);
    otherInfo.appendChild(pageCountValue);
    otherInfo.appendChild(readValue);

    card.appendChild(bookNameInfo);
    card.appendChild(authorInfo);
    card.appendChild(otherInfo);
    return card;
}
function showAddBookCard(){
    let addBookCard = document.querySelector("#bookInfo");
    addBookCard.classList.toggle("invisible");
}
function createBook(){
    let addBookCard = document.querySelector("#bookInfo");
    addBookCard.classList.toggle("invisible");

    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pageNumber = document.querySelector("#pageNumber");
    let alreadyRead = document.querySelector("#alreadyRead");

    let newBook = new Book(title.value, author.value,pageNumber.value, alreadyRead.checked);
    newBook.addBookToLibrary();
    
    title.value ="";
    author.value = "";
    pageNumber.value = "";
    alreadyRead.checked = false;
    
    showAllBooks();
}