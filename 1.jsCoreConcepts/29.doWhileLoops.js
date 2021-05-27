/*
A while loop does not guarantee that the code within its statement block will execute. If the condition is never evaluated to true, the code will never be executed. Consider this example:
*/

let i = 10;
while (i < 10) {
  console.log('checking i...');
  console.log('i is', i);
}
console.log('Loop complete');

/*
Here, the console.log will never happen because i is assigned above as 10 which makes the while condition false from the start. Sometimes you might want the code to always be executed at least once, though. For this purpose you have the do ... while loop:
*/

let x = 10;
do {
  console.log('checking x...');
  console.log('x is', x);
} while (x < 10);
console.log('Loop complete');

/*
In this case, the loop will always be executed at least once because the do statement comes before the while condition is checked. This is a handy trick to have up your sleeve if you need to guarantee that a piece of code always get executed at least once while it's still able to be controlled by a while loop that checks a condition on every subsequent iteration.
*/