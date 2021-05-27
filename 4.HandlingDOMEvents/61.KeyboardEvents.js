/*
So far you've learned how to capture mouse events, loading events, and change events. Another way users interact with websites is via their keyboards, and those events can be captured as well. All events that occur when user presses a key on the keyboard belong to the KeyboardEvent object and this object has a number of properties and methods similar to the MouseEvent object. The most common keyboard events you will capture are:

- onkeypress:   A user has pressed a key on the keyboard
- onkeydown:    A user has pressed a key down, but not released it yet
- onkeyup:      A user has released a key which was previously pressed down

By capturing these three events and combining them with the other properties and methods available on the KeyboardEvent object, it's possible not only to tell whether a user has pressed a key on the keyboard, but also to tell how long they held it down, specifically which key was pressed, whether they've released it yet and more. This makes it possible for you to add interactivity to your pages that executes not only for simple things like clicking but also for complex situations like, "The user clicked and dragged while holding ctrl + alt" or "the user has pressed shift + I". This is often how popular websites you probably use every day create all those awesome keyboard and clicking shortcuts! Here is a table summarizing all the possible KeyboardEvent properties and methods. To access these, you can pass the event parameter to your event handler function (the function that gets called when the event happens) as described in the mouse movements and scrolling unit, then access them using dot notation (e.g. event.key):
*/

/*Property/Method---Description----------------------------------------------*/
/*
altKey	            Rtrn "ALT" key was pressed when the key event was triggered
charCode	          Rtrn Unicode character code of key that triggered the event
code	              Rtrn the code of the key that triggered the event
ctrlKey	            Rtrn the "CTRL" key was pressed when the key event was triggered
getModifierState()	Rtrn true if the specified key is activated
isComposing	        Rtrn whether the state of the event is composing or not
key	                Rtrn the key value of the key represented by the event
keyCode	            Rtrn the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event

location	          Rtrn the location of a key on the keyboard or device
metaKey	            Rtrn the "meta" key was pressed when the key event was triggered
repeat	            Rtrn whether a key is being hold down repeatedly, or not
shiftKey	          Rtrn the "SHIFT" key was pressed when the key event was triggered
which	              Rtrn the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event
*/

/*
The following runnable example demonstrates the functionality of JavaScript keyboard events. Here are some things to think about as you work through the code:

What's the purpose of passing the event parameter to the handleKeys() function in index.html?
What do you think would happen if you eliminated the if(event.repeat) block on lines 9-11 of script.js that returns false?
Can you think of another way to write lines 15 and 27? Maybe using template literals?
Why do we need lines 23-25 in script.js? What would happen if you removed it or changed 75 to 1000?
*/

// Note: We pass the event to the function to get info about it!
function handleKeys(event) {
  let pressedDiv = document.getElementById('key-pressed');
  let downDiv = document.getElementById('key-down');
  let upDiv = document.getElementById('key-up');
  let currentKeySpan = document.getElementById('current-key');
  let lastKeySpan = document.getElementById('last-key');

  if (event.repeat) {
    return false; // prevents holding the key from triggering the event again 
  } else {
    if (event.type === 'keydown' || event.type === 'keypress') {
      downDiv.style.backgroundColor = 'lightgreen';
      pressedDiv.style.backgroundColor = 'lightgreen';
      currentKeySpan.innerHTML = event.key + ' (' + event.code + ' / ' + event.keyCode + ')';
    } else if (event.type === 'keyup') {
      currentKeySpan.innerHTML = '';
      downDiv.style.backgroundColor = 'white';
      pressedDiv.style.backgroundColor = 'white';
      upDiv.style.backgroundColor = 'lightgreen';

      // This just changes the upDiv back to white after 75ms
      setTimeout(function () {
        upDiv.style.backgroundColor = 'white';
      }, 75);

      lastKeySpan.innerHTML = event.key + ' (' + event.code + ' / ' + event.keyCode + ')';
    }

  }
}