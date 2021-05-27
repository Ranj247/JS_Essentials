/*
In HTML, all elements are related in some way. The entire DOM tree is a hierarchical, familial structure where parents have children, children have siblings, siblings can have children, children can have other children and so on. 

This structure is critical to your understanding of how to navigate and manipulate the DOM with JavaScript, and there are several methods available within JavaScript that allow you to access different nodes based on these relationships. 

In the image here, the li elements are both parents and children ... they are children of the ul elements and parents to anything contained within them. The ul element could also have siblings, and is most likely a child itself of a higher element.

The DOM element object, which represents a specific HTML element, has a number of properties and methods you can use to access its related elements in the DOM tree. Four of the most important properties available are related to finding the element's parent, children and siblings:

.parentNode: Gets the current element's parent node. If the current element is anything other than <html>, this property will return the element's parent element. Otherwise, it will return the document object.

.children: Returns an HTMLCollection of the elements children (anything nested within it in the DOM tree).

.nextElementSibling

.previousElementSibling: Finds the next sibling/previous sibling of the given element, i.e. the closest one at the same nesting level in the DOM tree.

By combining these four methods with your ability to get an element by its tag name, class name or id, you can efficiently navigate around the DOM and access any element you need. 

To access the associated property from above on any element, just attach it to the element at hand. 

----For example, consider that we have a div element with an id of main-div:---

let mainDiv = document.getElementById('main-div');  // First get the div itself

let parent = mainDiv.parentNode;  // the div's parent element
let children = mainDiv.children;  // the div's children
let firstChild = mainDiv.children[0];  // the div's first child
let nextSibling = mainDiv.nextElementSibling;  // the next element at the same nesting level
let prevSibling = mainDiv.previousElementSibling;  // the previous element at the same nesting level

Of course, once you've got the above, there's nothing stopping you from getting the children, siblings or parents of the div's children/siblings. 

You can use these methods to find any element in the entire HTML structure and build collections of related elements which you can then operate on and manipulate. 

*/

/*
Study the following in order to understand how to navigate up/down/sideways in the DOM!
*/


// Get the main div and footer divs
let main = document.getElementById('main-div');
let footer = document.getElementById('footer-div');

// First child of the main div is the title div
let titleDiv = main.children[0];
console.log(titleDiv);

// First child of the recipe-title div is the h1
let recipeTitle = titleDiv.children[0];
console.log('Recipe is called:', recipeTitle.textContent);

// Next sibling of the title div is the ingredients div
let ingredientsDiv = titleDiv.nextElementSibling;
console.log(ingredientsDiv);

// And its first child is a <ul> w/ the ingredients:
let ingredientList = ingredientsDiv.children[0];
console.log(ingredientList);

// Now we can get its children and iterate though them:
let allIngredients = ingredientList.children;
for (let i = 0; i < allIngredients.length; i++) {
  console.log('Ingredient', i, 'is', allIngredients[i].textContent);
}

// Parent of the main-div is <body>
console.log(main.parentNode);

// and its sibling is the footer-div
console.log(main.nextElementSibling);

// So we could combine all of these to get the footer text easily, even if it had no id/class
let footerText = main.parentNode.children[1].children[0].textContent;
console.log('Footer text is:', footerText);

// Of course, since it has an id, you can also do this to access it directly
footerText = document.getElementById('footer-div').children[0].textContent;
console.log('Footer text (alternative method) is:', footerText);