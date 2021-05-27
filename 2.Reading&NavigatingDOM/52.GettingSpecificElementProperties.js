/*
You now know how to access elements in the DOM tree in a multitude of ways, such as:
*/

/* Using their tag name */
/* Using their class or id */
/* Through their parents, children and siblings */

/*
Once you've accessed the element you want, you can do almost anything you want to manipulate it.
*/

/* The HTML DOM Element Object is like any other object in JavaScript.*/

/*
It has properties and methods and can be created, read, updated and deleted. Since JavaScript is used to manipulate and modify the DOM, you should know how to access common element properties in order to change the elements in the ways you want. Some commonly used element properties are listed below:
*/

/*
Name----------Description
tagName	      A string representing the tag name of the element, such as P, DIV or H1
id            The value of the id attribute on the element, as a string
className	    The value of the class attribute on the element, as a string
classList	    The list of classes in the class attribute as an array-like structure which can be iterated

attributes	  A NamedNodeMap of all the element's attributes and their values. It can be iterated

clientHeight	A Number representing the inner height of the element
clientWidth	  A Number representing the inner width of the element
innerHTML	    The content inside the element including HTML markup
outerHTML	    Same as innerHTML, except it includes the element itself as well
*/

/*
All of these properties can be accessed using dot notation. Many of them are mutable and thus can be used to modify the element in whatever way you wish. If the property is not mutable, you can make a copy of it, delete the element and create a new one after modifying the copy and the user will be none the wiser. A runnable example below demonstrates how you can access these properties. As always, make sure you review both the JavaScript and the HTML, and for a complete list, see the MDN Website:
*/

// Get the main box
let box = document.getElementById('main-box');

// All the box's content
console.log(box.innerHTML);

// You can use window.getComputedStyle and pass it an element to get that element's styles as a list of key/value pairs
console.log("The box's shadow:", window.getComputedStyle(box).boxShadow);
console.log("The box's border", window.getComputedStyle(box).border);
console.log("The box's border radius", window.getComputedStyle(box).borderRadius);

// The box's height and width
console.log('Box height is:', box.clientHeight);
console.log('Box width is:', box.clientWidth);

// The main heading
let heading = box.children[0];

// The heading's classes
console.log(heading.classList);

// The input box
let username = document.getElementById('username-input');

// All the input's attributes
console.log(username.attributes);

// To get their name/value, we must iterate
let attrs = username.attributes;
for (let i = 0; i < attrs.length; i++) {
  console.log('Attr name:', attrs[i].name, '- Attr value:', attrs[i].value);
}