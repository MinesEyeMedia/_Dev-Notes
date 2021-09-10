// * JavaScript Objects * //
// An object is a datatype that allows us to create key:value pairs to hold and retrieve data stored with an object 'literal'.
// The actual 'key' in a key:value pair is always as string, but the associated value can be any data type. It could be another string, number, boolean or an array. It could also be a function, containing anything you could put in a function, such as a conditional, loop, etc., or they could even be another object stored within the parent object. We call this "object-ception" (Nobody actually call it that... I call it that.)

// Objects must have a reference point, something to refer to them as. We do this by assigning them to a variable with a name we can later use to call on the object or any of it's key:value pairs, or a method().
// Note that the functions created within an object can be a standard named function, or they could be an arrow function. A function inside of an object is called a METHOD.
// ? Interesting note: Object key:value pairs are NOT stored in the order they are inserted when iterated through as an array. They are in fact alphabetized. Maps however DO retain their original or insertion/added order. Which is something to be aware of if that aspect is required.

// The basic syntax to create an object is as follows:
const tutorialObject = {
    key1: "value1",
    key2: "value2",
    key3: {
        key4: "value4",
        key5: 22,
        key6: true,
        key7: {
            key8: "double-object-ception",
            key9: 44
        }
    },
    functionName1(param1, param2) {
        return param1 + param2
    }
}


// An example of an object with more realistic data:
let userCodeMaster = {
    firstName: "Jacob",
    lastName: "Mines",
    age: 38,
    maritalStatus: "Married",
    city: "Toronto",
    province: "Ontario",
    country: "Canada",
    spouseName: "Melgine"
}


// We can also set the 'value' in the key:value pair to take a variable.
let country1 = "England"
let country2 = "Norway"

const countriesOne = {
    country1: country1,
    country2: country2
}

// ? Object key:value shorthand - if we happen to want the key & value we're going to declare in our object to have the same name (as seen above), we can use the 'shorthand' and skip the writing of both the key:value and simply use the ONE variable reference name. See below:
let country3 = "Canada"
let country4 = "Brazil"
const countriesTwo = {
    // country3: country3,
    // country4: country4
    country3,
    country4
}



// TODO: Accessing Object Properties
// We can use 'dot(.) notation' or 'bracket [] notation'
// I personally prefer dot(.) notation, but bracket notation has it's uses.

// * Dot Notation
// for this method we use the object name 'person' followed by a dot(.) and the property.
// objectName.propertyName
let userFirstName = userCodeMaster.firstName
console.log(userFirstName)

// * Bracket Notation
// for this method we use square brackets [] such as when creating an array.
// objectName["propertyName"] <== notice the quotes wrapping the property name.
let userLastName = userCodeMaster["lastName"]
console.log(userLastName)



// TODO: Object Methods
// an object method is a function stored within an object.
// note: we can't use arrow functions to define an object property.
let theWife = {
    firstName: "Melgine",
    lastName: "Olais",
    age: 35,
    maritalStatus: "Married",
    city: "Cebu City",
    province: "Cebu",
    country: "Philippines",
    spouseName: "Jacob",
    birthYear: function () {
        return 2021 - this.age
    },
    marriedName: function () {
        return `${theWife.firstName} ${userCodeMaster.lastName}`
    }
}
console.log(theWife.birthYear())
console.log(theWife.marriedName())



// TODO: Adding or Changing Object Properties
// A new sample object with 3 key:value pairs.
let teenageGirl = {
    fistName: "Clere",
    lastName: "Naquines",
    age: 17
}

// we can add a new key:value by simply using the object name, followed by dot notation and the new KEY we want, then using the assignment operator (=) we can assign the actual value we would like.
// this next line creates the new key 'highschoolYear' in the 'teenageGirl' object and assigns the value of '12' to it.
teenageGirl.highschoolYear = 12
console.log(teenageGirl)
// suppose we made a mistake or wanted to update the value in this key, it's as simple as just re-assigning it with the correct value, as seen below:
teenageGirl.highschoolYear = 11
console.log(`Clere is in year ${teenageGirl.highschoolYear} of highschool.`)
// The above dot (.) notation works great if we're working with static values. That is, if we know the key-name or value we wish to update too ahead of time. Most of the time, dot notation is the easiest way to GET or MODIFY values.
// ================== //
// However, what if we wanted to update a key, value or key:value pair dynamically, that is, something pulled from a variable? Or, another possible desire would be to create a key made up of a string with a space in it (for whatever reason that might be)? Well, in that case the best thing to do is to use bracket [] notation, as seen below.
// We'll continue with our teenageGirl object and add a "dynamic" key:value pair, as well as a key with a space in the name.
const sem1Grade = 82
const sem2Grade = 85
teenageGirl["Year Grade Average"] = (sem1Grade + sem2Grade) / 2
console.log(teenageGirl)

// It should also be noted that these dynamic key:value pairs referenced via variables can also be directly written into an object at the time of creation also using (square) bracket [] notation:
const color = "green"
const hexCode = "#0F0"

