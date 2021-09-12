// TODO: JavaScript Arrays
// We can use JavaScript arrays to store multiple values in a single variable.
// * Arrays ARE Objects. If we use the 'typeof' method on an array it will return as an object, but JavaScript arrays are still best described as arrays.

// ? Array Index Number? !
// Array items are accessed by using the array index number [0], whereas object values are accessed via .dot notation or bracket notation by the 'key' name.

// * We can have variables of different types within an array. We can have objects, functions and other arrays within an array.

// ? Static Order !
// ? Arrays maintain their order in a static order UNLESS specifically mutated in such as way that makes it dynamic (via methods or manually).

// ? Storing Arrays in Const !
// ? A very common convention is to store an array in a const, but this can be a little misleading. An array stored in a const is not an immutable array. Assigning an array to a 'const' does NOT define a constant array. It defines a constant reference to an array.

// * When should we use an object or an array??
// * We should use objects when we want the element names to be strings.
// * We should use arrays when we want the element names to be numbers.
// * Obviously, we should also use an array or object based on what we might want to do with that data and what methods we may wish to utilize in the program/app.

// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
let car1 = "Toyota"
let car2 = "Honda"
let car3 = "Tesla"

// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
// The solution is to use an array.
// An array can hold many values under a single name, and you can access the values by referring to an index number.



// TODO =================================== //
// TODO: Array Creation/Declaration
// It is common convention to store arrays within a const.
// Data within an array is wrapped in SQUARE [] brackets.

// We can write an array on a single line such as the one below:
const introArray = ["Jacob", "Melgine", "Jenny Rose", "Clere"]

// We can also write it on multiple lines for readability purposes:
const introArray2 = [
    "Jacob",
    "Melgine",
    "Jenny Rose",
    "Clere"
]



// TODO =================================== //
// TODO: Accessing Array Elements
// We can access an array element by referring to the index number, however like many things in programming, it's extremely important to remember that the 'first position' in an array is at INDEX 0, not 1, as we would naturally start counting as humans.
// Pulling from the 'introArray2' array above:
const newName = introArray2[2] // this would pull from the THIRD array value
console.log(newName)



// TODO =================================== //
// TODO: Changing an Array Element
// It's extremely simple to change the value or element of a specific array index.
const smallArray1 = [
    "Pizza", "Toast", "Chicken Fingers", "Tandori Chicken Sandwich", "Banana"
]
console.log(smallArray1)
// Above we have array elements with index numbers from 0 - 4 (5 elements)
// If we wanted to change the value in the second element 'Toast' at indexPos1, we could simple do this:
smallArray1[1] = "French Toast"
console.log(smallArray1)


// TODO: Accessing the Full Array
// The full array can be access very simply as we have been doing in the console.log() by using the full array variable storage name:
console.log(smallArray1) // extremely simple



// * ============================== * //
// TODO: Some Very Common Array Methods
// ? ============================== * //


// TODO =================================== //
// TODO: Getting the Length of an Array
// ArrayName.length will return the length of an array in numbers in the way we humans would commonly count. As in, the first position in an array starts at 0 as has been mentioned before, but if we had 0, 1, 2, 3 in an array the array.length method WOULD return 4 items.
const carsArray1 = [
    "Tesla",
    "Honda",
    "Ford",
    "GMC",
    "Toyota",
    "BMW",
    "Audi"
]
console.log(carsArray1.length) // will return 6

// Accessing the first element in an array would be done by referencing the item at indexPos[0] as mentioned above:
console.log(carsArray1[0]) // will return "Tesla"

// If we wanted to access the LAST element in an array, regardless of whether it has 5 items of 500, we could use the .length method and - 1 from it. As we know arrays begin their indexPos at 0, an array length of say 500 would actually mean the last indexPos would be 499, therefore, "array.length - 1" would let us access that last item.
console.log(carsArray1[carsArray1.length - 1]) // will return "Audi"



