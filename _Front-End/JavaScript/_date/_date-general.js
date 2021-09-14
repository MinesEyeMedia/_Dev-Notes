// TODO: ================================== //
// TODO: The JavaScript Date & Methods      //
// TODO: ================================== //

console.log(`=========================================`)
console.log(`== TODO: The JavaScript Date & Methods ==`)
console.log(`=========================================`)

// * Date objects are created with the new Date() constructor.

// * JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated). It does this because... ¯\_(ツ)_/¯

// * There are 4 ways to create a new date object:

// ? new Date() creates a new date object with the current date and time:
const dateOne = new Date()
console.log(dateOne)


// ? new Date(year, month, ...) creates a new date object with a specified date and time.
// ? 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order).
// ? JavaScript counts months from 0 - 11. January = 0, December = 11:
const dateTwo = new Date(2021, 02, 20, 08, 24, 36, 325)
console.log(dateTwo)

// * However, for this method, we don't *have* to use all 7 date parameters.
// * 6 numbers = year, month, day, hour, minute, second.
// * 5 numbers = year, month, day, hour, minute.
// * 4 numbers = year, month, day, hour.
// * 3 numbers = year, month day.
// * 2 numbers = year, month.
// * Note: You cannot omit the month; if only one parameter is supposed it is considered as milliseconds.

// * One and two digit years will be interpreted as 19xx:
const dateThree = new Date(84, 05, 22) // 1984, June 22.
console.log(dateThree)


// ? new Date(milliseconds) creates a new date object as zero time plus milliseconds
// new Date(milliseconds)
const dateFour = new Date(5854656541432)
console.log(dateFour)
// * For Reference: One day (24 hours) is 86 400 000 milliseconds.