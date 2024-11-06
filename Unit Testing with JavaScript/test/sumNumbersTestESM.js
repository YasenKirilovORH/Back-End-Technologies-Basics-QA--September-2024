import {expect} from 'chai';
import {sum} from '../functionSumNumbersESM.js';

describe('Sum function test', function (){
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
