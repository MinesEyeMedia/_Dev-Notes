// TODO: ================================== //
// TODO: The DOM Programming Interface      //
// TODO: ================================== //

// * The HTML DOM can be accessed with JavaScript (and with other programming languages).
// * In the DOM, all HTML elements are defined as objects.
// * The programming interface is the properties and methods of each object.
// * A "property" is a value that you can get or set (like changing the content of an HTML element).
// * A "method" is an action you can do (like add or deleting an HTML element).

// * The document object represents our web page.
// * If you want to access any element in an HTML page, you always start with accessing the document object.

// ? For a list of a pretty much ALL event listening triggers:
// ? https://www.w3schools.com/jsref/dom_obj_event.asp


// TODO: ================================== //
// TODO: Finding HTML Elements              //
// TODO: ================================== //

// ? Often, with JavaScript, we want to manipulate HTML elements.
// ? To do so, we have to find the elements first. There are several ways to do this:

document.getElementById("ID-NAME") // <p id="ID-NAME">
document.getElementsByClassName("CLASS-NAME") // <p Class="CLASS-NAME">
document.getElementsByTagName("p") // selects all <p> elements on page

// ? If we want to find all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), we use the querySelectorAll() method.
document.querySelector("p.intro") // finds all <p> tags with class of 'intro'.

// ? It's common convention for sake of ease of use and reusability to store these 'found' elements/classes/id's in a variable (usually const). My personal naming convention is to name the const "elementEl" with 'element' being the name of the HTML item we're storing.
const masterWrapperEl = document.querySelector("#masterWrapper")



// TODO: ================================== //
// TODO: Changing HTML Content              //
// TODO: ================================== //
// ? One of the easiest ways to modify the content of an HTML element is by using the innerHTML property.
document.querySelector(".container").innerHTML = "New HTML Content Here"



// TODO: =================================== //
// TODO: Changing the Value of an Attribute  //
// TODO: =================================== //
document.querySelector(".container").attribute = New_Value



// TODO: ================================== //
// TODO: Changing CSS Content               //
// TODO: ================================== //
// ? Changing HTML Style - To change the style of an HTML element we can use the following to modify it's CSS.
document.querySelector(".container").style.propertyName = New_Style

// * Practical Examples:
document.querySelector(".container").style.display = "none" // display: none
document.querySelector(".container").style.font = "1.125rem"
document.querySelector(".container").style.justifyContent = "center"
document.querySelector(".container").style.marginTop = "0.75em"
document.querySelector(".container").style.visibility = "hidden"