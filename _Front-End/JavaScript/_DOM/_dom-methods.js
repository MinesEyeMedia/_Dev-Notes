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



// TODO: ================================== //
// TODO: JavaScript Events                  //
// TODO: ================================== //
// ? JavaScript can be executed when an event occurs, like when a user clicks on an HTML element, but there are dozens and dozens of 'triggers' we can set for the event to 'listen too'.
// ? We can have a button click trigger a JavaScript function, or any piece of code we could want.
// * We have several ways of 'triggering' these events.
// * With 'onclicks' and with actual 'Event Listeners'

// TODO: The 'onclick' Event
// A simple onclick is tied directly to the HTML element on the HTML page.
// It could be something simple as this:
// * <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

// Another simple example of an 'onclick' that calls a function either in an inline script or ideally separate JavaScript file called 'crazyFunction()'.
// * <button id="button" onclick="crazyFunction()">Click Me!</button>

// TODO: The 'onload' & 'onunload' Events
// * The 'onload' and 'onunload' events are triggered when the user enters or leaves the page.
// The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
// The onload and onunload events can be used to deal with cookies.
// * <body onload="checkCookies()">

// TODO: The 'onchange' Event
// * The 'onchange' event is often used in combination with validation of input fields.
// The upperCase() function will be called when a user changes the content of an input field.
// * <input type="text" id="fname" onchange="upperCase()">

// TODO: The 'onmouseover' and 'onmouseout' Events
// * The 'onmouseover' and 'onmouseout' events can be used to trigger a function when the user mouses over, or out of, an HTML element.
// * <div class="card-title" onmouseover="mouseOver()" onmouseout="mouseOut()">

// TODO: The 'onmousedown', 'onmouseup' and 'onclick' Events
// * The 'onmousedown', 'onmouseup', and 'onclick' events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.
// a simple onmousedown & onmouseup event tie-in.
// * <h1 class="title" onmousedown="mouseDown()" onmouseup="mouseUp()"

// an 'onclick' event, as seen earlier on this page.
// * <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

// TODO: The 'onfocus' Event
// A common use of the 'onfocus' event is to tie it to an input field to give a visual notification or just aesthetic change when the user 'focuses' on the input field.
// * <input type="text" onfocus="myFunction()">

