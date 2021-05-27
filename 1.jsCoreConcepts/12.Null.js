/*
null is another of JavaScript's primitive data types and is a representation of the intentional absense of any object value. This means that, effectively, null is used when you want to explicitly represent "nothing". It is often used as the indication that an object could exist, but currently explicitly does not. This is not the same as undefined, which means that an object does exist but it doesn't have any value associated with it.

null is simple to represent. Any time you wish to explicitly declare a value that represents nothing, just declare it as null:
*/

let myVariable = null;

/*
Above, the declaration of null means that the variable myVariable points to no object. null is falsy in a boolean context and can be used to determine truth:
*/

let myVar = null;
console.log(Boolean(myVar));  // false

if (myVar) {
  // will not run; null is falsy
}

/*
In a practical sense, you will almost always use null as the condition in a conditional statement, using it to make decisions based on whether a variable is null or not. It can, however, be used to "wipe out" a variable's value. If you want to eliminate a variable's value, just assign null to it. In the future, you may also use it as a substitute for zero-values when writing APIs, because in many cases (for example in a financial context), if a value doesn't exist, representing it as zero is not accurate and may create inaccuracies in financial calculations. Instead, API developers often use null where an object could be expected, but none currently exists.
*/