/*
---------------------------------Change event---------------------------------
------------onchange event handler

It can capture with the onchange event handler. This event is fired when certain elements change, in particular <input> and <select> elements. These events allow you to capture when a user has changed something in a form and respond accordingly, allowing you to handle powerful operations like live form validation.

The onchange event handler is simple to use. Like all the other events, you can simply attach it to one of the supported elements (either an <input> or a <select> element) as an attribute, and set the attribute equal to some JavaScript code or a function you'd like to call:
*/

/* 

<input type="text" onchange="console.log('You changed the text box!');">

</input>If you're working with a dropdown box, the syntax is the same but the event will fire whenever the option in the box is changed by a user changing it with the mouse or the keyboard:
*/

/*
<select name="my-select" id="my-select" onchange="console.log('You changed the select box!');">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
*/

/*
One key thing to recognize about the change event is that it is not fired when changing elements programmatically. It's intended to capture changes that are committed to by the user, such as typing something into a text box and then moving on to a different part of the form, so it will only be fired once the typing is complete or the select box or other input has been completely changed to the new value. This event is immensely powerful and can be used for all sorts of things to make your websites more interactive.
*/

