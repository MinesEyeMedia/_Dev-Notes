// TODO =================================== //
// TODO: JSON Parse - The .parse() Method   //
// TODO =================================== //

// * A common use of JSON is to exchange data to/from a web server.
// * When receiving data from a web server, the data is always a string.
// * Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// For example, if we retrieved JSON data from a sever, it would most likely look like this, which is a string:
'{"name":"John", "age":30, "city":"New York"}'

// * We would use the JavaScript function JSON.parse(), passing the string to be to converted into a JavaScript object, like so:
const objectToBeParsed = JSON.parse('{"name":"John", "age":30, "city":"New York"}') // if we con'logged this we would see it is now an object.


// ! Exceptions!
// ? Parsing Dates
// Date objects are not allowed in JSON.
// If you need to include a date, write it as a string.
// You can convert it back into a date object later.
// As an example:
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);


// ? Parsing Functions
// Just like Dates, Functions are not allowed in JSON.
// If you need to include a function, write it as a string.
// You can convert it back into a function later.
// As an example:
const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

// ! We should avoid using functions in JSON, the functions will lose their scope, and we would have to use eval() to convert them back into functions.