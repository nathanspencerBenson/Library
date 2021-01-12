let library = document.querySelector('.library');
let inputTitle = document.getElementById('title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let createButton = document.querySelector('.create')
let bookForm = document.querySelector('.bookForm');
let newBookButton = document.querySelector('.newBookButton');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close');


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
    

    for (let i=myLibrary.length-1; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.setAttribute('class', 'newBook');
        div.dataset.index = i;
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&times";
        let titleOfBook = document.createElement("h3");
        let author = document.createElement("h4");
        let pages = document.createElement("h5");
        titleOfBook.textContent = myLibrary[i]. title;
        author.textContent =myLibrary[i]. author;
        pages.textContent = "Pages: " + myLibrary[i]. pages;
        let readSwitch = document.createElement("label");
        let read = document.createElement("h6");
        read.className = "completed";
        read.textContent = "Completed";
        readSwitch.className = "switch";
        let inputRead = document.createElement("input");
        inputRead.type = "checkbox";
        let sliderRound = document.createElement("span");
        sliderRound.className = "slider round";
        readSwitch.append(inputRead, sliderRound);
        let completedDiv = document.createElement("div");
        completedDiv.className = "container-switch";
        completedDiv.append(read, readSwitch);
        div.append(deleteButton, titleOfBook, author, pages, completedDiv);
        library.append(div);


    
        deleteButton.addEventListener('click', function(e){
            var element = document.body.querySelector(`.newBook[data-index="${div.dataset.index}"]`);
            element.className = `newBook ${div.dataset.index}`;
            console.log(element);
            // console.log(`${div.dataset.index}`)
            myLibrary[`${div.dataset.index}`] = "";
            element.classList.remove('newBook');
            element.remove(inputRead, sliderRound)
        
        
            
            
        })

        
    }
    

}




createButton.addEventListener('click', function(e){
    
    addBookToLibrary();
    // library.querySelectorAll('.newBook').forEach(n => n.remove());
    displayBooks(myLibrary);
    modal.style.display = "none";
    bookForm.reset();
    
});


newBookButton.addEventListener('click', function(e) {
   modal.style.display = "block";
});

closeModal.addEventListener('click', function(e){
    modal.style.display = "none";
})

// = document.getElementById('title').value,

