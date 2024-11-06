import { expect } from "chai";
import {gameService} from "../functions/GameService.js"

describe("gameService Tests", function() {

    describe("getGames funcntion tests", function() {
        it("Should return a successful response with a list of games", function(){
            // Arrange
            const response = gameService.getGames();

            // Act and Assert
            expect(response.status).to.equal(200);
            expect(response.data).to.be.an("array").that.has.lengthOf(3);
            expect(response.data[0]).to.have.all.keys('id', 'title', 'genre', 'year', 'developer', 'description');
        });
    });
  
    describe("addGame function tests", function() {
        it("Should add a new game successfully", function(){
            // Arrange
            let newGame = 
            { 
                id: "4", 
                title: "Halo", 
                genre: "Action-shooter", 
                year: 2001 , developer: "Microsoft", 
                description: "An action-shooter game vs aliens."
            };
            
            // Act and Assert
            const response = gameService.addGame(newGame);
            
            expect(response.status).to.equal(201);
            expect(response.message).to.equal("Game added successfully.");

            const allGames = gameService.getGames();

            expect(allGames.data).to.deep.include(newGame);
        });
        
        it("Should return an error for invalid game data", function(){
            // Arrange
            let newGame =
            {
                id: "5", 
                title: "Game is not with full data",
            };

            // Act and Assert
            const response = gameService.addGame(newGame);

            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Game Data!");
        });
    });
  
    describe("deleteGame function tests", function() {
        it("Should delete an existing game by ID", function(){
            // Arrange
            let gameToBeDeleted = "1";

            // Act and Assert
            const response = gameService.deleteGame(gameToBeDeleted);

            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Game deleted successfully.");

            const gameList = gameService.getGames().data;
            const foundGame = gameList.filter(game => game.id === gameToBeDeleted);

            expect(foundGame.length).to.equal(0);
        });

        it("Should return an error if the game is not found", function(){
            // Arrange
            let gameToBeDeleted = "100";

            // Act and Assert
            const response = gameService.deleteGame(gameToBeDeleted);

            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Game Not Found!");
        });
    });
  
    describe("updateGame function tests", function() {
        it("Should update an existing game with new data", function(){
            // Arrange
            let oldId = "2";
            let gameInfoUpdate = 
            {
                id: "2",
                title: "God of War", 
                genre: "Action-adventure", 
                year: 2018, developer: "Santa Monica Studio", 
                description: "Updated Description."
            };

            // Act and Assert
            const response = gameService.updateGame(oldId, gameInfoUpdate);

            expect(response.status).to.equal(200);
            expect(response.message).to.equal("Game updated successfully.");

            const allGames = gameService.getGames();
            
            expect(allGames.data).to.deep.include(gameInfoUpdate);
        });

        it("Should return an error if the game to update is not found", function(){
            // Arrange
            let oldId = "50";
            let gameInfoUpdate = 
            {
                id: "2",
                title: "God of War", 
                genre: "Action-adventure", 
                year: 2018, developer: "Santa Monica Studio", 
                description: "Updated Description."
            };

            // Act and Assert
            const response = gameService.updateGame(oldId, gameInfoUpdate);

            expect(response.status).to.equal(404);
            expect(response.error).to.equal("Game Not Found!");

        });

        it("Should return an error if the new game data is invalid", function(){
            // Arrange
            let oldId = "3";
            let gameInfoUpdate = {};

            // Act and Assert
            const response = gameService.updateGame(oldId, gameInfoUpdate);

            expect(response.status).to.equal(400);
            expect(response.error).to.equal("Invalid Game Data!");
        });
    });
  });