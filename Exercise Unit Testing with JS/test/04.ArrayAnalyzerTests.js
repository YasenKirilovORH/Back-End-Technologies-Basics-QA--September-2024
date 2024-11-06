import { expect } from "chai";
import {analyzeArray} from '../functions/04.ArrayAnalyzer.js';

describe("analyzeArray function tests", function(){

    it("should return undefined when input is not an array", function(){
        expect(analyzeArray("string")).to.be.undefined;
        expect(analyzeArray(2)).to.be.undefined;
        expect(analyzeArray({word: "asd"})).to.be.undefined;
        expect(analyzeArray(null)).to.be.undefined;
    });

    it("should return undefined when array is empty", function(){
        expect(analyzeArray([])).to.be.undefined;
    });

    it("should return undefined when array is not with numbers but with other type of input like string", function(){
        expect(analyzeArray(["string"])).to.be.undefined;
        expect(analyzeArray(["word", 2])).to.be.undefined;
        expect(analyzeArray([1, 2, false])).to.be.undefined;
        expect(analyzeArray([2, null, 3])).to.be.undefined;
    });

    it("should return correct object when passing valid array inputs", function(){
        expect(analyzeArray([1, 2, 3, 4, 5])).to.deep.equal({min: 1, max: 5, length: 5});
        expect(analyzeArray([2, 7, 1, 4, 5, 3])).to.deep.equal({min: 1, max: 7, length: 6});
        expect(analyzeArray([-1, -3, -21])).to.deep.equal({min: -21, max: -1, length: 3});
        expect(analyzeArray([23])).to.deep.equal({min: 23, max: 23, length: 1});
    });

    it("should return correct object when passing array with equal elements", function(){
        expect(analyzeArray([1, 1, 1, 1])).to.deep.equal({min: 1, max: 1, length: 4});
    });

    it("should return correct object when passing an array with valid floating point numbers", function(){
        expect(analyzeArray([10.3, 2.1, 3.6, 6.4, 1.5])).to.deep.equal({min: 1.5, max: 10.3, length: 5});
    });
});