// TODO =================================== //
// TODO: Adding Array Elements
// ? Adding an element to the END of an Array.
// The easiest way to add a new element to an array is to use the .push() method.
// The .push() method will add the new item to the **END** of the array.
// The .push() method will return the NEW ARRAY LENGTH.
const fruits1 = [
    "Banana",
    "Oranges",
    "Apples",
    "Kiwi"
]
let fruitPush = fruits1.push("Tangerine") // will add this item to the array end
console.log(`The length of this array is now: ${fruitPush}`) // we'll now see "Tangerine" added to the end.

// ? Adding an element to the BEGINNING of an Array.
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements, meaning it 'shifts' down their index number.
// Like .push() the unshift() method returns the NEW ARRAY LENGTH.
const fruits2 = [
    "Robert",
    "Kiwi",
    "Plum",
    "Tangerine",
    "Apricot",
]
let fruitsUnshift = fruits2.unshift()
console.log(`The length of this array is now: ${fruitsUnshift}`)



// TODO =================================== //
// TODO: Removing Array Elements
// ? Removing an element from the END of an Array.
// The .pop() method removes the LAST element from an array.
// The .pop() method will return the value that it 'pops'.
const girlNames = [
    "Sarah",
    "Heather",
    "Julia",
    "Tracy",
    "Lauren",
    "John"
]
let girlNamesPop = girlNames.pop() // will 'pop-off' "John"
console.log(`We just popped-off "${girlNamesPop}" from the array! (Sounds kind of rude, doesn't it?)`)

// ? Removing an element from the BEGINNING of an Array.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method will return the value that it 'shifts'.
const girlNames2 = [
    "Frederick",
    "Sarah",
    "Heather",
    "Julia",
    "Tracy",
    "Lauren",
]
let girlNamesShift = girlNames2.shift() // removes "Frederick" and shifts down the indexPos.
console.log(`We just shifted "${girlNamesShift}" from the array!`)



// TODO =================================== //
// TODO: Searching Arrays
// ? The .includes() method.
// The includes() method returns true if an array contains a specified element, otherwise false. This only works with primitive elements such as strings, numbers or booleans.
const ASMRtists = [
    "Uying",
    "HeatheredEffect",
    "Luna Rexx",
    "Maddy",
    "Wokies"
]
let asmrtistsValue = ASMRtists.includes("HeatheredEffect")
console.log(`Does this Array include "${ASMRtists[1]}"? ${asmrtistsValue}`)

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
// like many powerful array methods, the .some() method requires a function to be passed within it to work properly; and with this function we can provide our conditional check.

// the .some() method, with the function provided will iterate through all of the elements within the object, within the array and if ONE of the values is present, it will return true.
let recordTemp = temperatures.some((temperature) => temperature.isRecordTemp === true) // t/f?
console.log(`Was there a record temperature in the above temperatures? ${recordTemp}`)
// the above method was written using arrow functions for quick and clean code, but until I'm familiar with this, it can be a little confusing to look at.
// to put it simply, as mentioned above, the .some() method requires a function as a parameter to provide the conditional check of what you're looking for. This same thing could have been written as a standard named function and passed into the .some() method.
// Another example below, using a slightly more verbose method.
let recordTemp2 = temperatures.some(highHumidity)

function highHumidity(humid) {
    return humid.humidity >= 65
}
console.log(`Was there high humidity on any of the days? ${recordTemp2}`)


// ? The .every() method.
// The every() method returns true if all elements in an array pass a test (provided as a function).
// We'll check the above 'temperatures' array to see if every temperature is above 20 (celsius).
const tempToCheck = 20
const aboveTwenty = temperatures.every((temps) => temps.temp >= tempToCheck)
if (aboveTwenty) {
    console.log(`Yes, the temperature each day above ${tempToCheck}!`)
} else {
    console.log(`No, the temperature each day is NOT above ${tempToCheck}!`)
}



// TODO =================================== //
// TODO: Performing Actions on Chosen Elements of an Array
// ? The .map() method.









// ? The .forEach() method.






// Other Common Array Methods
// .toString()
// .join()
// .splice()
// .slice()
// .concat()