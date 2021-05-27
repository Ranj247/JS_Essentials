/*
You learned in the comparative programming module that all programming languages (including JavaScript) give you the ability to control the flow of your application by testing conditions, that is, to determine which code to execute based on whether a given condition is true or false. In JavaScript, you can do this using an if/else statement (sometimes just called an "if statement").

If statements have four parts:

The test: This is the "if" part, it tests whether the condition is true or not
The condition: The boolean value that is actually being tested to determine if it's true or false
The code if true: what will be executed if the condition is true
The code if false: what will be executed if the condition is false
The condition can be any boolean value or any expression which will produce a boolean result. This includes multiple conditions tested using logical operators such as &&, || and !, which you learned about in previous units.

The syntax for an if statement is simple:

if (condition) {
  // code if true
} else {
  // code if false
}

In actuality, the else part is optional because saying "if the condition is true, do something, else do nothing" is the same as saying only "if the condition is true, do something". However, it exists to give you the option to do something different if the condition is false, rather than just doing nothing. If statements are usually used with a combination of comparison operators and logical operators in order to make decisions in your code. For example, here's an if statement that evaluates whether a user is logged in and displays a message accordingly:

let userLoggedIn = false;
if (userLoggedIn) {
  alert('Welcome! You have logged in.');
} else {
  alert('Please log in.');
}

In this example the message will initially be "Please log in." because userLoggedIn is false. If you were to change it to true, though, the other message would be displayed. Notice by the way that when testing if something is true, we don't need to explicitly check. In other words, if (userLoggedIn) and if (userLoggedIn === true) are effectively the same thing. If you didn't want to display a message if the user is not logged in, you could simply eliminate the else block. Here is another example which uses comparison operators to make a decision:
*/

let a = 1;
let b = 2;
let firstGreater;

if (a > b) {
  firstGreater = true; 
} else {
  firstGreater = false;
}
console.log(firstGreater);

/*
In this example, we begin with three variables, a, b, and firstGreater. Initially firstGreater is declared but has a value of undefined. The if statement checks to see whether a is greater than b and if so it sets firstGreater to true. Otherwise, it will be set to false. You can use conditional (if/else) statements to control the flow of your code by testing any condition you like. You will use these control structures frequently as you progress and learn more about JavaScript and other programming languages.
*/