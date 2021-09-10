// TODO: Maps
// Maps are like the brother (or cousin) to Objects.
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// A Map IS classified as an OBJECT, performing a typeof returns 'object'.

// ? Differences between JavaScript Objects and Maps:
// ? Iterable - Maps are fully iterable, Objects are not (without tricks).
// ? Size - Maps have a 'size' property, Objects do not.
// ? Key Type - Object keys must be Strings or Symbols, Maps can take anything.
// ? Key Order - Map keys are ordered by insertion, Object keys are Alphabetized
// ? Defaults - Objects HAVE default keys, Maps do not.


// TODO: Map Creation
// Creating a map is done like most structured data types in JavaScript in that we want to assign it to a variable/const. If we are declaring a string for the key and/or value pair then naturally we will wrap that value in double or single quotes (""). If however we are assigned a non-string data type, we can enter it as we would when assigned that same time to a variable, without quotes.
// When we create a map we need to wrap each key:value pair in a set of square-brackets that then reside in a parent set of square-brackets which THEN reside in a set of parenthesis (). If sounds confusing but it's quite simple as seen below:
const map1 = new Map([
    ["key", "value"]
])

const map2 = new Map([
    [1, 1],
    [true, true]
])



// TODO: Adding or Updating a Key:Value Pair to the Map - .set() method.
// If we wanted to add or 'push' other key:value pairs into our Map we could use the build in Map method '.set'.
const map3 = new Map([
    ["name", "Jacob"],
    ["age", 38],
    [true, true],
    [66, 99]
])
map3.set("key", "value")
console.log([...map3.keys()])



// TODO: To Iterate Through Map Data - .forEach() method.
// To iterate through map data we can use the .forEach() method that takes accepts our own callback function. Usually when a method accepts a function we use an arrow function for simplicity sake.
// The .forEach() method gives the function we pass to it two piece of data that we want. "ForEach" pair in the map we want it's key and value.
const map4 = new Map([
    ["firstName", "Jacob"],
    ["lastName", "Mines"],
    ["country", "Canada"],
    ["city", "Toronto"],
    ["province", "Ontario"],
    ["bloodType", "O-"]
])
// This .forEach() method takes 2 params, first the 'value' and then the 'key', in that specific order to iterate through the values and keys.
map4.forEach((value, key) => {
    console.log(key, value)
})



// TODO: To Get a Value from a Key - .get() method.
// To get a specific value from a key is quite easy with the .get() method.
// We simply attach this method to the desired map and pass the KEY name into the argument field.
// We'll use our 'map4' from above.
// const whatValue = map4.get("country")
console.log(map4.get("country"))



// TODO: To Get the Size of Values in a Map - .size property.
// The .size property simply returns the number of elements in a map.
console.log(map4.size)



// TODO: To Delete a Property within a Map - .delete() method.
// The delete() method removes a Map element.
// If we check the console.log() previously we'll see that the Map contained 6 elements and that bloodType: O- was once a key:value pair, after our .delete() method we can see in the console.log that it was removed.
map4.delete("bloodType")
console.log(map4)



// TODO: Clear All Elements from a Map - .clear() method.
// The clear() method removes all the elements from a Map
// I'm not going to actually run this method as I don't want to clear our example Map but the method is as simple as can be.
// map4.clear()



// TODO: Return True if a Key Exists in a Map - .has() method.
// The has() method returns true if a key exists in a Map.
// Of course we could see how this could be used in many way, specifically conditional statements.
const girlNew = new Map([
    ["herFirstName", "Jenny"],
    ["herMiddleName", "Rose"],
    ["herLastName", "Olais"],
    ["age", 18]
])
if (girlNew.has("herFirstName")) {
    console.log("Yes, the key 'herFirstName' does exist in this map.")
} else {
    console.log("Nope, can't find the key 'herFirstName' in this map...")
}



// TODO: The .key(), .value() and .entries() Methods for Getting Iterables
// The keys() method returns an iterator object with the keys in a Map
// Basically, this method can be utilized within a loop to display the values within a Map.
// Using the 'girlNew' map above.
let girlNewKeys = ""
for (const x of girlNew.keys()) {
    girlNewKeys += x + ", "
}
console.log(girlNewKeys)


// The values() method returns an iterator object with the values in a Map.
// Basically, as with the .keys() method, this method can be utilized within a loop to display the values within a Map.
// Using the 'girlNew' map above.
let girlNewValues = ""
for (const x of girlNew.values()) {
    girlNewValues += x + ", "
}
console.log(girlNewValues)


// The entries() method returns an iterator object with the [key,values] in a Map.
// The entries() method is basically a combination of the .values() and .keys() methods combined to provide an iterable set of key:value pairs.
let girlNewEntries = ""
for (const x of girlNew.entries()) {
    girlNewEntries += x + ", "
}
console.log(girlNewEntries)