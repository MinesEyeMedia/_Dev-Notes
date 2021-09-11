// TODO: JavaScript Arrays
// We can use JavaScript arrays to store multiple values in a single variable.
// An array is a special variable, which can hold more than one value at a time.
// * Arrays ARE Objects. If we use the 'typeof' method on an array it will return as an object, but JavaScript arrays are still best described as arrays.
// Array items are accessed by using the array index number [0], whereas object values are accessed via .dot notation or bracket notation by the 'key' name.

// * We can have variables of different types within an array. We can have objects, functions and other arrays within an array.

// ? Arrays maintain their order in a static order UNLESS specifically mutated in such as way that makes it dynamic (via methods or manually).

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


// TODO: Accessing Array Elements
// We can access an array element by referring to the index number, however like many things in programming, it's extremely important to remember that the 'first position' in an array is at INDEX 0, not 1, as we would naturally start counting as humans.
// Pulling from the 'introArray2' array above:
const newName = introArray2[2] // this would pull from the THIRD array value
console.log(newName)


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



// TODO: Adding Array Elements
// The easiest way to add a new element to an array is to use the .push() method.
// The .push() method will add the new item to the **END** of the array.
const fruits1 = [
    "Banana",
    "Oranges",
    "Apples",
    "Kiwi"
]
fruits1.push("Tangerine") // will add this item to the array end
console.log(fruits1) // we'll now see "Tangerine" added to the end.