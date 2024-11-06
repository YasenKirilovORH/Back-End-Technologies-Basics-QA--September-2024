import {expect} from 'chai';
import {mathEnforcer} from '../functions/03.MathEnforcer.js';

describe("MathEnforcer object tests", function(){
    describe("addFive function tests", function(){
    it("should return undefined when passing input which is different from number", function(){
            expect(mathEnforcer.addFive("string")).to.be.undefined;
            expect(mathEnforcer.addFive("2")).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([2])).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });

        it("should return correct result when passing a valid positive, negative and decimal number as input", function(){
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
            expect(mathEnforcer.addFive(2.3)).to.closeTo(7.3, 0.01);
        });
    });

    describe("subtractTen function tests", function(){
        it("should return undefined when passing input which is different from number", function(){
            expect(mathEnforcer.subtractTen("string")).to.be.undefined;
            expect(mathEnforcer.subtractTen("2")).to.be.undefined;
            expect(mathEnforcer.subtractTen({number: 2})).to.be.undefined;
            expect(mathEnforcer.subtractTen([2])).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });

        it("should return correct result when passing a valid positive, negative and decimal number as input", function(){
            expect(mathEnforcer.subtractTen(25)).to.equal(15);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30);
            expect(mathEnforcer.subtractTen(22.3)).to.closeTo(12.3, 0.01);
        });
    });

    describe("sum function tests", function(){
        it("should return undefined when passing inputs which are different from numbers", function(){
            expect(mathEnforcer.sum(1, "1")).to.be.undefined;
            expect(mathEnforcer.sum("1", 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
            expect(mathEnforcer.sum({}, 2)).to.be.undefined;
            expect(mathEnforcer.sum(4, [])).to.be.undefined;
            expect(mathEnforcer.sum([], 1)).to.be.undefined;
            expect(mathEnforcer.sum(21, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 11)).to.be.undefined;
            expect(mathEnforcer.sum(21, null)).to.be.undefined;
            expect(mathEnforcer.sum(null, 11)).to.be.undefined;
        });

        it("should return correct sum when passing two positive numbers", function(){
            expect(mathEnforcer.sum(21, 2)).to.equal(23);
        });

        it("should return correct sum when passing two negative numbers", function(){
            expect(mathEnforcer.sum(-10, -3)).to.equal(-13);
        });

        it("should return correct sum when passing two floating point numbers", function(){
            expect(mathEnforcer.sum(11.2, 2.5)).to.closeTo(13.7, 0.01);
        });
    });
});