const colors = {
    [color]: hexCode
}
// It should ALSO be noted that we MUST USE BRACKET NOTATION [] when accessing these dynamically injected keys, values or key:value pairs. See below:
console.log(colors[color])



// TODO: Deleting Object Properties
// If we wanted to remove a key:value pair from our obj we would use the DELETE keyword before the object name.
// Just like adding or updating a dynamic key, value or pair, we have to use bracket [] notation IF that key:value was dynamic. If it was/is not a dynamically updated key, value or pair, then dot(.) notation will work perfectly fine. Let's see an example:
const network = "HBO"
const tvShow = "Boardwalk Empire"
const greatTVShows = {
    Hulu: "Solar Opposites",
    "Adult Swim": "Rick & Morty",
    [network]: tvShow,
    CBC: "Star Trek: Picard"
}
// simple conLog
console.log(greatTVShows)
// let's remove the dynamic network:tvShow key:value (despite Boardwalk Empire being an amazing show)
delete greatTVShows[network]
console.log(greatTVShows)
// now let's remove the last key:value pair, CBC:Star Trek: Picard
delete greatTVShows.CBC
console.log(greatTVShows)



// TODO: Object Destructuring
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. - MDN
// Let's say we have the following object, and we want to repeatedly reference values within this object in a function. We know we can use dot(.) notation to access these properties, but we would have to pass the object name 'userData' every single time we wanted to reference these properties using their respective key:value pair.
// We can use Destructuring to, as the MDN quote above says, "to unpack values from arrays, or properties from objects into distinct variables."
// This way, we basically create a pseudo-variable that we can reference much quicker and simpler.
const userData = {
    firstName: "Ame",
    lastName: "Olais",
    username: "AmeOlais",
    email: "jessa97@gmail.com",
    details: {
        jobTitle: "Online English Teacher",
        worksFulltime: true
    }
}

// If we wanted to 'destructure' the properties, 'username' and 'email' we can do that by creating a variable (const/let) and then wrapping the properties we want destructured in curly braces {} then assigning them to the object name. This basically created a pseudo-variable that is 'tied' or 'attached' that is referencing the object name itself, and JavaScript knows we're wanting to pull or destructure these two properties that are under the specific object name.
const {
    username,
    email
} = userData
console.log(`This username for this user is: ${username}.`)
console.log(`The email address for this user is: ${email}`)

// If we wanted to destructure a value property that was nested within another object (seen below), we could do that as seen below:
// a new object for explanation purposes.
const truck = {
    make: "Ford",
    model: "F150",
    year: 2021,
    awd: true,
    pricing: {
        MSRP: 74800,
        employeeDiscount: 20,
        xmasSale: 6500,
        freight: 2500
    }
}
// in this example we'll assume we want to destructure the make, model, year, MSRP, freight & xmasSale properties.
const {
    make,
    model,
    year,
    pricing: {
        MSRP,
        freight,
        xmasSale
    }
} = truck
console.log(`This Christmas the all new ${year} ${make} ${model} will be on sale with $${xmasSale} off the MSRP price of $${MSRP}. Taxes extra, see store for details. Freight charge of $${freight} extra.`)



// TODO: The Object Spread Operator
// The 'spread operator' is a special operator that was added in ES2018 that lets us take specific object properties (key:value pairs), or even all properties of an existing object and places them in a new object. This has certain use cases and we'll see how we can do that in the example below.
// Imagine we had an object with a basic key:value setup for a traditional user profile that might be collected during a signup process.
const userProfile = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""
}
// and let's say we have a user sign up and only fill in the required fields from the above (assuming not all fields are required) and we take THAT new user data and put it in a new object called "newUser". We then want to update the original object with the data from the new object, while also including the key:value pairs that the user DIDN'T fill out, and possibly add additional key:value pairs as well. We could do that with the spread operator as such:
const newUserProfile = {
    username: "JacobMines",
    email: "jacobmines@protonmail.com",
    password: "mypassword"
}
// imagining that the user only filled out those 3 required fields, we now want to add those 3 key:value pairs to the original userProfile WHILE STILL maintaining (not-mutating) the original object.
// we first create a new object to store this data in.
// the first parameter in the object is the original object key:value sets.
// the second parameter is the key:value pairs that were just collected.
// the third value just demonstrates that we can add 'on the fly' a new key:value pair to the new object upon creation at the same time.
// ? if we were to just leave it at this, then we would in fact be creating a new object named 'createdUser' with a mix of both the original 'userProfile' key:values as well as the collected key:value data from 'newUserProfile' (+ the new verified:true key:value set), BUT in doing so, we would be nesting the user and newUserProfile objects in this new object seeing as they're already objects.
// * to circumvent this, we use the spread operator (...) IN FRONT of the objects being injected.
const createdUser = {
    ...userProfile,
    ...newUserProfile,
    verified: true
}
console.log(createdUser)
// and we can see this works perfectly on view of the console.log()
// * note: the key:value pairs that are being 'overwritten/mixed' for lack of a better term between 'userProfile' and 'newUserProfile' must be identical in order to 'overwrite' the 'blank' or 'old' key:value pairs, otherwise new key:values will just be created alongside the other key:value pairs, as one would expect.