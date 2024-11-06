import {expect} from 'chai';
import {sum} from '../01.SumNumbers.js';

describe('Sum function test', function(){

    it('should return the sum of array of numbers', function(){
        //arrange
        let testData = [1, 2, 3];
        let result;

        //act
        result = sum(testData);

        //assert
        expect(result).to.equal(6);

    });
    
    it('should return the sum of an array as string', function(){
        //arrange
        let testData = ['1', '2', '3'];
        let result;

        //act
        result = sum(testData);

        //assert
        expect(result).to.equal(6);
    });

    it('should return 0 when array is empty', function(){
        //arrange
        let testData = [];
        let result;

        //act
        result = sum(testData);

        //assert
        expect(result).to.equal(0);
    });

    it('should return negative sum when array is with negative numbers', function(){
       //arrange
       let testData = [-1, -3, -4];
       let result;

       //act
        result = sum(testData);

       //assert
       expect(result).to.equal(-8);
    });

    it('should return correct sum from array with mixed numbers', function(){
        //arrange
        let testData = [-2, 3, 3, -1, 7]
        let result;

        //act
        result = sum(testData);

        //assert
        expect(result).to.equal(10);
    });

    it('should give correct result when passing chars instead of numbers', function(){
        //arrange
        let testData = ['a', 'b', 'c'];
        let result;

        //act
        result = sum(testData);

        //assert
        expect(result).to.be.NaN
    });
});