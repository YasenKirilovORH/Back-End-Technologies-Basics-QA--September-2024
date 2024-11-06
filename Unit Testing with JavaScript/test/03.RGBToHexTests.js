import {expect} from 'chai';
import {rgbToHexColor} from '../03.RGBToHex.js';

describe("RGNToHex function tests", function(){

    it("should return correct hex for valid RGB data", function(){
        //arrange and act
        const result = rgbToHexColor(200, 131, 133);

        //assert
        expect(result).to.equal("#C88385");
    });

    it("should return correct hex for lower boundary data", function(){
        //arrange and act
        const result = rgbToHexColor(0, 0, 0);

        //assert
        expect(result).to.equal("#000000");
    });

    it("should return correct hex for upper boundary data", function(){
        //arrange and act
        const result = rgbToHexColor(255, 255, 255)

        //assert
        expect(result).to.equal("#FFFFFF")
    });

    it("should return undefined for negative number", function(){
        //arrange and act
        const result = rgbToHexColor(-5, 123, 200);

        //assert
        expect(result).to.be.undefined;
    });

    it("should return undefined for bigger number than 255", function(){
        //arrange and act
        const result = rgbToHexColor(5, 256, 200);

        //assert
        expect(result).to.be.undefined;
    });

    it("should return undefined for a decimal number for red", function(){
        //arrange and act
        const result = rgbToHexColor(5.5, 256, 200);

        //assert
        expect(result).to.be.undefined;
    });

    it("should return undefined for a decimal number for green", function(){
        //arrange and act
        const result = rgbToHexColor(5.5, 200.3, 200);

        //assert
        expect(result).to.be.undefined;
    });

    it("should return undefined for a decimal number for blue", function(){
        //arrange and act
        const result = rgbToHexColor(5, 200, 18.3);

        //assert
        expect(result).to.be.undefined;
    });
});