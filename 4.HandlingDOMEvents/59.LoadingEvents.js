/*
There are a few common loading events that you should know in your JavaScript journey. These events are fired every time an HTML page is loaded and provide you with a way to track when certain elements in the page have completed loading. This is known as the "lifecycle" of an HTML page. 
/*

/* ----------The four main events that you will encounter are:----------*/

/*
1) DOMContentLoaded: The DOM content has finished loading, but external assets like images, JS files, CSS files and so on have not loaded yet.

2) load: Everything is now loaded. This event fires on the window

3) beforeunload: Fired just before the user leaves the page. This can allow you to confirm whether the user really wants to leave the page.

4) unload: Fired when the user has confirmed they want to leave the page.
*/

/*
------------------------------- window.onload ---------------------------------- 
The event you are most likely to use is the window.onload event, which allows you to execute some JavaScript code immediately after you've confirmed everything on the page is loaded. 

This is useful for those times when you want to automate some sort of action every single time the page loads, such as initiating a popup, populating DOM elements with content, or rendering some content that depends on something else being loaded first. 
*/

/*
In the HTML lifecycle, the document will always complete loading before the window, and you can use the onload event on both objects. To use this event, just set the onload property on the window to whatever JavaScript you would like to execute:
*/

/*
You can also attach the event to a specific element by using it as an attribute. This can allow you to determine when certain content is loaded, such as if you wanted to determine when a specific script or image has finished loading:
*/

/*
<body onload="myFunction();"></body>

function myFunction() {
  console.log('This will fire when the body is loaded');
}

window.onload = console.log('The window has loaded!');
// Or more practically, execute a function:

function myFunction() {
  console.log('The window has loaded!');
  // You can do anything you want in here!
}
window.onload = myFunction();
*/

/*
---------window.onload---------
Due to event "bubbling" in JavaScript, logging these messages to the console may not always occur in the correct order and thus it's best to just use window.onload to determine when the page is completely loaded. 

---------window.onbeforeunload-------
---------window.onunload------------- 
To determining what to do when a user exits the page. 
*/

document.onload = console.log('The document has loaded!');

function bodyLoaded() {
  console.log('Body has loaded!');
}