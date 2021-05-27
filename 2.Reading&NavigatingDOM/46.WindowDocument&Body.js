/*
The core of your ability to use JavaScript to interact with the browser and thus HTML documents lies in three high-level objects:
*/

/* window: The global window object which represents the browser window */
/* document: The document containing the HTML document, which lives inside the window */
/* document.body: The body of the HTML document */

/*
With these three objects you can access any element in the entire browser window with JavaScript, from the address bar at the top to the status bar at the bottom of the page, every HTML element in the document and plenty of other useful things.

The three items above can be thought of as the top of the DOM tree. Hierarchically, the window is the parent of everything and represents the browser window. The document lives inside the window, and the body is a property of the document, representing the <body> element of the HTML document. All three of these objects have a number of useful methods and properties with which JavaScript can interact. In fact, in the previous lesson you saw two units where the example given updated a <span> element with the number of seconds since the user loaded the page. You might have noticed that in the JavaScript code we accessed the <span> element using the document:

let timerElement = document.getElementById('timer');

Here, the document.getElementById() method was used to access the specific span element we wanted, based on its id attribute, which was timer. The window object also has a number of useful methods and properties like this, such as:
*/

console.log(window.document);     // The document object in the example above
console.log(window.history);      // A reference to the window's history (i.e. browser history)
console.log(window.innerWidth); 
console.log(window.innerHeight);  // The inner size of the current window including the scrollbars but not including menu bars

console.log(window.outerWidth);
console.log(window.outerHeight);  // The outer size of the current window including menu bars

console.log(window.location);     // A getter/setter for the current URL
console.log(window.localStorage); // A storage medium for storing data the user might need for the page to function properly, such as cookies.

/*
It's not important that you know every single method of the document, window and body. What's more important is to understand that they are your access point for everything you will ever need to do to make JavaScript interact with your websites. You'll learn many different ways to use these objects in the upcoming lessons. Try popping the runnable example below out into a new window and experimenting with changing the window size, the browser size, and adjusting the various functions and properties that are being used. For a complete reference to the objects in this unit, see the following resources:

Window
Document
Body

*/