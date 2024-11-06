import {expect} from 'chai';
import {movieService} from '../functions/movieService.js';

describe("movieService tests", function(){
    describe("getMovies function tests", function(){
        it("should return all movies with status 200", function(){
            // Arrange
            const response = movieService.getMovies();

            // Act and Assert
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an("array").that.has.lengthOf(3);
            for (let i = 0; i < response.data.length; i++) {
                expect(response.data[i]).to.include.keys("id", "name", "genre", "year", "director", "rating", "duration", "language", "desc");
            };
        });
    });

    describe("addMovie function tests", function(){
        it ("should add new movie if all the data is valid", function(){
            // Arrange
            const newMovie = { id: "4",
            name: "Venom: The Last Dance",
            genre: "Sci-Fi",
            year: 2024,
            director: "Kelly Marcel",
            rating: 6.2,
            duration: 109,
            language: "English",
            desc: "Eddie and Venom, on the run, face pursuit from both worlds. As circumstances tighten, they're compelled to make a heart-wrenching choice that could mark the end of their symbiotic partnership."};
            
            const response = movieService.addMovie(newMovie);

            // Act and Assert
            expect(response.status).is.equal(201)
            expect(response.message).to.equal("Movie added successfully.");
            const movies = movieService.getMovies();
            expect(movies.data).to.deep.include(newMovie);
        });

        it ("should not add new movie if data is not full", function(){
            // Arrange
            const newMovie = {
                id: "4",
                name: "Venom: The Last Dance"}
            
            const response = movieService.addMovie(newMovie);

            // Act and Assert
            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Movie Data!");
    });
});

    describe("deleteMovie function tests", function(){
        it("should sucesfully delete movie by valid ID", function(){
            // Arrange
            const movieIdToBeDeleted = "2";
            const response = movieService.deleteMovie(movieIdToBeDeleted);

            // Act and Assert
            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Movie deleted successfully.");
            const movies = movieService.getMovies().data;
            const foundedMovies = movies.filter(movies => movies.id === movieIdToBeDeleted);
            expect(foundedMovies.length).to.equal(0);
        });

        it("should return 404 error if movie is not found", function(){
            // Arrange
            const movieIdToBeDeleted = "40";
            const response = movieService.deleteMovie(movieIdToBeDeleted);

            //Act and Assert
            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Movie Not Found!");
        });
    });

    describe("updateMovie()", function () {
        it("should update an existing movie successfully", function () {
          const updatedMovie = {
            id: "1",
            name: "Inception",
            genre: "Sci-Fi",
            year: 2010,
            director: "Christopher Nolan",
            rating: 8.8,
            duration: 148,
            language: "English",
            desc: "A new description for Inception."
          };
     
          const response = movieService.updateMovie("Inception", updatedMovie);
          expect(response.status).to.equal(200);
          expect(response.message).to.equal("Movie updated successfully.");
          expect(movieService.movies).to.include(updatedMovie);
        });
     
        it("should return an error if the movie to update does not exist", function () {
          const response = movieService.updateMovie("Non-existent Movie", {});
          expect(response.status).to.equal(404);
          expect(response.error).to.equal("Movie Not Found!");
        });
     
        it("should return an error if the new movie data is invalid", function () {
          const invalidUpdatedMovie = {
            id: "1",
            name: "Inception",  
          };
     
          const response = movieService.updateMovie("Inception", invalidUpdatedMovie);
          expect(response.status).to.equal(400);
          expect(response.error).to.equal("Invalid Movie Data!");
        });
      });
    });