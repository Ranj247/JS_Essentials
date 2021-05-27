/*
In JavaScript there are two operators which don't exist in some other languages (namely Python). They are the increment (++) and decrement (--) operators. These operators offer a shortcut for adding one to a value. The following two pieces of code are equivalent:
*/

/*---------Without Increment Operator:---------*/
let a = 1;
a = a + 1;
console.log(a);


/*---------With Increment Operator:---------*/
let b = 1;
b++;
console.log(b);


/*
In both samples above, x is incremented by 1 and becomes 2. This is why you see x++ in the syntax of some loops in JavaScript:
*/

for (let a = 1; a < 4; a++){
  console.log(a);
}

/*
The last step to execute after each iteration of the loop is x++, which increments it by 1. Once x is no longer less than 10, the loop stops and code execution continues outside the loop. The same works for decrementing with --, that is, the following loop will iterate backwards from 10 to 0:
*/

for (let b = 5; b >= 1; b--){
  console.log(b);
}

/*
You can use the increment and decrement operators to declare a new variable and increment/decrement the original one simultaneously, too, by using them either as a prefix or a postfix. If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing. If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing. The following examples are from the MDN website article on incrementing:
*/

/* Postfixing: */

let c = 3;
d = c++;        // d = 3
d1 = c++;       // d1 = 4
console.log(d);
console.log(d1);


/* Prefixing: */

let e = 3;
f = ++e;        // f = 4
console.log(f);


/*
There's nothing special going on here. The rules above apply the same to the decrement operator. These operators don't exist in all languages but they are here in JavaScript to be used in reducing your code's verbosity and complexity. Whenever you need to increment or decrement a value, you can do it concisely and in a variety of ways by using the increment or decrement operators.
*/