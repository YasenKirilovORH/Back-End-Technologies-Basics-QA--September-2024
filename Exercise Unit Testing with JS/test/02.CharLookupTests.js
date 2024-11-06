import {expect} from 'chai';
import {lookupChar} from '../functions/02.CharLookup.js';

describe("CharLookup function tests", function(){

    it("should return undefined when passing invalid values", function(){
        expect(lookupChar(2, 1)).to.be.undefined;
        expect(lookupChar("asd", "2")).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
        expect(lookupChar("string", [0])).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar("sss", {number: 1})).to.be.undefined;
        expect(lookupChar(undefined, 1)).to.be.undefined;
        expect(lookupChar("asddd", undefined)).to.be.undefined;
        expect(lookupChar(null, 1)).to.be.undefined;
        expect(lookupChar("string", null)).to.be.undefined;
        expect(lookupChar("string", 2.5)).to.be.undefined;
    });

    it("should return incorrect index when index is bigger than the string length", function(){
        expect(lookupChar("string", 6)).to.equal("Incorrect index");
        expect(lookupChar("string", 12)).to.equal("Incorrect index");
    });

    it("should return incorrect index when index is less than 0", function(){
        expect(lookupChar("asd", -1)).to.equal("Incorrect index");
    });

    it("should return correct char when pasing valid inputs", function(){
        expect(lookupChar("string", 0)).to.equal("s");
        expect(lookupChar("asd", 1)).to.equal("s");
        expect(lookupChar("word", 3)).to.equal("d");

    });

    it("should return incorrect index when passing an empty string and 0 as index", function(){
        expect(lookupChar("", 0)).to.equal("Incorrect index");
    });
});

