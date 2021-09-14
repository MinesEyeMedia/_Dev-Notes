// TODO: ================================== //
// TODO: Creating New HTML Elements         //
// TODO: ================================== //

// * To add a new element to the HTML DOM, you must CREATE THE ELEMENT (element node) first, and then APPEND it to an EXISTING element.

// ? First let's say we want to create a NEW HTML PARAGRAPH ELEMENT:
const para = document.createElement("p") // note there are no < /> brackets.

// ? To add text to this <p> node, we'll create a text node:
const newNode = document.createTextNode("This will go inside the <p> tag!")

// ? Now we must APPEND this node to the parent we want it appended too:
para.appendChild(newNode) // appends the newNode to the para(graph) node created above.

// ? Finally we must append that entire new node (the <p> node) to a parent itself. First we'll grab the parent:
const containerEl = document.querySelector(".container")
containerEl.appendChild(para) // appends the <p> node to .container node.

// TODO: The insertBefore() Method
// * We now we need to append any newly created node to a parent, and the 'appendChild()' method adds the note specified as the LAST CHILD to the parent referenced, but what if we wanted that newly created element to be at a location OTHER than the LAST CHILD of that parent... consider the following:
// <div class="container">
//      <p class="intro"></p>
//      <p class="body-one"></p>
//      <p class="body-footer"></p>
// </div>
// * What if we wanted a new paragraph element appended between 'body-one' and 'body-footer'? Using append child would place it AFTER 'body-footer'. We can do this with the 'insertBefore()' method.
// grab the container element which is the PARENT.
const containerEl = document.querySelector(".container")

// create the new paragraph element <p>
const newPara = document.createElement("p")
// add a text node to the new para element
const newText = document.createTextNode("Text for the node goes here!")
// append the newText node to the new para element.
newPara.appendChild(newText)

// ? append the newPara node to the master parent node, but we want to specifically select where it is going. The insertBefore() method requires 2 parameters, the actual NEW NODE being appended, and the EXISTING NODE that it will be appended before (slightly confusing at first).
// so for this we will have to 'grab' the 'sibling' node we'll be using in this method, which in the above HTML code would be 'body-footer':
const bodyFooterEl = document.querySelector(".body-footer")
// now we can carry on with the appending to the PARENT NODE
containerEl.insertBefore(newPara, bodyFooterEl) // (newNode, existingChildNode)



// TODO: ================================== //
// TODO: Removing a Child Element/Node      //
// TODO: ================================== //

// * To remove an HTML element, we can simply use the remove() method:
// <div>
//   <p id="p1">This is a paragraph.</p>
//   <p id="p2">This is another paragraph.</p>
// </div>

// ? We'll find the element we want to remove:
const p1El = document.querySelector("#p1")
p1El.remove() // yes, it's actually as simple as that, however...

// * The remove() method does not work in older browsers, see the example below on how to use removeChild() instead.



// TODO: ================================== //
// TODO: Replacing HTML Elements            //
// TODO: ================================== //

// * To replace an element, we can use the replaceChild() method:
// <div class="container">
//   <p id="p1">This is a paragraph.</p>
//   <p id="p2">This is another paragraph.</p>
// </div>

// we'll grab the container AND item to be replaced
const containerEl = document.querySelector(".container")
const p2El = document.querySelector("#p2")

// and now we'll create the elements and append as we have been
const newPara2 = document.createElement("p")
const newText2 = document.createTextNode("New text will go here.")
newPara2.appendChild(newText2)

// ? and now we'll use the replaceChild() method to replace or swap.
// ? this method takes 2 params, one is the new item to replace and the other as one would imagine, is the one being swapped out.
// we've already grabbed the parent and element being swapped above
containerEl.replaceChild(newPara2, p2El) // (newElement, elementToBeReplaced)