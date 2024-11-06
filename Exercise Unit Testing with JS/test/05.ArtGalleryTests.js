import {expect} from 'chai';
import {artGallery} from '../functions/05.ArtGallery.js';

describe("artGallery object tests", function(){
    describe("addArtwork function tests", function(){
        //Negative tests
        it("should throw an error message if artis or title are invalid", function(){
            expect(() => artGallery.addArtwork(1, "20 x 25", "Monet")).to.throw("Invalid Information!");
            expect(() => artGallery.addArtwork("Title", "30 x 40", 2)).to.throw("Invalid Information!");
        });

        it("should throw an error message for invalid dimension if dimension is not passed in correct format", function(){
            expect(() => artGallery.addArtwork("Title", 20, "Picasso")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("Title", "20x20", "Monet")).to.throw("Invalid Dimensions!");
            expect(() => artGallery.addArtwork("Title","20 x word", "Monet")).to.throw("Invalid Dimensions!");
        });

        it("should return error for invalid artist if input is invalid artist", function(){
            expect(() => artGallery.addArtwork("Title", "25 x 40", "Peter")).to.throw("This artist is not allowed in the gallery!");
        });

        //Positive tests(if artist is allowed in the gallery - Van Gogh, Picasso, Monet)
        it("should return correct message when the input is in valid format and data is valid", function(){
            expect(artGallery.addArtwork("Title", "30 x 30", "Monet")).to.equal("Artwork added successfully: 'Title' by Monet with dimensions 30 x 30.")
        });

        it("should return correct message when the input is in valid format and data is valid", function(){
            expect(artGallery.addArtwork("Title", "30 x 30", "Van Gogh")).to.equal("Artwork added successfully: 'Title' by Van Gogh with dimensions 30 x 30.")
        });

        it("should return correct message when the input is in valid format and data is valid", function(){
            expect(artGallery.addArtwork("Title", "30 x 30", "Picasso")).to.equal("Artwork added successfully: 'Title' by Picasso with dimensions 30 x 30.")
        });
    });

    describe("calculateCosts function tests", function(){
        //Negative tests
        it("should return error message if input is not in correct format (number, number, booleand) or number is a negative number", function(){
            expect(() => artGallery.calculateCosts("100", 200, false)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(100, "200", true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(100, 200, "true")).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(-100, 200, true)).to.throw("Invalid Information!");
            expect(() => artGallery.calculateCosts(100, -200, true)).to.throw("Invalid Information!");
        });

        //Positive tests
        it("should return correct message with calculated total cost when data is valid(without discount)", function(){
            expect(artGallery.calculateCosts(100, 200, false)).to.equal("Exhibition and insurance costs are 300$.");
        });

        it("should return correct message with calculated total cost when data is valid(with discount)", function(){
            expect(artGallery.calculateCosts(100, 200, true)).to.equal("Exhibition and insurance costs are 270$, reduced by 10% with the help of a donation from your sponsor.");
        });
    });

    describe("organizeExhibits function tests", function(){
        //Negative tests
        it("should return error message if input is not in the correct format(number, number) or numbers are less than 0", function(){
            expect(() => artGallery.organizeExhibits(1, "2")).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits("2", 10)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(2, [10])).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits([2], 10)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(2, {})).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits({}, 10)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(-10, 2)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(10, -12)).to.throw("Invalid Information!");
        });

        //Positive tests
        it("should return correct message if input is correct but artworksPerSpace is less than 5", function(){
            expect(artGallery.organizeExhibits(5, 2)).to.equal("There are only 2 artworks in each display space, you can add more artworks.");
        });

        it("should return correct message when input is valid and artworksPerSpace are mor than 5", function(){
            expect(artGallery.organizeExhibits(22, 2)).to.equal("You have 2 display spaces with 11 artworks in each space.")
        });
    });
});