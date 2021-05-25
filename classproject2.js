console.log("hello es6 classs are use");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        // console.log("Adding to ui");
        let tabelbody = document.getElementById('tableBody');
        let uiString = ` <tr>
                             <td>${book.name}</td>
                              <td>${book.author}</td>
                              <td>${book.type}</td>
                         </tr>`;
        tabelbody.innerHTML += uiString;
    }
    clear() {
        let libraryform = document.getElementById('Libraryform');
        libraryform.reset();
    }
    validate(book) {
            if (book.name.length < 2 || book.author.length < 2) {
                return false;
            } else {
                return true;
            }
        }
        //Implement the show function
    show(type, displaymessage) {
        let message = document.getElementById('message');
        let boldtxt;
        if (type === 'success') {
            boldtxt = 'Success';
        } else {
            boldtxt = 'Error'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldtxt}!</strong> ${displaymessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
        setTimeout(() => {
            message.innerHTML = '';
        }, 2000);
    }
}
let libraryform = document.getElementById('Libraryform');
libraryform.addEventListener('submit', libraryFromSubmit);

function libraryFromSubmit(e) {
    // console.log("You have submited library from")

    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        // console.log(fiction)
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    // console.log(book)
    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', "Your book has been Successfully added");
    } else {
        display.show('danger', "sorry... you cannot add this book");

    }

    e.preventDefault();
}