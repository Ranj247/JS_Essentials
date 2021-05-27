/*
As you've just learned, there are actually three different ways to assign a variable in JavaScript:

let myVar = "a variable";
const myVar = "a variable";
var myVar = "a variable";

So how do you know which one to use? To understand the answer you must first understand variable scope:.

The first and most common way you will declare variables is using the let keyword. This keyword creates a variable which has block scope. This means that the variable will only be available for use within the code block in which it is declared. For example, if you declare a variable inside a conditional statement, such as an if statement the variable will only be defined in the context of the opening and closing curly braces (which you may recall define the boundaries of the current code block):
*/

// if (true) {
//   let myVar = "hello!";
//   console.log(myVar);
// } else {
//   console.log("Inside the else block: ", myVar);
// }

/*
The above will work just fine, and will log "hello!" to the console. Because the condition is true, the variable myVar is declared in the if block and then immediately logged to the console. What if we were to change it to if (false) though?
*/

// if (false) {
//   let myVar = "hello!";
//   console.log(myVar);
// } else {
//   console.log("Inside the else block:", myVar);
// }

/* 
Now, because the condition is not true the if statement will attempt to execute the else block and log "Inside the else block: hello!" to the console. However, because myVar is declared with let and thus has block scope, it is restricted to the if block, that is, it cannot exist outside the closing curly brace (}) just before the else. Running this code will produce a ReferenceError, because in the context of the else block, myVar is not defined.
*/

/* 
-----Variables declared with let have three defining characteristics:-----
1) They have block scope, which means they are only defined within the confines of their own code block (bounded by {curly braces})
2) They cannot be redeclared within the same scope. In other words: 
*/

// let myVar = "a variable";
// let myVar = "a different variable";  
// console.log(myVar); // this will throw a SyntaxError. myVar is already declared.

/* 
3) They can be reassigned, regardless of scope. In other words:
*/

// let myVar = "a variable";
// myVar = "a different variable";  
// console.log(myVar); // We're not redeclaring it, rather giving the same variable a new value.

/* 
The let keyword was introduced in 2015 in order to combat issues with variables being overwritten accidentally when their values "leaked" into other scopes. The restrictions on let-declared variables with regards to scope, reassignment and redeclaration prevent these issues from happening. You'll learn about two other ways to declare variables in the upcoming units, but the one you'll use most commonly is this one.
*/