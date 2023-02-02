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
Book.prototype.removeBookFromLibrary = function(){
    myLibrary = myLibrary.filter(book => book.name != this.name);

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

    let bookNameInfo = createBookElement('Book', book.name);
    let authorInfo = createBookElement('Author', book.author);
    let otherInfo = createBookElement('Infos', `${book.pageCount} pages`, `${book.read ? 'Already read' : 'Not read yet'}`);
    let buttons = createBookButtons(book)



    card.appendChild(bookNameInfo);
    card.appendChild(authorInfo);
    card.appendChild(otherInfo);
    card.appendChild(buttons);
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

function createBookElement(ElementTitle, ...ElementValue) {
    let bookInfo = document.createElement("div");
    bookInfo.classList.add("info");
    let infoTitle = document.createElement("p");
    infoTitle.classList.add("title");
    infoTitle.textContent = `${ElementTitle} :`;
    bookInfo.appendChild(infoTitle);
    ElementValue.forEach(element => {
        let infoValue = document.createElement("p");
        infoValue.classList.add("value");
        infoValue.textContent = `${element}`;
        bookInfo.appendChild(infoValue);
    });
    
    return bookInfo;
}
function createBookButtons(book) {
    let buttonsDiv = document.createElement("div")
    buttonsDiv.classList.add("cardButtonsHolder");
    
    let readChange = document.createElement("div")
    readChange.classList.add("cardButton");
    readChange.textContent = `${book.read? 'Not read' : 'Read'}`;
    readChange.style.cursor = "pointer";
    readChange.addEventListener('click', function() {
        book.read = !book.read;
        showAllBooks();
    });

    let deleteButton = document.createElement("div")
    deleteButton.classList.add("cardButton");
    deleteButton.textContent = "Delete";
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", function() {
        book.removeBookFromLibrary() 
        showAllBooks();
    ;})

    buttonsDiv.appendChild(readChange);
    buttonsDiv.appendChild(deleteButton);
    return buttonsDiv;
}