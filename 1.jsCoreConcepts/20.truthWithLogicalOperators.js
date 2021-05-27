/*
You learned in the comparative programming module that logical operators are a set of operators in programming that allow you to perform logical comparisons and operations. Logical operations involve evaluating the truth values of multiple conditions and arriving at one final truth value, that is, they consider the combination of multiple booleans and determine truth based on all of them. There are three logical operators in JavaScript and they are represented by the following symbols:

&& (AND): returns true only if all operands are true
|| (OR): returns true if any of the operands are true
! (NOT): negates the operand it's used on

Logical operators are usually used to determine truth in the context of a conditional statement, in order to decide whether or not to do something in your code. They can, however, be used for other things as well, such as declaring boolean variables based on the truth of other boolean values. For example, consider that you have three variables which must all be true before you can execute another part of your code. In the example, imagine that usernameCorrect, passwordCorrect, and connected must all be true in order for your code to be ready to execute:
*/

let usernameCorrect = true;
let passwordCorrect = false;
let connected = true;
let ready = usernameCorrect && passwordCorrect && connected;

if (ready) {
  console.log('Ready to go!'); // false value, won't execute
}

/*
Here, the code in the if statement will not execute, because ready will only be true if all of the other variables are true. In this case, passwordCorrect is false, so ready will also be false. The code uses the logical && operator to string together all the values and determine the overall truth, that is, determine whether or not everything is ready! Logical truth (the result of these logical operators) is best visualized in a series of truth tables, which can be found below:
*/

/*
The && Operator:
a-----------b-----------a && b
true	      true	      true
true	      false	      false
false	      true	      false
false	      false	      false

The || Operator:
a-----------b-----------a || b
true	      true	      true
true	      false	      true
false	      true	      true
false	      false	      false

The ! Operator:
a-----------!a
true	      false
false	      true

Remember also that logical operators have a precedence just like the arithmetic operators. ! has the highest precedence, followed by && and then ||. If you need to override the precedence, you can wrap whatever you want to execute first in parentheses in order to give it priority. Parentheses are always executed first. Here are some examples demonstrating how you can control the order of operations:
*/

let a = true;
let b = true;
let c = false;
let d = false;

console.log(a && b);                  // true
console.log(b && c);                  // false
console.log(c && d);                  // false
console.log(a && b && c && d);        // false

console.log(a || b);                  // true
console.log(b || c);                  // true
console.log(c || d);                  // false
console.log(a || b || c || d);        // true

console.log(a || b && c || d);        // true (b && c is evaluated first)
console.log((a || b) && (c || d));    // false (a || b is evaluated, then c || d, then the &&)
console.log(!(a || b) && (c || d));   // false ((a || b) is negated before && is evaluated)
