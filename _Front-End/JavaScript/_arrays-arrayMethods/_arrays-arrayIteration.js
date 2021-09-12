// TODO =================================== //
// TODO: JavaScript Array Iteration
// ? Array iteration methods operate on every array item.

// * * *
console.log("==================================")
console.log("=== JAVASCRIPT ARRAY ITERATION ===")
console.log("==================================")
// * * *

// TODO: The .forEach() Method
// ? The forEach() method calls a function (a callback function) once for each array element it loops through. Within this functions we apply what we'd like done to the array.
const names = [
    "Jacob",
    "Mary",
    "Jennifer",
    "John",
    "Heather"
]

let print = ""
names.forEach(printOut)

function printOut(value) {
    print += value + ", "
}
console.log(print)



// TODO: The .map() Method
// ? The map() method creates a new array by performing a function on each array element.
// ? The map() method does not execute the function for array elements without values.
// ? The map() method does not change the original array.
const numberSetOne = [
    10,
    25,
    32,
    48,
    66
]

// * We'll use the .map() method to multiply each value in the array by 2.
// The longer way to do it, but better to understand what's going on.
// const newNumberSetOne = numberSetOne.map(multi)
// function multi(num) {
//     return num * 2
// }

// The same utilization of the .map() method using an arrow function.
let newNumberSetOne = numberSetOne.map(num => num * 2)
console.log(newNumberSetOne)



// TODO: The .includes() Method
// ? The includes() method returns true if an array contains a specified element, otherwise false. This only works with primitive elements such as strings, numbers or booleans.
const ASMRtists = [
    "Uying",
    "HeatheredEffect",
    "Luna Rexx",
    "Maddy",
    "Wokies"
]
let asmrtistsValue = ASMRtists.includes("HeatheredEffect")
console.log(`Does this Array include "${ASMRtists[1]}"? ${asmrtistsValue}`)



// TODO: The .some() Method
// The some() method check if SOME array values pass a test.
// If we wanted to check an array containing Objects to see if one or more elements meets a given condition, we can use the .some() method.
// Imagine we have the follow array that contains the following objects.
const temperatures = [{
        temp: 28,
        humidity: 42,
        isRecordTemp: false
    },
    {
        temp: 25,
        humidity: 37,
        isRecordTemp: false
    },
    {
        temp: 33,
        humidity: 67,
        isRecordTemp: true
    },
    {
        temp: 27,
        humidity: 40,
        isRecordTemp: false
    }
]

// the .some() method requires a function to be passed within it to work properly; and with this function we can provide our conditional check.

// the .some() method, with the function provided will iterate through all of the elements within the object, within the array and if ONE of the values is present, it will return true.
// using the 'temperatures' array from above:
let recordTemp = temperatures.some((temperature) => temperature.isRecordTemp === true) // does this array contain a value of 'TRUE' for 'isRecordtemp'?

console.log(`Was there a record temperature in the above temperatures? ${recordTemp}`)

// Another example below, using a named function.
let recordTemp2 = temperatures.some(highHumidity)

function highHumidity(humid) {
    return humid.humidity >= 65
}
console.log(`Was there high humidity on any of the days? ${recordTemp2}`)



// TODO: The .every() Method
// The every() method returns true if ALL VALUES in an array pass a test (provided as a function).
// We'll check the above 'temperatures' array again to see if every temperature is greater than or equal to 20.
const tempToCheck = 20
const aboveTwenty = temperatures.every((temps) => temps.temp >= tempToCheck)
if (aboveTwenty) {
    console.log(`Yes, the temperature each day above ${tempToCheck}!`)
} else {
    console.log(`No, the temperature each day is NOT above ${tempToCheck}!`)
}



// TODO: The .indexOf() Method
// The indexOf() method searches an array for an element value and returns its position (index) in the array. Always note that arrays start at 0.
// The .indexOf() method will return "-1" if the search param isn't found.
// If the item is present more than once, it returns the position of the first occurrence.
const teslaModels = [
    "Model S",
    "Model Y",
    "Model X",
    "Model 3",
    "Cybertruck"
]
let whereModelY = teslaModels.indexOf("Model Y")
console.log(`Where is the indexPos of 'Model Y': ${whereModelY}`)



// TODO: The .lastIndexOf() Method
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
const guyNames = [
    "Jacob",
    "Mike",
    "Thomas",
    "Mitch",
    "Chris",
    "Jacob"
]
let whereLastJacob = guyNames.lastIndexOf("Jacob")
console.log(`Where is the indexPos of the LAST occurrence of "Jacob": ${whereLastJacob}`)




// TODO: The .find() Method
// TODO: The .findIndex() Method





// TODO: The .filter() Method

// TODO: The .reduce() Method
// TODO: The .reduceRight() Method

// TODO: The .from() Method
// TODO: The .keys() Method