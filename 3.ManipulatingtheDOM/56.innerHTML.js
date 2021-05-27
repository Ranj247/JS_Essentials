/*
Sometimes it becomes quite tedious to create, clone, remove, replace and relocate lots of elements with JavaScript when you're trying to update the DOM. When this happens, as usual, there's a better way. 
*/

/*
The innerHTML property allows you to get or set the entire internal HTML contents of an HTML element. If that element contains other HTML, the innerHTML property will replace it if you set it, or return all the HTML if you get it. Like all the other properties on an element, it's simple to use. 
*/

/*
Here's how you can both get and set this property after using one of the many methods to retrieve an element:

let myElement = document.getElementById('some-id');

// GET the innerHTML:
let html = myElement.innerHTML;
console.log(html);  // Whatever HTML was already in the element

// SET the innerHTML (this replaces it)
myElement.innerHTML = "<h1>Hello world!</h1>"

This property exists on every element in the DOM tree, right up to the <html> element itself. If you are working with a low level element such as a heading or something that just has some text in it, the innerHTML property will return the text content of the element. You can also set the innerHTML property to simple plaintext; it doesn't have to be HTML. The real power of this property, though, is in its ability to replace the entire contents of an element with complex HTML, such as replacing all the contents of a div with a whole bunch of new HTML. To create this new HTML, you can use template literals, which you learned about in the strings lesson. Just surround all your HTML with backticks!

let myDiv = document.createElement('div');
let html = `
  <h1>Hello!</h1>
  <p>Here is some complex HTML that will be inserted into this div.</p>
  <p>It contains a heading, paragraphs, and even a list with a class.</p>
  <ul class="special-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
`;

myDiv.innerHTML = html;  // The div will now render all the above HTML!

You probably noticed that in the last runnable example it was quite involved just to add a simple unordered list with a few items to the DOM. 

First you had to create every single element, set all their values, set their attributes, and on top of everything when it was all done it was in the wrong place so you had to use another function to move it! 

It would have been much easier to do this by simply creating a div to contain the shopping list, updating the div's innerHTML property like above, and then inserting the whole div into the document in the appropriate place. 

In the following example, the exact same logic is achieved using only a few lines of code. 

Notice the use of backticks (``) to create the template literal. This is very common when writing HTML in your JavaScript to be added via the innerHTML property. 

You'll also see in the example below that the button to add the shopping list doesn't need to be removed because it will always insert a new list just above itself! If you wanted, you could also write some logic to check if the list is already on the page and if so, replace it rather than adding another one.
*/

/*
Note: ignore the functions here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/

function createShoppingList() {
  // Create a div to hold everything
  let shoppingListDiv = document.createElement('div');

  // Set the div's innerHTML to the shopping list
  // Notice the use of backticks (``) to create a multiline string
  shoppingListDiv.innerHTML = `
      <h3>Shopping List:</h3>
      <ul>
          <li>Milk</li>
          <li>Butter</li>
          <li>Eggs</li>
      </ul>
  `;

  // Find the first button and insert the div before it
  let firstList = document.getElementsByTagName('button')[0];
  document.body.insertBefore(shoppingListDiv, firstList);
}