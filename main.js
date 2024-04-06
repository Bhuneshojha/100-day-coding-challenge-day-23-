"use strict";
//          100 days of coding challenge ( DAY 23 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01
// -- The fuction adds a number and string together
function addNumberandString(number1, numberString) {
    // convert string into a number and add with number
    return number1 + Number(numberString);
}
// --Try it with a number 
console.log(addNumberandString(10, "5")); // it shows 15
//   Question 02    
// -- This function multiply two decimal number
function multiplyDecimals(num1, num2) {
    // multiplies number and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(0.5, 1.5));
// --After multiplying, we round to make the result easier to read.
//   Question 03 
// --This function divide two numbers and find the quotient and number
function divideAndRemainder(dividend, divisor) {
    // --Calculates the Quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in object
    return { quotient, remainder };
}
// Try it with 10 divided by 3
console.log(divideAndRemainder(10, 3));
