/*
Strings can be concatenated too, which means they can be appended to one another to create a new string. Before template literals, this was the only way to insert a variable into a string; you would have to do something like this:
*/

// let myVar = 'a variable!'
// let myString = 'This string contains ' + myVar;

// console.log(myString);  // This string contains a variable!

/*
This concept is still useful today though, because you can use concatenation to build strings piece by piece or append one string to the end of another. All you have to do is use the + operator between the two strings you wish to concatenate:
*/

// let greeting = "Hello";
// let name = "Marcus";

// let fullGreeting = greeting + ', ' + name + '!';
// console.log(fullGreeting);  // Hello, Marcus! 

/*
You can add as many strings together as you wish, and can use this concept to do all sorts of interesting stuff, like creating a list of HTML items using a loop:
*/

/* Basic iteration using string concatenation*/

let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>'; // <ol>

for (let i = 0; i < fruits.length; i++) {
  myHtml = myHtml + '<li>' + fruits[i] + '</li>';

  // <ol><li>apple</li>
  // <ol><li>apple</li><li>orange</li>
  // <ol><li>apple</li><li>orange</li><li>banana</li>
}
myHtml += '</ol>'; // it adds </ol> in the end 

console.log(myHtml);

/*
This becomes even more elegant when you use template literals to inject the fruit directly into the string without using the additional concatenation. The process of injecting variables into strings using template literals is called string interpolation:
*/

/* Iteration using template literals */

let colours = ['red', 'yellow', 'blue'];
let list = '<ol>';

for (let i = 0; i < colours.length; i++) {
  list += `<li>${colours[i]}</li>`;
}
list += '</ol>';

console.log(list); 

/*
If all the looping and extra stuff above doesn't make sense right now don't worry. The point is that strings can be manipulated easily using the + operator.
*/