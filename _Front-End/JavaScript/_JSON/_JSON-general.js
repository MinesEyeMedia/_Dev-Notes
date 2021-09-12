// TODO =================================== //
// TODO: JSON (JavaScript Object Notation)  //
// TODO =================================== //


// ? What is JSON?
// * JSON stands for JavaScript Object Notation and is a lightweight data-interchange format used to send data between computers.
// * JSON is language independent.
// * The JSON syntax is derived from JavaScript object notation, but the JSON format is text only.
// * Code for reading and generating JSON exists in many programming languages.
// * It is a common mistake to call a JSON object literal "a JSON object".
// * JSON cannot be an object. JSON is a string format.
// * The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.


// ? Why Use JSON?
// * The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

// * Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

// * JavaScript has a built in function for converting JSON strings into JavaScript objects:
JSON.parse()

// * JavaScript also has a built in function for converting an object into a JSON string:
JSON.stringify()


// * With JSON we can receive pure text from a server and use it as a JavaScript object.
// * We can send a JavaScript object to a server in pure text format.
// * We can work with data as JavaScript objects, with no complicated parsing and translations.


// TODO: JSON Syntax Rules
// * The JSON syntax is derived from JavaScript object notation syntax:

// * Data is in name/value pairs.
// * Data is separated by commas.
// * Curly braces hold objects.
// * Square brackets hold arrays.


// TODO: Writing JSON
// * The JSON format is almost identical to JavaScript objects.
// ! In JSON, BOTH KEYS and VALUES MUST be strings, written with double quotes:
// * {
// *    "name": "Jacob",
// * }

// ? In JavaScript, keys/values can be strings, numbers, or identifier names.
// ? The key does not require quotes of any kind and the value can use single ('') or double ("") quotes (again, JSON can not).
// * {
// *    name: "John"
// * }


// ? In JSON, values must be one of the following data types:

// *  a string
// *  a number
// *  an object
// *  an array
// *  a boolean
// *  null

// ? In JavaScript values can be all of the above, plus any other valid JavaScript expression, including:

// *  a function
// *  a date
// *  undefined


// TODO: JSON Syntax Examples
// a string:
// {
//     "name": "Jacob"
// }

// a number
// {
//     "age": 38
// }

// an object - Objects as values in JSON must follow the JSON syntax.
// {
//     "employee": {
//         "name": "John",
//         "age": 30,
//         "city": "New York"
//     }
// }

// an array
// {
//     "employees": ["John", "Anna", "Peter"]
// }

// a boolean
// {
//     "sale": true
// }

// a null value
// {
//     "middlename": null
// }