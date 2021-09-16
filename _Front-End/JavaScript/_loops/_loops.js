// TODO: ======================================= //
// TODO: JavaScript Loops (for, forOf, doWhile)  //
// TODO: ======================================= //

console.log(`============================================`)
console.log(`== JavaScript Loops (for, forOf, doWhile) ==`)
console.log(`============================================`)

// * Loops are handy, if you want to run the same code over and over again, each time with a different value.
// * Often this is the case when working with arrays.

// * JavaScript supports different kinds of loops:

// *  for - loops through a block of code a number of times.
// *  for/in - loops through the properties of an object.
// *  for/of - loops through the values of an iterable object.
// *  while - loops through a block of code while a specified condition is true.
// *  do/while - loops through the block of code ONCE and continues to loop     while a specified condition is true.
// *  .forEach() [array method] - this array specific method calls a function once for each array item.


// TODO: The 'for' Loop
// * As mentioned above, the 'for' loops will run through the loop x number of times, as set by the coder.
let names = ["Jacob", "Melgine", "Ares", "Eros", "Ame", "Uying", "Heather", "Luna", "Ginger", "Amy"]

console.log(`For Loop #1`)
for (let i = 0; i < 10; i++) {
    // do this code here while the loop runs
    console.log(`Number: ${i}`)
}

console.log() // space-maker 3000
console.log(`For Loop #2`)
for (let i = 0; i < names.length; i++) {
    // do this code here while the loop runs
    console.log(names[i])
}

console.log() // space-maker 3000

// TODO: The 'for in' Loop
// * The 'for in' statement loops through the properties of an Object.

const car = {
    make: "Tesla",
    model: "Model 3",
    awd: false,
    aiApUpgrade: true,
    msrp: 62000,
    taxIncentive: true,
    released: true
}

console.log(`'For In' Loop`)
for (let key in car) {
    console.log(`Car Object Key:Values - ${key} : ${car[key]}`)
}

console.log() // space-maker 3000

// TODO: The 'for of' Loop
// * The 'for of' statement loops through the values of an iterable object.
// * It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// ? We'll pull from our 'names' array above.
// an array loop
console.log(`'For Of' Loop (On Array Items)`)

for (let name of names) {
    console.log(`Here is a name: ${name}`)
}

console.log()

// TODO: The 'While' Loop
// * The 'while' loop loops through a block of code as long as a specified condition is true.
// the syntax
// while(condition) {
// run code in here
// }

// * If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
console.log(`'While' Loop (Counting to 10)`)

// an actual example:
let i = 0
let text = ""

while (i < 10) {
    text += console.log(`The number is: ${i}`)
    i++

}

console.log()

// TODO: The 'Do/While' Loop
// * The 'do/while' loop is a variant of the 'while' loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// the syntax
// do {
//    code block to be executed
//  }
//  while (condition);
console.log(`'Do/While' Loop (Counting to 10)`)
let text2 = ""
let i2 = 0

do {
    console.log(`The number is: ${i2}`)
    i2++;
}
while (i2 < 10);