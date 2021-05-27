/*
In the previous unit you learned how to define functions in JavaScript. We defined a simple function to demonstrate, which logged a string to the console:

function printString() {
  console.log('Hello world!');
}

The definition of this function is pretty straightforward, but what if you wanted to log something other than 'Hello world!'? Of course you could just change the function definition to log something else, but what if you wanted it to be truly dynamic, so the user could specify what they wanted it to print? The solution here is to redefine the function so that it uses a parameter.

In the definition of a function, a parameter is a variable that goes in the parentheses after the function name and allows the function to take some input from its user (the "caller"). If you wanted to redefine the function above such that the string it logs to the console is dynamically chosen by the user, all you need to do is define the function with a parameter:
*/

function printString(message) {
  console.log(message);
}
printString('Hello from the function!');

/*
Inside the function, the parameter message becomes a variable that can be used throughout the function's code block. The variable is set when the user calls the function, by passing the message they would like printed in the parentheses when they call the function, e.g. printString('Hello!');. You'll learn more about calling functions in the next unit but first let's talk about return statements.

If you ran the above code, you might have noticed that JavaScript Tutor showed the return value as undefined. This is because the function above simply prints something to the console. It doesn't return anything to the user. To make a function return some sort of result to the user, you can use the return statement. To illustrate, here's a new function which takes two numbers as parameters and returns their sum:
*/

function addTwo(num1, num2) {
  return num1 + num2;
}

console.log(addTwo(3, 5));

/*
This time, when the function is called you can see that it returns the result 8: the sum of 3 and 5 (the function's parameters). Defining functions with parameters and returning results is simple, and updates our generic definition of a function to the following:

function someFunctionName(p1, p2, ... pN) {
  // code to execute
  // can use p1, p2, ... pN as variables

  return someResult;
}
Your functions can have as many parameters as you wish (separated by commas) and they can be called whatever you want. You should, however, stick with standard JavaScript naming conventions and give them names that make sense and which use camelCase. Also keep in mind that the more parameters there are the more complex the function is to use. In general it's a good idea to try to keep your functions as small and simple as possible. If one gets to be too complex, it might mean that some of its code could also be split off into its own function. You can also return anything you want. Some functions return a single value, such as the above addTwo() function which returns the sum of two numbers, but it's possible and not uncommon to return other data types as well, such as boolean results, arrays, objects, and even other functions. The parameters and return value for your function depend entirely on its intended functionality.
*/