import {expect} from 'chai';
import {isOddOrEven} from '../functions/01.EvenOrOdd.js';

describe("isOddOrEven function tests", function(){
    
    it("should return undefined when passing input which is not a string", function(){
        expect(isOddOrEven(22)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
    });

    it("should return even when the string is with even length", function(){
        expect(isOddOrEven("asda")).to.equal("even");
        expect(isOddOrEven("22")).to.equal("even");
    });

    it("should return odd when the input is string with odd length", function(){
        expect(isOddOrEven("asd")).to.equal("odd");
        expect(isOddOrEven("3")).to.be.equal("odd");
    });

    it("should return correct results when passing few different inputs in a row", function(){
        expect(isOddOrEven("even")).to.equal("even");
        expect(isOddOrEven("fff")).to.equal("odd");
        expect(isOddOrEven("aaa")).to.equal("odd");
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven("")).to.equal("even");
    })
});