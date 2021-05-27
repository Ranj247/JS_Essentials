/*
You learned in the comparative programming module that there are a few different ways to iterate (loop) in software development. One of those ways is by using the for loop. A for loop repeats the same operation or block of code until a specified condition is false. They can be used for any operation that needs to be repeated multiple times based on a conditional expression, such as looping through all the rows in an HTML table or adding a CSS class to a series of HTML elements. The syntax for a for loop requires that you provide an initializing expression, a condition to evaluate and an incrementing expression, as well as the code to repeat:

for (initializingExpression, condition, incrementingExpression) {
  // code to repeat
}
The loop works as follows:

The initializingExpression executes
The condition is checked
If the condition is true, the code to repeat is executed
The incrementing expression is executed
Steps 2 thorugh 4 are repeated until the condition is false
The incrementing expression is executed a final time
Code outside the loop continues
Loops are often used in the context of arrays, which you might recall from the comparative programming module are like lists of items. You can use a for loop to iterate through all the items in an array and perform the same action on all of them, for example:
*/

let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
let numberOfFruits = fruits.length;

for (let i = 0; i < numberOfFruits; i++) {
  console.log(fruits[i] + ' are delicious!');
}

console.log('I love fruit!');

/*
Run this code
In the example we first declare an array of fruits, then store the array's length in a variable called numberOfFruits. Knowing the length of the array, we decide we want to iterate through each fruit, say it's delicious and then print "I love fruit!" when the loop is complete. To do this the initializingExpression sets a variable i to 0, which is the first index in the array ('apples'). The condition being checked is whether i is less than the total number of fruits (4), and we need to use less than here rather than less than or equal to, because when i is equal to 4 the loop will try to get fruits[4] which doesn't exist. Remember that the indexes start with zero, so the fourth fruit is actually index 3. After each iteration of the loop, the incrementingExpression increments i by one using the increment operator (++). Finally, when i is no longer less than 4, loop iteration is complete so control returns to the global scope and prints "I love fruit!".
*/