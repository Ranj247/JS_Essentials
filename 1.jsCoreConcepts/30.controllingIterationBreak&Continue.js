/*
Iteration and looping aren't much use if you can't control them. You learned in the comparative programming module that you can use the break and continue statements within for loops and while loops to control them by skipping iterations or breaking out of the loop completely. Let's review that here and look at how to do it specifically in JavaScript. Each statement has a distinct purpose:

break: breaks out of the loop entirely.
continue: continues with the next iteration of the loop, effectively "skipping" an iteration.
These statements are almost always coupled with a conditional check which gives the developer the ability to break the loop or continue with the next iteration only when a specific condition is met. Here's an example of a while loop that will log every number from 0 to 1 million ... or will it...?
*/

let i = 0;
while (i <= 1000000) {
  if (i === 5) {
    console.log('Breaking!');
    break;
  }
  console.log(i);
  i++;
}
console.log('Loop has been broken.');

/*
In the above example, even though the loop is set to continue until 1,000,000, the if statement within the loop checks on each iteration to see if i is 5 and if it is, the loop will be broken by the break statement. Otherwise, i is logged to the console and then incremented and the loop repeats normally. The same thing works for a for loop:
*/

// for (let i = 0; i <= 1000000; i++) {
//   if (i === 5) {
//     console.log('Breaking!');
//     break;
//   }
//   console.log(i);
// }
// console.log('Loop has been broken.');

/*
Alternatively, you can use the continue statement to skip an iteration of the loop under a certain condition. For example, consider a situation where you only want to log even numbers between 0 and 10:
*/

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
// console.log('Loop complete.');

/*
The above code is similar to the break statement except that the continue statement doesn't break out of the loop entirely. Instead, it continues to the next iteration each time the condition is met. The condition in this case uses the modulo operator to check whether or not the number is not even (remember that any number which has a remainder of 0 when divided by 2 is even). If the number is not even, the iteration is skipped.

Labelling:
In the event you're working with a nested loop, you can label your loops in order to continue or break a specific label:
*/

// let i = 0;
// iLoop:
//   while (i <= 1000000) {
//     let j = 0;
//     jLoop:
//       while (j <= 100) {
//         if (j === 3) {
//           console.log('Breaking the outer loop from the inner loop.');
//           break iLoop;
//         }
//         console.log('j is', j);
//         j++;
//       }

//     if (i === 5) {
//       console.log('Breaking!');
//       break;
//     }

//     console.log('i is', i);
//     i++;
//   }
// console.log('Loop has been broken.');

/*
This example is a little more complex, but we can break it down: The outer loop is set to iterate from 0 to 1 million. If it encounters 5, the if statement within the outer loop will break it. However, before it hits this if statement, there is another while loop set to iterate a variable j from 0 to 100. Within that loop is an if statement that checks each iteration to see if j === 3. If that condition is true it will break the outer loop using the label iLoop!

When the outer loop is originally created it is given a label of iLoop. If we had simply used break; inside the inner loop rather than break iLoop;, it would have broken the inner loop (the one labelled jLoop) and continued with the outer one. The if statement checking whether i === 5 would still have broken the outer loop at that point, but using a label allowed us to break it from inside another loop. This technique is not widely used, but if you find yourself in a situation where you need to break out of a specific loop, remember that you can label your loops and attach that label to a break or continue statement later on.
*/