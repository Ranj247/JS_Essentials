/*
Iterating data structures in JavaScript will be critical to your ability to use it to navigate and manipulate the DOM. As you learned in the comparative programming module, it's fairly simple to navigate and iterate through data structures. There are two main types of data structures you'll work with in JavaSscript: arrays and objects. As you know, to access the values in an array you can use their indices, and to access the values in a JavaScript object you can use its properties (sometimes called keys).

To prepare you for iterating data structures effectively in JavaScript we'll begin by iterating a simple array. There are a few different ways to do this, one which you already know and two others which you'll be introduced to. The first way is using a standard for loop:
*/

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];

// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

/*
Above, you simply start with a variable i, set to zero, which will act as the index. i will be incremented until it is no longer less than food.length, logging each food to the console along the way. In this kind of for loop, i represents an array index.

There are two other ways to iterate over arrays too, with each having a slightly different syntax. Using a for...of loop you can access the values directly, which is significantly less verbose than the "standard" loop as you can see here. In this kind of for loop, i is the actual value of that array element, which makes it very easy to use:
*/

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
// for (let i of food) {
//   console.log(i);
// }

/*
Finally, you can use a for...in loop, which iterates over the enumerable properties of the array rather than its values. In a normal array this means that a for...in loop iterates over the array's indices (like the standard for loop) rather than its values (like the for...of loop):
*/

// let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
// for (let i in food) {
//   console.log('index', i, 'is', food[i]);
// }

/*
If you're working with an object, you can use a for...in loop to iterate over its properties and thus get its values. Here, i refers to the object properties (e.g. dog, cat, fish, python):
*/

// let petNames = {
//   dog: 'Fido',
//   cat: 'Max',
//   fish: 'Bubbles',
//   python: 'Mr. Slithers',
// }

// for (let i in petNames){
//   console.log(petNames[i], 'is a', i);
// }

/*
If you prefer a different approach to iterating object properties, another one is to use the Object.entries()method to create an array of the property/value pairs and then access the individual values via their nested indices (note: Object.entries() is not supported in JavaScript Tutor so you'll need to paste this code into the console to run it):
*/

let petNames = {
  dog: 'Fido',
  cat: 'Max',
  fish: 'Bubbles',
  python: 'Mr. Slithers',
}

let pairs = Object.entries(petNames);
for (let pair of pairs){
  console.log(pair[1], 'is a', pair[0]);
}

/*
To summarize the different iteration methods:

Standard for loop: i is an array index
for...of loop: i is an array element/value
for...in on an array: i is an array index
for...in on an object: i is an object property
However you choose to iterate these data structures, your ability to do so is important to your success in JavaScript, so make it a point to learn these simple methods.
*/