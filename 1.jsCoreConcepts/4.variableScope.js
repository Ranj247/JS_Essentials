/*
The previous units have taught you that there are three ways to declare variables in JavaScript:

let myVar = "some variable";
const myVar = "some variable";
var myVar = "some variable";

The primary differences between the three declarations above revolve around their scope. In the context of object-oriented programming, scope refers to the context within which something exists. In the context of a loop, for example, its scope is bounded by its opening and closing curly braces. The same is true for a function, a conditional statement, a class or any other code block.
*/

/*
There are two types of scope:

Global Scope
Local Scope
*/

/*
Global Scope:
In JavaScript, any code that exists at the top level of your application, that is, anything that is not inside any function, loop, conditional statement and so on, has global scope.
*/

/*
Local Scope:
Any code that exists inside a set of curly braces, for example, code contained within the opening and closing braces of a loop, a conditional statement, or a function, has local scope.
*/

/* This contrast is easy to see with a simple example: */

// let globalVar = "My global variable" // globalVar has global scope

// for (let i = 0; i < 5; i++) {
//   let localVar = "myLocalVar";
//   console.log(i); // Both i and localVar have local scope
// }

/*
In the above, globalVar is accessible everywhere, even inside the loop. It can't be redeclared since it was declared with let, but it can be accessed, updated and manipulated inside the loop or anywhere else in the code. 
*/

/*
localVar and i, on the other hand, are not accessible anywhere outside the closing bracket of the for loop. Once the for loop is finished, those variables no longer exist. You can think of scope as simply "the current block of code". If you're not in a designated code block surrounded by curly braces, you are looking at the global scope. This goes for loops, functions, conditionals, and other types of JavaScript constructs:
*/

/* Global scope */

// if (...) {
//   // Local scope
// }

/* More global scope */

// function myFunction() {
//   // Local scope
// }

/* More global scope */

// for (...) {
//   // Local scope
// }

/*
There is a third type of scope called block scope, too. This is similar to local scope, but refers specifically to the code block the variable exists in. This is relevant when there is nesting in your code, where a variable inside a function might be local, but inside an if statement or loop within the function, anything declared is local only to the loop code blocks. Another way to think about it is that the furthest level out in your code is global scope, the next level in is local, but if within the local scope there is another level of code like a loop, if statement, etc, then the "local" scope in the function is now somewhat like the function's "global" scope, and anything further in is block scope. If this seems confusing, take a look at this example:
*/

// let globalVar = 'a global variable';

// function myFunction() {
//   let localVar = 'a local variable';

//   if (localVar) {
//     let blockVar = 'a block-scoped variable';
//   } else {
//     let otherBlockVar = 'a different block-scoped variable';
//   }
// }

/*
Above, the two block-scoped variables are accessible only within their respective code blocks, bounded by the curly braces. 

The local variable is accessible anywhere in the function, and the global variable is accessible anywhere in the entire script. Scope is not just a construct of JavaScript either. 
*/

/*
 As you learned in the comparative programming module: -
 Python also uses code blocks, but instead of being bounded by curly braces they are bounded by the indentation level. That means that in Python, anything at the outermost indentation level is considered global and anything indented is local to that specific indentation level. 
 
 As you work with these languages more and more, scope will become more clear. When you're writing code, remember to always keep in mind the scope in which you're writing, especially when defining variables. Your code's functionality is dependent on everything having the proper scope.
*/