// TODO ==================================== //
// TODO: JSON String - The .string() Method  //
// TODO ==================================== //

// * A common use of JSON is to exchange data to/from a web server.
// * When sending data to a web server, the data has to be a string.
// * Convert a JavaScript object into a string with JSON.stringify().

// Imagine we have this object in JavaScript:
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};
// we can easily turn that into a string with the .stringify() method.
const myJSON = JSON.stringify(obj);

// This principal works the exact same if we were to try converting a JavaScript array.
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);


// ! Exceptions!
// ? Just like with parsing a string, neither dates nor functions are 'allowed'.
// * Any date (JavaScript date object), will be converted into a string.
// * The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value.

// ! If you send functions using JSON, the functions will lose their scope, and the receiver would have to use eval() to convert them back into functions.