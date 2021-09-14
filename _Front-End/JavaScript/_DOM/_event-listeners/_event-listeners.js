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


// TODO: ================================== //
// TODO: The 'addEventListener' Method      //
// TODO: ================================== //
// * The addEventListener() method attaches an event handler to the specified element.
// * We can add many event handlers to one element.
// * We can add many event handlers of the same type to one element, i.e two "click" events.
// * We can add event listeners to any DOM object not only HTML elements. i.e the window object.
// * When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
// * We can easily remove an event listener by using the removeEventListener() method.

// ? The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// ? The second parameter is the function we want to call when the event occurs.
// ? The actual syntax:
const btnEl = document.querySelector(".btn")
btnEl.addEventListener("click", myFunction())

// ? We can add *multiple* events to the same element:
btnEl.addEventListener("click", sexyFunction())
btnEl.addEventListener("click", sexyFunctionTwo())

// ? We can add *different* events to the same element as well:
btnEl.addEventListener("mouseover", mouseOverFunc())
btnEl.addEventListener("click", sexyClickFunc())
btnEl.addEventListener("mouseout", mouseOutFunc())

// TODO: The 'removeEventHandler()' Method
// * The removeEventListener() method removes event handlers that have been attached with the addEventListener() method. This might be useful in certain situations where you no longer want the event to fire a second time after the first firing or after certain parameters.
btnEl.removeEventListener("click", myGoneFunction())