/*
When you learned about numbers in JavaScript you learned that the number data type itself has some unique properties, methods and functionality. Three of those properties are also properties of the global object, like undefined and null. These properties are Infinity, -Infinity and NaN. Their explanations are quite simple:

Infinity: a special constant representing any number larger than about 1.8x10^308
-Infinity: a special constant representing any number smaller than about -1.8x10^308
NaN: any value which is Not a Number.
These values are often used in flow control and decision making like null and undefined, by checking another value to see if it is/is not finite or is/is not a number. They can also be useful to know when debugging, since you'll sometimes see a value you expected to be a number turn out to be NaN or one of the other values. This can help to identify exactly what's going wrong in your code. In JavaScript, since you can convert various data types between one another, it's good to know that there will be a consistent value returned (NaN) if you try to convert something into a number which cannot be converted, and that there are constants to represent very large and very small numbers.
*/

/*
Two useful functions you learned about in the numbers unit which bear repeating here are:

isFinite(): returns true if the number is not Infinity or -Infinity
*/

let finite = isFinite(12345);
let infinite = isFinite(1.9e308);

console.log(finite);    // true
console.log(infinite);  // false

/*
isNaN(): returns true if the passed value is not a number (Note: if you pass a number as a string (e.g. '12345') to isNaN(), it will return false because the string will be coerced, or converted, to a number before it is evaluated. You'll learn more about how this type coercion works in the next unit)
*/

let passingString = isNaN("hello!");
let passingNumber = isNaN(12345);
let passingNumberAsString = isNaN('12345');

console.log(passingString);          // true
console.log(passingNumber);          // false
console.log(passingNumberAsString);  // false ('12345' is coerced to a Number)