class Book {
    constructor (title, author, readingStatus) {
        this.bookTitle = title;
        this.bookAuthor = author;
        this.bookReadingStatus = readingStatus;
    }

    checkStatus() {
        let inputPrompt = prompt(`Have you read ${this.bookTitle} by ${this.bookAuthor}?`);

        if ((inputPrompt == 'yes') && (this.bookReadingStatus == true)) {
            alert('Good Job!');
        }

        else {
            alert(`You need to read ${this.bookTitle} by ${this.bookAuthor}. Come back when you've finished reading.`);
        }

    }
}

const book1 = new Book ('Hunger Games', 'Suzanne Collins', false);
const book2 = new Book ('Harry Potter', 'J.K.Rowling', true);
const book3 = new Book ('The Lord of The Rings', 'John Ronald Reuel Tolkien', false);
const book4 = new Book ('The Hobbit', 'John Ronald Reuel Tolkien', true)

book1.checkStatus();
book2.checkStatus();
book3.checkStatus();
book4.checkStatus();