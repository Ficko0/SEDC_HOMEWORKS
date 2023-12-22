class Book {
    constructor (title, author, readingStatus) {
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookReadingStatus = readingStatus;
    }
    checkStatus() {
        if (this.bookReadingStatus == true) {
            alert(`Okay, you have read ${this.bookTitle} by ${this.bookAuthor}.`)
        }
        else if(this.bookReadingStatus == false) {
            alert(`You haven't read ${this.bookTitle} by ${this.bookAuthor}.`)
        }
        else {
            alert('Please read a book.')
            this.checkStatus()
        }
    }
}

const book1 = ('Harry Potter', 'J.K.Rowling', false);
const book2 = ('The Hunger Games', 'Petko Teshkaglaa', true);

