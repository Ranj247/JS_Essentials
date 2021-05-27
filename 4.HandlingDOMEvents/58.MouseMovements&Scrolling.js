/*
Another common requirement when manipulating the DOM and responding to user actions is capturing mouse movements. These movements include the mouse moving over an element (onmouseover/onmouseenter), off of an element (onmouseout/onmouseleave), scrolling (onscroll) and moving around while over an element (onmousemove). The MouseEvent object which provides this functionality has several properties which are useful when tracking the mouse, such as clientX and clientY, which return the X and Y coordinates of the mouse respectively (relative to the window).

To summarize, here is a table containing the most common mouse events used when tracking mouse movements:
*/

/*
-------------------------EVENTS-------------------------
Event/Property--Description
onmouseenter	  The event occurs when the pointer is moved onto an element
onmouseleave	  The event occurs when the pointer is moved out of an element
onmousemove	    The event occurs when the pointer is moving while it is over an element

onmouseout	    The event occurs when a user moves the mouse pointer out of an element, or out of one of its children

onmouseover	    The event occurs when the pointer is moved onto an element, or onto one of its children

onscroll	      The event occurs when an element's scrollbar is being scrolled, or when scrolling with the mouse/trackpad.


-------------------------PROPERTIES-------------------------
clientX	        Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered

clientY	        Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered
*/

/*
For examples of these events, see the runnable example below. Pay attention to these points as you go through this example:
*/

/*
- All the events that are used in the HTML file (onmouseenter, onmouseleave, etc) utilize the same function to handle the event: handleEvent()

- Each time that function is called in the HTML to handle one of these events, we pass it a parameter called event

- The event parameter is implicitly defined for all events, so if you're wondering where it came from or what it represents, it's built in and it represents the actual event that occurred (like a click, the mouse moving, or scrolling)

- In script.js, this event parameter is used inside handleEvent() to reference the event that triggered the function. That's how we can get the type of event that triggered it and handle all those different events with a single function!
*/

/* We are passing the event here so we can
get its type and do everything with one function */

function handleEvent(event) {
  if (event.type === 'mousemove') {
    let position = '(' + event.clientX + ',' + event.clientY + ')';
    let positionHolder = document.getElementById('mouse-position');
    positionHolder.innerHTML = position;
  } else {
    console.log(
      event.type,
      event.target.attributes.id.value, 'happened!');
  }

}