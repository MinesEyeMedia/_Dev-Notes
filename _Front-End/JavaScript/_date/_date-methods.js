// TODO: ================================== //
// TODO: JavaScript Date Methods            //
// TODO: ================================== //

console.log(`=============================`)
console.log(`== JavaScript Date Methods ==`)
console.log(`=============================`)

// * When a Date object is created, a number of methods allow you to operate on it.

// * Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond of date objects, using either local time or UTC (universal, or GMT) time.

// TODO: The getTime() Method
// * The getTime() method gets method returns the number of milliseconds since January 1, 1970 00:00:00UTC
const d1 = new Date()
console.log(`Milliseconds passed since January 1st, 1970 00:00:00UTC: ${d1.getTime()}`)

// TODO: The getFullYear() Method
// * The getFullYear() method returns the year of a date as a four digit number:
console.log(`The year is: ${d1.getFullYear()}`)

// TODO: The getMonth() Method
// * The getMonth() method returns the month of a date as a number (0-11):
console.log(`The current month is: ${d1.getMonth()}`)
// we could chain an array with month names to the method to get the actual name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(`The current month is: ${months[d1.getMonth()]}`)

// TODO: The getDate() Method
// * The getDate() method returns the day of a date as a number (1-31):
console.log(`The current day of the month is: ${d1.getDate()}`)

// TODO: The getHours() Method
// * Guess what this does. The getHours() method returns the hours of a date as a number (0-23):
console.log(`The current hour is: ${d1.getHours()}`)

// TODO: The getMinutes() Method
// * Pretty self-explanatory at this point but, the getMinutes() method returns the minutes of a date as a number (0-59):
console.log(`The current minute of the hour is: ${d1.getMinutes()}`)

// TODO: The getSeconds() Method
// * The getSeconds() method returns the seconds of a date as a number (0-59):
console.log(`The current second of the current minute is: ${d1.getSeconds()}`)

// TODO: The getMilliseconds() Method
// * The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
console.log(`The current millisecond (not that anyone cares) is: ${d1.getMilliseconds()}`)

// TODO: The getDay() Method
// * The getDay() method returns the weekday of a date as a number (0-6):
// * Like months and most counting in in JavaScript, the counting starts at 0; and JavaScript considers "SUNDAY" the week's start:
console.log(`The day of the week is: ${d1.getDay()}`)

// again, we can apply the array trick here
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`The day of the week is: ${days[d1.getDay()]}`)


// TODO: UTC Times/Dates
// * If we needed to specifically reference or use UTC/GMT times we could do that but just adding 'getUTC...()' in front of pretty much all of these methods:
// getUTCDate()
// getUTCDay()
// getUTCFullYear()
// getUTCHours()
// getUTCMilliseconds()
// getUTCMinutes()
// getUTCMonth()
// getUTCSeconds()



// TODO: Setting Dates
// * All of the above methods (except the UTC ones) have a 'set' counterpart. I'm not going to write out each one but they basically just do the same thing, however, instead of 'getting' the date, they obviously 'set' a specific date.