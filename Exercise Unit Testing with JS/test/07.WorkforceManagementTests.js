import { expect } from "chai";
import { workforceManagement } from "../functions/07.WorkforceManagement.js";

describe("workforceManagement object tests", function(){
    describe("recruitStaff function tests", function(){
        //There is no need for validation for the input, you will always be given a string, string, and number.
        it("should give message that currently company is not hiring for the required role if it is not Developer", function(){
            expect(() => workforceManagement.recruitStaff("Peter", "QA Engineer", 4)).to.throw("We are not currently hiring for this role.");
        });

        it("should give message that person is hired if the role is Developer and he has 4 or more years of experience", function(){
            expect(workforceManagement.recruitStaff("Peter", "Developer", 4)).to.equal("Peter has been successfully recruited for the role of Developer.");
        });

        it("should return message that candidate is not suitable for the role if years are less than 4", function(){
            expect(workforceManagement.recruitStaff("Peter", "Developer", 3)).to.equal("Peter is not suitable for this role.");
        });
    });

    describe("computeWages function tests", function(){
        //Negative tests
        it("should return error for invalid input for hours", function(){
            expect(() => workforceManagement.computeWages(-1)).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages("100")).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages([20])).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages({hours: 10})).to.throw("Invalid hours");
            expect(() => workforceManagement.computeWages(true)).to.throw("Invalid hours");
        });

        //Positive tests
        it("should return correct salary when input is correct and it is less than 160 hours", function(){
            expect(workforceManagement.computeWages(160)).to.equal(2880);
            expect(workforceManagement.computeWages(1)).to.equal(18);
            expect(workforceManagement.computeWages(0)).to.equal(0);
        });

        it("should return correct salary then input is correct and hours are more than 160 and bonus is added", function(){
            expect(workforceManagement.computeWages(161)).to.equal(4398);
        });
    });

    describe("dismissEmployee function test", function(){
        //Negative tests
        it("should return error if input is not in correct format", function(){
            expect(() => workforceManagement.dismissEmployee("Ivan", 0)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], "1")).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], true)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], [])).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], {})).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee({name: "Petar"}, 0)).to.throw("Invalid input");
            expect(() => workforceManagement.dismissEmployee(true, 0)).to.throw("Invalid input");
        });

        it("should return error if index is outside the limit of the array", function(){
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], 3)).to.throw("Invalid input");
        });

        it("should return error if index is a negative number", function(){
            expect(() => workforceManagement.dismissEmployee(["Petar", "Ivan", "George"], -1)).to.throw("Invalid input");
        });

        //Positive tests
        it("should return new array to a string with updated names", function(){
            const workforce = ["Jan", "George", "Mike", "Sonya", "Veronica"];

            expect(workforceManagement.dismissEmployee(workforce, 2)).to.equal("Jan, George, Sonya, Veronica");
        });
    });
});