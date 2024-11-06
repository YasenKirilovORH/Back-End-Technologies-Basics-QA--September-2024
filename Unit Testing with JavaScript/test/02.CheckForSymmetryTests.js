import {expect} from 'chai';
import {isSymmetric} from '../02.CheckForSymmetry.js';

describe("Tests for checkForSymetricFunction", function(){
    
    it("should return true for symetric array", function(){
        //arrange and act
        const result = isSymmetric([1, 2, 3, 2, 1]);

        //assert
        expect(result).to.be.true;
    });

    it("should return false for non-symetric array", function(){
        //arrange and act
        const result = isSymmetric([1, 2, 3, 2, 1, 4]);

        //assert
        expect(result).to.be.false;
    });

    it("should return true for empty array", function(){
        //arrange and act
        const result = isSymmetric([]);

        //assert
        expect(result).to.be.true;
    });

    it("should return false for non-array", function(){
        //arrange and act
        const result = isSymmetric("string");

        //assert
        expect(result).to.be.false;
    });

    it("should return false for non-number element", function(){
        //arrange and act
        const result = isSymmetric(["2", 2])
        //assert
        expect(result).to.be.false;
    });

    it("should return true for single element", function(){
        //arrange and act
        const result = isSymmetric([1])
        //assert
        expect(result).to.be.true;
    });
});