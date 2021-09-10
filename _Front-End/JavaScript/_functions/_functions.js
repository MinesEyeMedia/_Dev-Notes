// * Functions * //
// Functions are reusable blocks of code, almost like little machines or programs within a program/app.
// We use them when we want to have some kind of action or code block repeated at will, and in very specific times.
// We call the function by using it's name followed by () - example().

// Basic Syntax:
// function functionName(paramIfNeeded) {
// code to run on call or invocation
// paramIfNeeded = 0
// }

// We can pass arguments into the function if needed as placeholders for data.
let currentYear = 2021
let currentAge = 38

function birthYear(currentAge) {
    return currentYear - currentAge
}
console.log(birthYear(currentAge))


// We can allow as many arguments/parameters in a function as required.
// (This is an inaccurate and very simplified tax calculator lol)
const INCOME = 105000
const FEDERAL_TAX_RATE = 0.26
const PROVINCIAL_TAX_RATE = 0.0505

function calculateTax(fedTax, provTax, income) {
    return (fedTax + provTax) * income
}
let taxOwed = calculateTax(FEDERAL_TAX_RATE, PROVINCIAL_TAX_RATE, INCOME)
console.log(`Based on your salary of $${INCOME}, you will owe $${taxOwed} this tax season!`)


// MPH to KPH Calculator
// Note: the toFixed() method actually returns a string.
// We can use the 'Number()' function to convert back to a number.
function mphToKph(mph) {
    const conversion = mph / 0.6213
    return Number(conversion.toFixed(0)) // .toFixed() removes any decimal places.
}
console.log(mphToKph(85))


// Celsius to Fahrenheit
function convertTemperature(celsius) {
    const fahrenheit = celsius * 1.8 + 32
    return Number(fahrenheit.toFixed(1)) // again, removes all but 1 decimal place.
}
console.log(convertTemperature(30))


// * Default Function Values * //
// There may be times when we have args/params in a function that are optional, or maybe it's not optional but the user just failed to input a value, answer a question or whatever, and we want to 'default' back to a set value if we were to receive no input, etc.
// we'll make a very simple division calculator that takes a total and divides by the number of people. In the case that no number is given for the number of people, we'll just default it to 1. This can be done very simple as seen below.
// The default value for a particular parameter is simply assigned after the param, such as is with the 'numPeople' param below:
function divCalculate(totalBill, numPeople = 1) {
    const payEach = totalBill / numPeople
    if (numPeople === 1) {
        return `The total is $${totalBill}. You pay now!`
    } else {
        return `The total is $${totalBill}. Please pay $${payEach} each!`
    }
}
// First we'll assume a bill of $120 and 3 people.
let bill1 = divCalculate(120, 3)
console.log(bill1)
// Here let's assume the bill is $34 and the person didn't enter a second argument for the number of people.
let bill2 = divCalculate(34)
console.log(bill2)
// Above we can see that even though there is only the 1 argument of 34 entered, it defaulted to a value of 1 for the second arg. Mind you, our print statement is now 'sloppy' as it still says 'each' at the end with a value of 1. We can clean that up with an if statement.


// * Arrow Functions * //
// As of ES6, we can now create 'Arrow Functions' which cut down code length and speed up coding itself. In order to do this, we don't create a standard or 'named' function the way we have been, but we created what's called a 'function expression' which is just a way of saying that the function is now tired directly to a variable name and created 'anonymously' (of course it still is referred to as the variable name so it's not actually 'anonymous').
// The basic syntax of an arrow function is seen below, but to further clarify it, we create a variable, and assign to it the *arrow function*. We do this by setting up any parameters required directly after the assignment operator, followed by a 'fat arrow' => and then into curly brackets {} and carry on.
// ? Here we'll make an arrow function to always capitalize a string input.
// we'll just devine a username const. <== not part of function.
const USERNAME = "jacob"

const capitalize = (name) => {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

// clarifying the return statement: we take the 'name' param and to it attach the .charAt(0) method, which says, "take the character at string location 0", and then attach to that the .toUpperCase() method to convert that first character ... to upper case. After that, we continue on with the 'name' param, and attach the .slice(1) method which basically just selects the character in the 1st index (being 'a' in 'jacob'). Since we dont't use a second param in the .slice() method, it just goes from indexPos '1' to the end and write out 'acob' after the first character of 'j' has been capitalized.


// * Arrow Function Shortening/Params */
// If we are writing an arrow function with only one param, we can actually omit the parenthesis () completely, shortening the coding even more, however, be aware that if we add any more than ONE param, we will need the parenthesis back once again and the params separated with a comma (,) as usual. Example:
const yearBorn = age => {
    return 2021 - age
}
console.log(yearBorn(38))

// Example #2:
const addUp = (numberOne, numberTwo, numberThree) => {
    return numberOne + numberTwo + numberThree
}
console.log(addUp(25, 50, 100))


// * Arrow Function - Lose the 'return' & shorten further! * //
// We can actually make arrow functions even more concise! The default 'expectation' of an arrow function is to 'return' the result to the variable the arrow function is assigned too, therefore, we can actually omit the 'return' keyword from arrow functions.
// Alongside that, when we use a function arrow to write, any code after the actual 'fat arrow' is assumed to be part of the function body, which means we actually don't need the curly braces {} either.
// And further still, we are able to write our 'function body' (the code normally inside of the curly braces) on the same line as the initial assignment and have it be a completely acceptable syntax.
// An example:
const priceAfterTax = price => price * 1.13
console.log(priceAfterTax(49.95).toFixed(2))


// * Callback Functions * //
// A callback function is a function that calls on another function. It's kind of like function-ception. This is some pretty confusing stuff at the moment...

// Basic constant with 'jenny'
const username = "jenny"
// We use our capitalize() function to capitalize the first letter.
const upperCase = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

function greetUser(name, callback) {
    return callback(upperCase(name))
}

const result = greetUser(username, name => `Hi there, ${name}`)
// conLog that last function.
console.log(result)


const splitBill = (amount, numberPeople) => `Each person needs to pay ${amount / numberPeople}`