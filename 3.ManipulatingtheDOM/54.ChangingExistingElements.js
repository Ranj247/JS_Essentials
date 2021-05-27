/*
Get one or more elements using one of the methods you learned in the previous units, such as:
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()

Set one of its properties, such as adding or changing its style, removing or adding an attribute, or changing its innerHTML

While some properties of these HTML elements are read-only, such as clientWidth and clientHeight, you can usually adjust them in another way. 

For example, instead of setting the clientWidth which is not possible since that property is read-only, you can set the Element.style.width property on the element, like this:

let myElement = document.getElementById('some-id-attribute');
myElement.style.width = '300px';

As you can see it's simple to update the properties of an HTML element. Just get the element, then change whichever property you want. Because you can get entire collections of elements too, such as when using document.getElementsByClassName() or document.getElementsByTagName(), you can do this in loops as well! 

That means if you have a whole series of elements you wish to update in some way, you can use a loop on a collection of elements returned from one of these methods and update an entire group of them with complex logic. 

This is the real power of JavaScript in the context of manipulating the DOM. Some examples of how to get elements and update their properties are given in the runnable example below:
*/

/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/


function update() {
  let box = document.getElementById('main-box');
  box.style.width = "300px";

  let paragraph = document.getElementsByClassName('special')[0];
  paragraph.removeAttribute('class');

  let emptyBox = document.getElementById('empty-box');
  emptyBox.innerHTML = "<h2>I'm not empty anymore!</h2>"
  emptyBox.style.width = "300px";
  emptyBox.style.backgroundColor = "yellow";
}