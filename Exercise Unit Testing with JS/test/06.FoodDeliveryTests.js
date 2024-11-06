import {expect} from 'chai';
import {foodDelivery} from '../functions/06.FoodDelivery.js';

describe("foodDelivery object tests", function(){
    describe("getCategory function tests", function(){
        //Negative tests
        it("should return error message for invalid category if input is invalid or invalid category", function(){
            expect(() => foodDelivery.getCategory("Meat")).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory(2)).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory({})).to.throw("Invalid Category!");
            expect(() => foodDelivery.getCategory([])).to.throw("Invalid Category!");
        });

        //Positive tests
        it("should return correct output for category Vegan", function(){
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
        });
        it("should return correct output for category Vegetarian", function(){
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
        });
        it("should return correct output for category Gluten-Free", function(){
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
        });
        it("should return correct output for category All", function(){
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
        });
    });

    describe("addMenuItem function test", function(){
        //Negative tests
        it("should throw an error message if input is not in correct format", function(){
            const menuItems = [
                {name: "Salad", price: 4},
                {name: "Fried eggs", price: 7},
                {name: "Dessert", price: 6}
            ];

            expect(() => foodDelivery.addMenuItem(menuItems, "15")).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(menuItems, [])).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(menuItems, {})).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem("menuItems", 15)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem({}, 15)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem(2, 15)).to.throw("Invalid Information!");
        });

        it("should throw an error message if input array is with less than 1 item in it", function(){
            expect(() => foodDelivery.addMenuItem([])).to.throw("Invalid Information!");
        });

        it("should throw an error if maxPrice is less than 5", function(){
            const menuItems = [
                {name: "Salad", price: 4},
                {name: "Fried eggs", price: 7},
                {name: "Dessert", price: 6}
            ];

            expect(() => foodDelivery.addMenuItem(menuItems, 4)).to.throw("Invalid Information!");
        });

        //Positive tests
        it("should return correct message for added items", function(){
            const menuItems = [
                {name: "Salad", price: 6},
                {name: "Fried eggs", price: 8},
                {name: "Fish and chips", price: 20}
            ];

            expect(foodDelivery.addMenuItem(menuItems, 8)).to.equal("There are 2 available menu items matching your criteria!");
            expect(foodDelivery.addMenuItem(menuItems, 20)).to.equal("There are 3 available menu items matching your criteria!");
        });
    });

    describe("calculateOrderCost function test", function(){
        //Negative tests
         it("should throw an error if input is not valid", function(){
            const shipping = ["standard"];
            const addons = ["sauce", "beverage"];

            expect(() => foodDelivery.calculateOrderCost(shipping, "addons", false)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost("shipping", addons, true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(shipping, addons, "true")).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(shipping, 1, false)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(1, addons, true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(shipping, addons, 1)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(shipping, addons, [])).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(shipping, addons, {})).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost({}, addons, true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost(shipping, {}, true)).to.throw("Invalid Information!");
         });

        //Positive
        it("should return correct message with correct price without discount when input is correct", function(){
            const shipping = ["express"];
            const addons = ["sauce", "beverage"];

            expect(foodDelivery.calculateOrderCost(shipping, addons, false)).to.equal("You spend $9.50 for shipping and addons!");
        });

        it("should return correct message with correct price with discount when input is correct", function(){
            const shipping = ["standard"];
            const addons = ["beverage"];

            expect(foodDelivery.calculateOrderCost(shipping, addons, true)).to.equal("You spend $5.52 for shipping and addons with a 15% discount!")
        });
    });
});