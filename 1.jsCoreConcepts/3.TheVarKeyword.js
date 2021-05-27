/* 
The final way to declare a variable in JavaScript is using the var keyword. In modern JavaScript it's usually considered a bad practice to use this declaration, because it creates a variable which has global scope, which means it can be unintentionally changed outside of its own scope. Despite this, there are some situations where this type of variable is actually required, so it's good to know it exists and how to use it.

You can define a variable with var in the exact same way as you would using let or const:

var x = 3;

Variables declared with var behave significantly different than their const and let counterparts. The most significant difference is that variables declared with var are accessible outside the scope in which they are declared. This means that they can be inadvertently overwritten and can create bugs in your code that are difficult to detect.
*/

/* Consider the following code: */

// var i = 0; // Line 1
// // Line 2
// for (var i = 0; i <= 5; i++) { // Line 3  
//   console.log("Inside the loop:", i); // Line 4
// } // Line 5
// // Line 6
// console.log("Outside the loop:", i); // Line 7

/* The code produces the following output: */

/*
Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Inside the loop: 5
Outside the loop: 6
*/

/* 
Do you see the problem? If not, you're not alone, but look closely at what happened: On line 1 we declared a variable, i, using var, and gave it a value of 0. Then on line 3 we initiated a for loop, declaring a variable i beginning with zero and iterating through 5, incrementing i after each iteration. When the i in the loop is equal to 5, iteration stops, and the final increment takes place (i++), incrementing it to 6.  
*/

/*
However, when we logged i to the console outside the loop, i has a value of 6! It has been overwritten by the loop's i. This is because variables declared with var are not restricted with regard to being reassigned, redeclared, or reused in another scope.
*/

/* 
The first variable declared on line 1 should have remained 0 within the global scope, that is, the code outside of the loop, because the loop's code block is bounded by the curly braces. Nothing that happened inside that loop should have affected anything outside the loop, but it did, inadvertently overwriting the original i variable and then incrementing it each time the loop executed. The original variable, which should have maintained a value of 0 was lost. If you were to declare the first variable with let or const, you would have received an error when you tried to redeclare it with the same name in the for loop, preventing this issue. 
*/



/*
-------------Here are some more examples to drive the point home:-------------
*/

/* --- 1) --- */

// let i = 0;
// for (let i = 0; i <= 5; i++) {
//   console.log("Inside the loop:", i);
// }
// console.log("Outside the loop:", i);

/*
The code produces the following output:

Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Inside the loop: 5
Outside the loop: 0
*/

/*
Allowed: This is ok because the variable defined for use in the for loop is declared with let, which means it won't affect the outer one due to its scope being restricted to the loop.
*/

/* --- 2) --- */

// let i = 0;
// for (var i = 0; i <= 5; i++) {
//   console.log("Inside the loop:", i);
// }
// console.log("Outside the loop:", i);

/*
Rejected: SyntaxError: Identifier 'i' has already been declared. This is not allowed because the var variable in the loop could potentially overwrite the one outside it. Its scope is not restricted.
*/

/* --- 3) --- */

// let i = 0;
// for (i = 0; i <= 5; i++) {
//   console.log("Inside the loop:", i);
// }
// console.log("Outside the loop:", i);

/*
The code produces the following output:

Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Inside the loop: 5
Outside the loop: 6
*/

/*
Rejected: SyntaxError: Identifier 'i' has already been declared. Trying to reassign it in the for loop doesn't work either, since the loop is creating a new variable:
*/

/* --- 4) --- */

// var i = 0;
// for (let i = 0; i <= 5; i++) {
//   console.log("Inside the loop:", i);
// }
// console.log("Outside the loop:", i);

/*
The code produces the following output:

Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Inside the loop: 5
Outside the loop: 0
*/

/*
Allowed: The variable declared with var can be redeclared with let within the loop, because once again let restricts that variable's scope to the for loop:
*/

/*
Both of the Allowed options above will produce the same output, shown below. Notice that the original i is not overwritten regardless of whether it's declared with var or let, because the one declared within the loop using let is not allowed to do anything outside the loop:

Inside the loop: 0
Inside the loop: 1
Inside the loop: 2
Inside the loop: 3
Inside the loop: 4
Inside the loop: 5
Outside the loop: 0  // var i maintains its value!
*/

/*
The bottom line is that var creates a variable which can be easily overwritten anywhere in your code, so in general it is dangerous to use. If you explicitly need to be able to access a variable outside of the scope in which it is declared, however, var is the only way. For example, consider this:
*/

// createVariable = true;
// if (createVariable) {
//   let myVar = "Here's your variable!";
// }

// console.log(myVar);  // ReferenceError: myVar is not defined

/*
The above throws a ReferenceError because outside the scope of the if statement (i.e. outside its curly braces), myVar is not defined because it was created within the if statement using let. 
*/

/* 
If you explicitly need access to this variable outside the if statement, you can declare it using var instead: 
*/

// createVariable = true;
// if (createVariable) {
//   var myVar = "Here's your variable!";
// }

// console.log(myVar);  // "Here's your variable!"

/*
This is fine as long as you remember that myVar now has global scope, which means that it can be changed from anywhere in your code. That includes in other if statements, loops, functions, or anywhere else in the code. There is almost always an alternative to using var, so use it sparingly because it can create bugs in your code that are difficult to detect. In general, you should use let to declare most variables. For those that won't change, you should use const, and in rare cases where you need to access or modify a variable outside the scope in which it is defined, use var.
*/