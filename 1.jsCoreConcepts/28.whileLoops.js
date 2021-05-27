/*
While loops are another method of repeating the same block of code multiple times in JavaScript. They are subtly different from for loops, though, because a for loop almost always has an end (unless you deliberately cause it to loop forever). A while loop on the other hand will repeat the operation or block of code indefinitely until a specified condition is false. The syntax for a while loop is simpler too. All you need to provide is the condition and the code you'd like to repeat:

while (conditon) {
  // code to repeat
}

While loops are commonly used in gaming or in situations where you want the user to have the control to break out of the loop. Using an expression like while (true) {...} will repeat the code in the {...} forever - an infinite loop. Often it's possible to do the same thing with a while loop as you can with a for loop, so it's good to know both. Here is the same example as the previous unit using a while loop:
*/

let fruits = ['apples', 'oranges', 'bananas', 'cherries'];
let numberOfFruits = fruits.length;

let i = 0;
while (i < numberOfFruits) {
  console.log(fruits[i] + ' are delicious!');
  i++;
}

console.log('I love fruit!');
