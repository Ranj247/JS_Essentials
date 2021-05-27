/*
The getElementsByClassName() method is nearly identical in functionality to the getElementsByTagName() method. It is also a method of the document object and it also returns an HTMLCollection, so all the same functionality is available to you. 
*/

/* The syntax is identical as well; just pass the method the class name you wish to find:*/

/* document.getElementsByClassName('className'); */

let blueThings = document.getElementsByClassName('blue');

// All items with class="blue"
console.log('The HTMLCollection contains:', blueThings);

// Iterate and print all their texts:
for(let i = 0; i < blueThings.length; i++) {
  console.log('Index ' + i + ' in the collection: ' + blueThings[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", blueThings[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", blueThings.item(3).textContent);

// Get the item with class="blue" and id="specific" and log its tag name:
console.log('The item with id="blue-div" is a', blueThings.namedItem('blue-div').tagName, 'element.');

// The other div is not in the collection since it doesn't have the "blue" class. The namedItem() method returns null
console.log('The item with id="another-blue-div" is', blueThings.namedItem('another-blue-div'));