import {expect} from 'chai';
import {createCalculator} from '../04.AddSubtract.js';

describe("AddSubstract function tests", function(){
    
    it("should return correct resut with add", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.add(5);

        //assert
        expect(calculator.get()).to.equal(5);
    });

    it("should return correct result with substract", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.subtract(2);

        //assert
        expect(calculator.get()).to.equal(-2);
    });

    it("should return correct result with both add and substract", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.add(3);
        calculator.subtract(1);

        //assert
        expect(calculator.get()).to.equal(2);
    });

    it("should return correct result with adding a string", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.add("5");

        //assert
        expect(calculator.get()).to.equal(5);
    });

    it("should return correct result with substracting a string", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.subtract("2");

        //assert
        expect(calculator.get()).to.equal(-2);
    });

    it("should return correct result when adding a decimal", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.add(10.5);

        //assert
        expect(calculator.get()).to.equal(10.5);
    });

    it("should return correct result when substracting a decimal", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.subtract(8.5);

        //assert
        expect(calculator.get()).to.equal(-8.5);
    });

    it("should return NaN when adding a string that it is not a number", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.add("string");

        //assert
        expect(calculator.get()).to.be.NaN;
    });

    it("should return NaN when substracting a string that it is not a number", function(){
        //arrange and act
        let calculator = createCalculator();
        calculator.subtract("string");

        //assert
        expect(calculator.get()).to.be.NaN;
    });
});