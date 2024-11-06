import {expect} from "chai";
import {bookService} from "../function/bookService.js";

describe("Book Service Tests", function() {

    describe("getBooks()", function() {
        it("Should return a status 200 and an array of books", function(){
            // Arrange
            const response = bookService.getBooks();

            // Act and Assert
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an("array").that.has.lengthOf(3);
            expect(response.data[0]).to.have.all.keys('id', 'title', 'author', 'year', 'genre');
        });

    });

    describe("addBook function tests", function() {
        it("Should add a new book successfully", function(){
            // Arrange
            let newBook =
            {
                id: "4", 
                title: "New Book", 
                author: "George Orwell", 
                year: 2024, 
                genre: "Dystopian" 
            };

            // Act and Assert
            const response = bookService.addBook(newBook);

            expect(response.status).to.equal(201);
            expect(response.message).to.equal("Book added successfully.");

            let allBooks = bookService.getBooks();

            expect(allBooks.data).to.deep.include(newBook);
        });

        it("Should return status 400 when adding a book with missing fields", function(){
            // Arrange
            let newBook =
            {
                id: "5", 
                title: "New Book2", 
            };

            // Act and Assert
            const response = bookService.addBook(newBook);

            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Book Data!");
        });
    });

    describe("deleteBook()", function() {
        it("Should delete a book by id successfully", function(){
            // Arrange
            let bookToBeDeleted = "2";

            // Act and Asser
            const response = bookService.deleteBook(bookToBeDeleted);

            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book deleted successfully.");

            const booksList = bookService.getBooks().data;
            const foundBook = booksList.filter(book => book.id === bookToBeDeleted);

            expect(foundBook.length).to.equal(0);
        });

        it("Should return status 404 when deleting a book with a non-existent id", function(){
            // Arrange
            let bookToBeDeleted = "10";

            // Act and Assert
            const response = bookService.deleteBook(bookToBeDeleted);

            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Book Not Found!");
        });
    });

    describe("updateBook()", function() {
        it("Should update a book successfully", function(){
            //Arrange
            let oldId = "1";
            let newBookData = 
            { id: "1", 
                title: "Updated title", 
                author: "George Orwell", 
                year: 2000, 
                genre: "Dystopian"
            };

            // Act and Assert
            const response = bookService.updateBook(oldId, newBookData);

            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Book updated successfully.");

            const allBooks = bookService.getBooks();
            
            expect(allBooks.data).to.deep.include(newBookData);
        });

        it("Should return status 404 when updating a non-existent book", function(){
            // Arrange
            let oldId = "12";
            let newBookData = 
            { id: "1", 
                title: "Updated title2", 
                author: "George Orwell", 
                year: 2000, 
                genre: "Dystopian"
            };

            // Act and Assert
            const response = bookService.updateBook(oldId, newBookData);

            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Book Not Found!");
        });

        it("Should return status 400 when updating with incomplete book data", function(){
            // Arrange
            let oldId = "3";
            let newBookData = {};

            // Act and Assert
            const response = bookService.updateBook(oldId, newBookData);
            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Book Data!");
        });
    });
});