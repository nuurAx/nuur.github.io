//Book Class: Represents a book
class Book {
    constructor(title, author, isbn) {
        this.title= title;
        this.author = author;
        this.isbn = isbn;

    }
}

//UI Class: Handle UI tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title:"tariiqda somalia",
                author:"Budeste",
                isbn:"0722908991"

            },
            {
            title:"Ogaansho",
            author:"Carfaaye",
            isbn: "0710564546"
            },
            {
                title:"Maqooqaa",
                author:'Iskudeys',
                isbn:"0721721219"
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='btn btn-danger btn-sm delete'>x</td>
        `;
        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();

        }

    }
    

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form =document.querySelector('#book-form');
        container.insertBefore(div, form);
    }


    static clearFields() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }



}

//Store Class: handle storage

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: add book
document.querySelector('#book-form').addEventListener('submit', (e)=>
{
    //prevent actual submit
    e.preventDefault();
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    
    //Validate
    if(title === '' || author=== '' || isbn === '') {
       UI.showAlert('Please fill in all the fields', 'danger');
    } else {

    


    
    //instatiate a book
    const book = new Book(title, author, isbn);
    console.log(book)
    //Add Book to UI
    UI.addBookToList(book);

    //Clear fields
    UI.clearFields();
    }
    
});


//Event: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) =>

{

    UI.deleteBook(e.target)
});
