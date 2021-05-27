/*
An important concept when working in JavaScript is the concept of events. Events represent the user taking some action, or more generically, something happening within the context of JavaScript and the browser. 

Examples of things that could be events in JavaScript are the user clicking the mouse, scrolling up or down the page or pressing a key on the keyboard; an input box being changed; the page load completing and so on. In JavaScript, these events allow you to execute code in response to user actions and other situations that occur naturally during the process of using the browser.

There are hundreds of events. Just take a look at this list in the MDN Event Reference! There's no way we could teach you all the possible events in a single course like this, and besides, there's no way anyone could remember them all anyway. Instead, we'll focus on the most common events you'll use to get started with handling user interaction in JavaScript, and you'll learn the rest through experience as you need them. One of the most common and useful events is the click event, because it allows you to both capture when the user has clicked on something as well as to simulate a user clicking on something with JavaScript.
*/

/*There are two primary ways to utilize click events in JavaScript:*/

/*
- Capturing a click event and executing some code in response to it
- Simulating a click event in order to trigger some action in the browser

We actually used this event in the last lesson to capture the click of the buttons which modified the DOM. If you look back at those examples you'll see that each of the buttons has an onclick attribute which calls one of the functions written in the script.js file. This is the most common and straightforward way to capture a click event on a specific element and is usually what you will use this event for. After all, you probably don't want to capture every click, but rather specific clicks on specific items so you can respond accordingly with your JavaScript code. 
*/

/* To summarize, here is a table containing the most common mouse events used when tracking mouse clicks: */

/*
--------------------------------EVENTS--------------------------------
Event/Property---Description
onclick	         The event occurs when the user clicks on an element
oncontextmenu	   The event occurs when the user right-clicks on an element to open a context menu
ondblclick	     The event occurs when the user double-clicks on an element
onmousedown	     The event occurs when the user presses a mouse button over an element
onmouseup	       The event occurs when a user releases a mouse button over an element

--------------------------------PROPERTIES--------------------------------
button           Returns which mouse button was pressed when the mouse event was triggered
*/

/*
There are countless reasons you'll find throughout your development career to both capture and trigger mouse clicks, so remember these two tricks as you move forward. The example below demonstrates that click events work all over the place, on every element!
*/

function changeBox() {
  console.log("Changes incoming!");

  // Get the div
  let lowlyDiv = document.getElementById('lowly-div');

  /* We can check the box to determine its width and
  change colors accordingly. 120 = 100px + 10px padding
  on each side. Check style.css */

  if (lowlyDiv.clientWidth === 120) {
    // Change its background color and width
    lowlyDiv.style.backgroundColor = "lightgreen";
    lowlyDiv.style.width = '200px';
  } else {
    // Change it back to normal
    lowlyDiv.style.backgroundColor = "lightyellow";
    lowlyDiv.style.width = '100px';
  }
}