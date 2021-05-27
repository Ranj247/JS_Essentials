/*
Conditional statements are not limited to only two outcomes. In all programming languages including JavaScript, you can chain if statements together using an if/else if/else pattern:

if (condition 1) {
  // condition 1 true code
} else if (condition 2) {
  // condition 2 true code
} else if (condition 3) {
  // condition 3 true code
} else if (condition n) {
  // condition n true code
} else {
  // default code
}

You can string as many conditions together as you like, but most developers try to keep it to 3 or 4 at the most. If you need more than that, it might be better to use a different method.

The logic and syntax for the if/else if/else pattern is exactly the same as for a conditional with only two options, you simply start each else if where the previous one left off. Here is an example that demonstrates the longhand version of the chained ternary expression you saw at the end of the previous unit where the developer wished to set a different price based on the user's plan:
*/

let memberType = 'elite';
let price;

if (memberType === 'basic') {
  price = 5;
} else if (memberType === 'pro') {
  price = 10;
} else if (memberType === 'elite') {
  price = 20;
} else {
  price = 0;
}
console.log(price);  // 20

/*
Here we begin with a member of type elite and a variable price declared but not defined. The conditional tests whether the member is 'basic', 'pro' or 'elite' and defines price accordingly. The console.log() statement at the end will print 20. The conditions are checked in order until one is found to be true. If none were found to be true then price would be set to 0 in the else block, and again if you wanted price to remain undefined if none of the conditions were met you could simply eliminate the else block.
*/