// TODO: ================================ //
// TODO: JavaScript Math Object & Methods //
// TODO: ================================ //

console.log(`======================================`)
console.log(`== JavaScript Math Object & Methods ==`)
console.log(`======================================`)

// * The JavaScript Math object allows you to perform mathematical tasks on numbers.
// * Notice that because it's an Object that the 'M' on Math.method() is capitalized.
// * All methods and properties can be used without creating a Math object first.

// * The syntax for any math method in JavaScript is "Math.method(number)"

// ? If we wanted to return PI we could simply use:
// Math.PI
let pie = Math.PI
console.log(`PI: ${pie}`)


// TODO: Rounding Numbers
// * There are 4 common methods to round a number to an integer:
// We'll use our 'pie' constant with the value of PI for these examples:

// ? Math.round(x) - Returns x rounded to its nearest integer (this is the standard 'rounding' I know where >=5 rounds up and <=4 rounds down)
console.log(`Math.round(x): ${Math.round(pie)}`)


// ? Math.ceil(x) - Returns x rounded up to its nearest integer
console.log(`Math.ceil(x): ${Math.ceil(pie)}`)


// ? Math.floor(x) - Returns x rounded down to its nearest integer
console.log(`Math.floor(x): ${Math.floor(pie)}`)


// ? Math.trunc(x) - Returns the integer part of x (chops the decimal point)
console.log(`Math.trunc(x): ${Math.trunc(pie)}`)


// TODO: Positive, Neutral(0) or Negative Check
// * There is a method called .sign() that can be used as a 'check' (possibly used with a conditional) to see if a number is a positive integer, a negative integer or 0.
// * If the number is a POSITIVE INTEGER it will return '1', if it's NEGATIVE INTEGER it will return '-1', and if it's 0 it will return '0'
// ? This is called the Math.sign() method:
const num1 = 4.583
const num2 = 0
const num3 = -22.8848
console.log(`Number: ${num1} = ${Math.sign(num1)}`)
console.log(`Number: ${num2} = ${Math.sign(num2)}`)
console.log(`Number: ${num3} = ${Math.sign(num3)}`)


// TODO: Math.pow() - Returns value of X to power of Y
// * a very simple method that takes 2 parameters; x, y values
console.log(`Math.pow(8, 2) (8 to the power of 2) : ${Math.pow(8, 2)}`)


// TODO: Math.sqrt() - Finding the Square Root
// * returns the square root of x
console.log(`What is the square root of 128? : ${Math.sqrt(128)}`)


// TODO ******************************* //
// TODO: Generating Random Numbers      //
// TODO ******************************* //
// * Math.random() returns a random number between 0, and 1.
// * Math.random() always returns a number lower than 1 without 'modification' from the coder.

// ? We can use the methods 'Math.random()' and 'Math.floor()' to generate a random number in any scale of our choosing (with a whole lot of decimal places).
// ? We know Math.random() will return a random number between 0 and 1. We can add a multiplier on this method to 'roll' up to any number we'd like:
// Math.random() * 10
// will produce a random number from 0-9, rather than 10 because we're starting at 0, naturally.
console.log(`A random number from 0 to 9: ${Math.random() * 10}`)

// so that works, but that will only roll from 0-9 and will provide a massive amount of decimal places. In order to reduce that to a whole integer we can 'wrap' it in the Math.floor() method, passing 0 (as in 0 decimal places).
console.log(`A random number from 0 to 9 (w/o decimals): ${Math.floor(Math.random() * 10)}`)

// we now have a random number 'rolling' from 0-9 without decimal places. We still need to sort out the issue of it not going to 10. We *could* just increase the multiplier on the Math.random() method to 11 which would in fact increase the possibility to 10, but the other issue is that one possible 'roll' is a 0, which in most cases, unless specifically wanted, still is an issue.
// We can fix that issue by adding a +1 *after* the 'flooring' (outside of the Math.random() method to increase all numbers from 0 - 9 therefore forcing a 'roll' from 1 - 10).
console.log(`A random number from 1 to 10 (w/o decimals): ${Math.floor(Math.random() * 10) + 1}`)

// * A final aside, if we wanted to write this as a reusable function, we could 'functionize' the above random generator code, or use the one below which does the exact same thing, but allows arguments for the number ranges:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}