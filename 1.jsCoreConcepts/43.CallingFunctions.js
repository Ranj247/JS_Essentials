/*
So far you've learned three things about functions in JavaScript:

How to define a function
How to take parameters
How to return results

The last thing you need to know to really get the most out of your functions is how to call them. Calling a function executes the code you defined in the curly braces, and is the mechanism by which your code block can be reused over and over with ease. You can think of calling a function like a shortcut command for executing your block of predefined code.

To call a function, all you need to do is use the name you chose followed by a set of parentheses while making sure to pass any required parameters to the function. To demonstrate, let's look in a little more detail at the addTwo() function you used in the last unit:

First, we define the function using the function keyword and set it up to take two parameters: num1 and num2. The code block of the function just returns their sum:

function addTwo(num1, num2) {
  return num1 + num2;
}

At the moment this function doesn't do anything. It's simply defining a name (addTwo()) we can use to execute the code in the curly braces. Of course, to actually do that, we need to call the function and tell it which two numbers to add. Until you do that, the function will exist but it will be completely ignored (what a lonely existence!)

To call the function and give its life some meaning, just pass it a couple numbers to add and it will happily return their sum:

function addTwo(num1, num2) {
  return num1 + num2;
}
addTwo(3, 5);

Calling the addTwo() function requires you to match the function definition by passing it the parameters it expects to receive. When passed into a function, these parameters are called arguments, so in the above function, its parameters are num1 and num2, and its arguments when called are 3 and 5. The arguments can be anything you want and this is how the function becomes dynamic. However, no matter what you pass it as arguments, the addTwo() function will always try to add the two parameters together and return their sum.

This is important to understand because it explains how errors happen in JavaScript! Every time you see an error, it effectively means that you asked a function to do something it wasn't able to do - the computerized version of asking your best friend to tell you the sum of 'antelope' and 'gasoline'. Do you think they would be able to answer? (Fun fact: JavaScript actually DOES know how to add 'antelope' and 'gasoline'...try passing them into the addTwo() function and see what happens!)

What to do with the return value:
The final thing to understand when it comes to defining and using functions is what to do with the return value. In the above function you simply call it and that's it. You're not actually doing anything with the return value. It's much more common to store the result of a function call in a variable so you can use it later. To do this, just set a variable equal to the result of the function call:
*/

// function addTwo(num1, num2) {
//   return num1 + num2;
// }
// let sum = addTwo(3, 5);
// console.log(sum);  // 8

/*
The above code first defines the function, then calls it, storing its return value in a variable called sum. At this point, that variable could be used for anything you wish. 
*/

/*
To demonstrate the power of this concept, consider the following more complex code which combines several concepts you've learned so far and uses the addTwo() function to calculate the sums of a series of operands:
*/

// Define an array of arrays (nested data structure)
let operands = [
  [3, 5],
  [8, 6],
  [1, 2],
  [9, -2]
];

// Define a function with parameters
function addTwo(num1, num2) {
  return num1 + num2;
}

// Create an empty array to hold the sums
let sums = [];

// Use a for loop to iterate the operands and call addTwo()
for (let pair of operands) {
  let sum = addTwo(pair[0], pair[1]);  // array indexing + function call
  sums.push(sum);  // array methods
}

// Log the sums
console.log(sums);

/*
The above combines several things you've learned about over the last several units:

operands is a nested data structure
addTwo() is a function with parameters, which returns a result
A for...of loop is used to iterate the operands array of arrays
Since each element of the operands array is an array itself, we use array indexing to get each element's first (index 0) and second (index 1) values
We pass these values to the addTwo() function as arguments to get their sum, and store it in a variable
We use the built in push() method (aka function) to push the sum into the array of sums
The result of this is an array of the sums of all the operands called sums! By utilizing the simple addTwo() function over and over again in a loop, we are able to harness the speed of the computer to calculate the sums of all these numbers. Just how fast is that? Developers have consistently found that JavaScript can execute almost a billion iterations per second for simple code like the above. Can you do that?
*/