//          100 days of coding challenge ( DAY 23 )

//   Question 01
  // -- The fuction adds a number and string together
  function addNumberandString(number1: number,numberString: string): number{
    // convert string into a number and add with number
    return number1 + Number(numberString)
  }
  // --Try it with a number 
  console.log(addNumberandString(10 , "5")); // it shows 15
//   Question 02    
  // -- This function multiply two decimal number
  function multiplyDecimals(num1:number,num2: number): number{
    // multiplies number and rounds the result to two decimal places  
    return Math.round((num1 * num2) * 100) / 100;
  }
  console.log(multiplyDecimals(0.5, 1.5));
  // --After multiplying, we round to make the result easier to read.
//   Question 03 
  // --This function divide two numbers and find the quotient and number
 function divideAndRemainder(dividend: number, divisor: number): {quotient: number, remainder: number}{
     // --Calculates the Quotient and remainder
     let quotient = Math.floor(dividend / divisor);
     let remainder = dividend % divisor;
     // Returns both in object
     return {quotient, remainder};
 }
  // Try it with 10 divided by 3
  console.log(divideAndRemainder(10, 3))












