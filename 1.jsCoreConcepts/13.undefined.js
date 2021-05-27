/*
The JavaScript undefined property is used to represent any object that has either not been assigned a value or has not been declared at all. It is a property of the global object and is one of JavaScript's primitive data types. undefined is always available as a variable in the global scope, but is not configurable, manipulatable or enumerable. It is only used to represent a variable or other object which has not been assigned a value or which has not been declared.

The easiest way to understand undefined is with a simple example. Usually, developers declare and assign variables in a single step, like let x = 1;. Suppose however that you declare a variable but do not assign it any value:
*/

let x1;
console.log(`${x1} is the value of x1`); // undefined

/*
JavaScript methods, statements and functions also return undefined if either a) the object being returned has not been assigned a value or b) nothing is returned at all.

The most common usage of undefined, similar to null, is in checking whether something is undefined. There are two ways to check:
*/


/* Checking explicitly using strict equality: */
let x2;
if (x2 === undefined) {
  console.log(`${x2} is the value of x2`);
};


/* Using the typeof operator: */
let x3;
if (typeof x3 === "undefined") {
  console.log(`${x3} is the value of x3`);
}

/*
You'll learn in a future unit why we're using === as opposed to == above, but for now, just understand that as a best practice you should always check equality using === because it verifies that the type of the objects is equal also. undefined is falsy in a boolean context, so like null, you can use it to determine truth and make decisions. The difference between null and undefined is that null represents an object which has explicitly been assigned a value of nothing, while undefined is a representation that something has either not been declared or has not been assigned a value. It is "unclear" what it is, so it is considered to be undefined.
*/