let library = document.querySelector('main');
let inputTitle = document.getElementById('title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let createButton = document.querySelector('.create')
let bookForm = document.querySelector('.bookForm');
let newBookButton = document.querySelector('.newBookButton');


let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

};

function addBookToLibrary(title = inputTitle.value, author = inputAuthor.value, pages = inputPages.value, read = "yes") {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  console.log(myLibrary);
};

function displayBooks(myLibrary){
    

    for (let i=0; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.setAttribute('class', 'newBook');
        div.dataset.index = i;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        let titleOfBook = document.createElement("h3");
        let author = document.createElement("h5");
        let pages = document.createElement("h6")
        titleOfBook.textContent = myLibrary[i]. title
        author.textContent = myLibrary[i]. author
        pages.textContent = myLibrary[i]. pages
        let readSwitch = document.createElement("label");
        readSwitch.className = "switch";
        let inputRead = document.createElement("input");
        inputRead.type = "checkbox";
        let sliderRound = document.createElement("span");
        sliderRound.className = "slider round";
        readSwitch.append(inputRead, sliderRound);
        div.append(deleteButton, titleOfBook, author, pages, readSwitch);
        library.append(div);


    
        deleteButton.addEventListener('click', function(e){
            var element = document.body.querySelector(`.newBook[data-index="${div.dataset.index}"]`);
            console.log(`${div.dataset.index}`)
            myLibrary.splice(`${div.dataset.index}`, 1);
            library.querySelectorAll('.newBook').forEach(n => n.remove());
            displayBooks(myLibrary);
            
        })

        
    }
    

}




createButton.addEventListener('click', function(e){
    
    addBookToLibrary();
    library.querySelectorAll('.newBook').forEach(n => n.remove());
    displayBooks(myLibrary);
    bookForm.style.visibility = "hidden";
    
});


newBookButton.addEventListener('click', function(e) {
    bookForm.style.visibility = "visible";
})

// = document.getElementById('title').value,

