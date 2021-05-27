/*
Functions are reusable blocks of code that we can invoke whenever we need them. In fact, we've been using a function since the very beginning of this entire set of modules: console.log(). The log() function is a built-in, reusable block of code which takes a parameter (a string), and prints it to the console. In Python there is a similar function called print(). There are thousands of these functions scattered all throughout JavaScript and other programming languages. In this unit though, you're going to learn how to write your own functions to do whatever you need. All functions in JavaScript are defined in almost the same way. Most of the time, a function will take in some parameters and return a result, but these are not necessary. Sometimes a function just completes a task and doesn't return anything at all. The generic syntax for defining a function in JavaScript is:

function someFunctionName() {
  // code to execute
}

You need only three things to define a function in JavaScript:

The function keyword
A function name of your choosing, ending with ()
The code to execute, enclosed in { curly braces }
To demonstrate, let's define a simple function that prints a predefined string to the console using console.log():
*/

function printString() {
  console.log('Hello world!');
}

printString();

/*
That's it! The function keyword tells the JavaScript engine that we're about to define a function. The function name comes next and gives us a specific name (printString()) we can use later to reference this reusable block of code. The code enclosed in the curly braces can do anything you want. You can use loops, conditional statements, data structures, even define other functions or call other functions like we've done here with console.log(). When this function is invoked (or "called"), Hello world! will be printed to the console. In the upcoming units you'll learn how to make your functions dynamic as well as how to actually use them.
*/