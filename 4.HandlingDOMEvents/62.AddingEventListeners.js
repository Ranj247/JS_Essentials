/*
Up to this point all the listeners you've created to listen for JavaScript events have been created via HTML attributes such as onclick, onchange and so on. These event listeners work just fine, but they can make your code messy and verbose when you've got a lot of them. Fortunately as with most things in code, when things become too verbose it's indicative that there's a better way. This time, the better way is through the use of event listeners.
*/

/*
An event listener sets up a function that will be called whenever the specified event, such as an input change, a click, a mouse movement, a keypress or other such event is delivered to the target. 

The target in this context is anything that supports events, but commonly will be something like an HTML element, the document or the window. 

Event listeners allow you to remove those verbose HTML attributes and instead put all the functionality in JavaScript. This is good for separation of concerns too, since even though JavaScript and HTML go hand in hand, their code should still be as segregated as possible to limit complexity and increase maintainability.
*/

/* ---------To add an event listener to an object you need three things:-------*/

/*
1) The object to add the event listener to, like an element, the document or the window
2) The addEventListener() method, which takes two parameters described below
3) The listener, which is a function to run when the event is received and which takes the event itself as a parameter
*/

/*
As a simple example, if you have a button you want to use to run some JavaScript code when it's clicked, the button is the object and you can pass addEventListener() the click event and the function to run when triggered. This might sound complex, but it's actually quite simple. 
*/

/*---------------Here is the generic syntax for adding an event listener:------*/

// target.addEventListener(type, listener [, options]);

/*
The options are parameters you can specify to make your listener behave differently, but they're not required to create it. 

You can pass options such as whether to only invoke the listener on the first event it receives and then destroy it, whether it will prevent the default action of the original object and so on. Don't worry about that stuff for now though; what you need to know right now is just how to add a simple listener for an event, and everything else you can pick up as you need to create more complex listeners. The following compares the way you've seen things done thus far with the way they should be done as a best practice:

Without an event listener, using HTML attributes:

<button id="my-button" onclick="console.log('You clicked the button!')">Click me!</button>

Using an event listener:
HTML:

<button id="my-button">Click me!</button>

JavaScript:

function myFunction (event) {
  console.log('You clicked the button!');
  console.log(this.id);  // my-button
}

let myButton = document.getElementById('my-button');
myButton.addEventListener('click', myFunction);
*/

/*-----------------There are a few important things to note here:---------------*/

/*
1) The listener itself, myFunction() in this case, takes the event as a parameter. That means that if you need to get any information about the event, such as its type, name, properties or anything else, you can get it using dot notation, like you saw in the keyboard events unit to get event.key, which represented the key that was pressed.

2) When passing the listener to the addEventListener() method, it is passed without parentheses. This is vitally important because if you pass the function with parentheses it will be called immediately instead of when the event is received! Remember that you are passing the function itself as the thing to do when the event happens, not calling the function right then and there.

3) Inside the listener (myFunction(), which is sometimes called a callback function, by the way), the value of this is the object that triggered the event. In most cases that you use this functionality, that will mean that this refers to the element, so you can get things like this.id, this.classList or any other element property.

You can have as many event listeners as you want, and every element can have multiple listeners listening to different kinds of events, but you should never have two listeners for the same event on the same element executing different callback functions. This will cause one of them to be discarded and will result in unpredictable behavior. The runnable example below demonstrates how to add and use a few different types of event listeners. Take note of the value of this during each event. Remember that it's your key to being able to access the actual element that triggered the event!
*/

function handleBtnClick(event) {
  console.log('Received the ' + event.type + " event!");
  console.log('"this" currently refers to', this.id);
  console.log('You clicked the button!\n');
}

function handleInputKeys(event) {
  console.log('Received the ' + event.type + " event!");
  console.log('"this" currently refers to', this.id);
  console.log('You changed the textbox!\n');
}

function handleDivMouseOver(event) {
  console.log('Received the ' + event.type + " event!");
  console.log('"this" currently refers to', this.id);
  console.log('You moved the mouse over the div!\n');
}

let magicButton = document.getElementById('magic-button');
let magicDiv = document.getElementById('magic-div');
let magicInput = document.getElementById('magic-input');

magicButton.addEventListener('click', handleBtnClick); // left clicks
magicButton.addEventListener('contextmenu', handleBtnClick); // right clicks
magicDiv.addEventListener('mouseover', handleDivMouseOver); // mouseovers
magicInput.addEventListener('keypress', handleInputKeys); // key presses 
magicInput.addEventListener('keydown', handleInputKeys); // key down
magicInput.addEventListener('keyup', handleInputKeys); // key up