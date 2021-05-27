/*
The Math object in JavaScript is a built-in utility for working with the Number data type. It contains several useful predefined functions, constants and properties which can be used for all sorts of mathematical operations. Some examples of things included in the Math object are:

Math.PI: The constant pi
Math.random(): A method for returning a random number between 0 and 1
Math.abs(): A method for finding the absolute value of a number
Math.min(): A method for returning the minimum of a series of numbers
Math.max(): A method for returning the maximum of a series of numbers
...and many more!

To better understand the Math object we'll look at several examples including many of those listed above. Starting with something simple, here's how you would use Math.random() to generate a random number (note: you'll need to reopen the link to JavaScript Tutor after each run of this code to get a new random number because JavaScript Tutor caches the variable. To see a more realistic result, try copying the code into the dev tools console. Every time you run it you'll get a new random number):
*/

// let random = Math.random();
// console.log(random);

/*
The number returned will always be a decimal number between 0 and 1. There's also a method, Math.floor(), for returning the largest integer less than or equal to to value passed into the function, for example:
*/

// let someInteger = Math.floor(25.65);
// console.log(someInteger);  // 25

/*
The opposite works as well with Math.ceil(), which returns the smallest integer which is greater than or equal to the passed argument:
*/

// let someInteger = Math.ceil(25.65);
// console.log(someInteger);  // 26

/*
Knowing the functionality of all three of the above means you can combine them to generate a random list of integers which can be useful in many circumstances, such as populating an array of random integers using a loop:
*/

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//   numbers.push(Math.floor(Math.random() * 100));
// }
// console.log(numbers);

/*
In the above code, first we created an empty array called numbers, then used Math.random() and Math.floor() to push 10 numbers into it. The way this works is: in a loop from 0 to 9 (so 10 times), we call Math.ramdom() and multiply it by 100 to move the decimal over to the right by two places, then pass that value to Math.floor() in order to find the closest integer which is less than or equal to it. If you wanted to generate numbers between 0 and 10 you could multiply by 10, in this case we multiplied by 100 so the numbers generated will be between 0 and 100, and if you multiplied by 1000 they would be between 0 and 1000 and so on (in fact, the multiplier here can be thought of as the upper limit of the random numbers generated). Finally, the result of Math.floor() is pushed into the numbers array using the push() method. This process is a common practice in JavaScript when you need a set of random numbers between two values.

If you need standard rounding you can use the Math.round() function, which returns the number you provide rounded to the nearest integer:
*/

// console.log(Math.round(1.25));  // 1
// console.log(Math.round(1.65));  // 2

/*
Two other commonly used Math object methods are Math.min() and Math.max(). These two do exactly what you'd expect and can be used on any series of numbers:
*/

// console.log(Math.min(1, 2, 3));  // 1
// console.log(Math.max(1, 2, 3));  // 3

// If one of the objects can't be converted, the result is NaN:
// console.log(Math.min(1, 2, 'Hello!'));  // NaN
// console.log(Math.max(1, 2, 'Hello!'));  // NaN

// If you give .min() nothing, you get Infinity:
// console.log(Math.min());  // Infinity

// If you give .max() nothing, you get -Infinity:
// console.log(Math.max());  // -Infinity

/*
The Math.pow() function takes two parameters and returns the first parameter raised to the power of the second, for example:
*/

// console.log(Math.pow(2, 4));  // 16
// console.log(Math.pow(3, 3));  // 27

// Negative bases to fractional exponents return NaN:
// console.log(Math.pow(-7, 1/3));  // NaN

/*
Finally, to get the square root of a number you can use Math.sqrt():
*/

console.log(Math.sqrt(4));  // 2
console.log(Math.sqrt(9));  // 3
console.log(Math.sqrt(2));  // 1.4142135623730951

console.log(Math.sqrt(0));  // 0
console.log(Math.sqrt(-0));  // -0
console.log(Math.sqrt(-1));  // NaN

/*
As you can see there are many useful functions and properties of the Math object. If you need a reference of all the available methods and their functionality, you can use the MDN Website.
*/