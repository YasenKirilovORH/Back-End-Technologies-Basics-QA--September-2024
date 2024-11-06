const { expect } = require('chai');
const { sum } = require('../functionSumNumbersCommonJs.js');

describe('Sum function tests', function(){
    it('sum single number', function(){
        expect(sum([1])).to.equal(1);
    });

    it('sum multiple numbers', function(){
        expect(sum([1, 1])).to.equal(2);
    });

    it('sum different numbers', function(){
        expect(sum([2, 3, 4])).to.equal(9)
    });
});