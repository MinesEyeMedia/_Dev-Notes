// TODO: ================================ //
// TODO: JavaScript Fetch API             //
// TODO: ================================ //

console.log(`======================================`)
console.log(`== JavaScript Fetch API             ==`)
console.log(`======================================`)

// * The Fetch API interface allows web browser to make HTTP requests to web servers.

// ? Fetch API Syntax (this will fetch the file and display the content):
fetch("urlGoesHere")
    .then(x => x.text())
    .then(y => myDisplay(y))

// * Since Fetch is based on async and await, the example above might be easier to understand like this:
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    myDisplay(myText);
}