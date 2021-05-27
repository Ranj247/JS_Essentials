/*
Along with updating the properties on existing elements, with JavaScript you can create entirely new elements and append them to the DOM in whatever location you wish, or you can remove, replace or relocate elements. There are several methods available for you, both as part of the document object itself as well as on each individual HTML element object. All the standard JavaScript functionality is there for you too, such as loops, conditional statements and data structures. Some of the most common methods you'll use when creating and removing elements are:

document.createElement():   Create a new element
element.appendChild():      Append an element as the child of another element
element.cloneNode():        Clone an entire element. Pass true to "deep clone" which  clones its children also

element.remove():           Remove an element from the DOM

There is a plethora of ways to use JavaScript to manipulate the DOM by creating and removing elements. These methods are best illustrated with an example, so there is a runnable example below which covers several of them. Make sure to read the comments in the JavaScript file and that you understand each step of the manipulation - some of the functions in the runnable example will also be in the upcoming challenge. Don't be afraid to turn to Google if you need more clarity, too!
*/

/*
Note: ignore the functions here and focus on what's inside them.
The function is only here to allow you to change the content with
the button
*/

function createShoppingList() {
  // Get the document body (just for convenience)
  let body = document.body;

  // Create a new heading
  let newHeading = document.createElement("h3");

  // Set its innerHTML
  newHeading.innerHTML = "Shopping List:";

  // Add it to the body
  body.appendChild(newHeading);

  // Now make the new list
  let shoppingList = document.createElement('ul');

  // Create an array of items to add
  let shoppingItems = ['Milk', 'Butter', 'Eggs'];

  // Loop through the array and create <li> elements
  for (let i = 0; i < shoppingItems.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerHTML = shoppingItems[i];
    shoppingList.appendChild(listItem);
  };

  // Now append the whole new list to the body
  body.appendChild(shoppingList);

  // When shopping is completed, clear out the shopping list and add the purchased items to kitchen stock
  let button = document.createElement('button');
  button.innerHTML = "Finished Shopping";

  // Set the onclick attribute to call the addToKitchenStock() function below
  button.setAttribute('onclick', 'addToKitchenStock();');

  // Append it to the body
  body.appendChild(button);
}


function addToKitchenStock() {
  // First remove the shopping list heading
  let shoppingListHeading = document.getElementsByTagName('h3')[1];
  shoppingListHeading.remove();

  // Get both lists, then iterate through the shopping list's children (the <li> elements), cloning each item and appending it to the kitchen stock list
  let kitchenStock = document.getElementsByTagName('ul')[0];
  let shoppingList = document.getElementsByTagName('ul')[1];
  for (let i = 0; i < shoppingList.children.length; i++) {
    let clone = shoppingList.children[i].cloneNode(true)
    kitchenStock.appendChild(clone);
  }

  // Remove the old shopping list and the buttons
  shoppingList.remove();
  let i = 0;
  while (i < 2) {
    /* This removes the first button in the document each time.
    We need to do it this way since once we delete the first
    one, the 2nd one's index is now 0 */
    document.getElementsByTagName('button')[0].remove();
    i++;
  };

  // Insert a completion note at the top
  let complete = document.createElement('p');
  complete.innerHTML = "Shopping complete!"
  complete.style.color = "red";
  complete.style.fontWeight = "bold";
  let kitchenStockHeading = document.getElementsByTagName('h3')[0];
  document.body.insertBefore(complete, kitchenStockHeading);
}