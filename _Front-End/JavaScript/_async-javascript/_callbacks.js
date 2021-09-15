// TODO: ================================ //
// TODO: JavaScript Callbacks             //
// TODO: ================================ //

console.log(`======================================`)
console.log(`== JavaScript Callbacks             ==`)
console.log(`======================================`)

// * A callback is a function passed as an argument to another function.
// * This technique allows a function to call another function.
// * A callback function can run after another function has finished.

// TODO: When should we use a callback?
// ? The examples below are incredibly simplified for demonstration purposes. Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).


// ? Let's imagine we wanted to create a simple calculator function and then have it displayed somewhere separately by another function. For the sake of simplicity w'ell use console.log() as the 'display':
function myCalcAdd(num1, num2) {
    let sum = num1 + num2
    return sum
}

function displayIt(disp) {
    console.log(`The result is: ${disp}`)
}

let result = myCalcAdd(5, 5)
displayIt(result)

// ? Or, we could put the 'displayIt()' function within the 'myCalcAdd2()' function itself to call on running the calc function:
function myCalcAdd2(num3, num4) {
    let sum2 = num3 + num4
    displayIt(sum2)
}
myCalcAdd2(10, 10)

// * The problem with the first example above, is that you have to call two functions to display the result.

// * The problem with the second example, is that you cannot prevent the calculator function from displaying the result.

// * ! For something like this, it's best we use the JavaScrip 'callback':
// * Again, a callback is a function passed as an argument in another function.
// ? Using a callback, we could call the calculator function (mycalcMulti1) with a callback, and let the calculator function run the callback after the calculation is finished:
function mycalcMult1(num5, num6, displayIt2) {
    let multSum = num5 * num6
    displayIt2(multSum)
}

function displayIt2(display) {
    console.log(`The total is: ${display}`)
}

mycalcMult1(20, 30, displayIt2) // when we pass a function as an argument, we don't use the parenthesis() after the function name.