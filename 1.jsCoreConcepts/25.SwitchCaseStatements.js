/*
There's one more pattern you can use to determine the execution of your code based on various conditions: the switch case statement. These statements are similar to if/else statements except that they give you the ability to handle many conditions at once without excessive use of else if clauses that can make your code messy. Switch statements are slightly different from standard conditionals in that they're usually used with an expression rather than a condition. This means that while an if statement is used to test whether a condition is true or false, a switch case is usually used to check the value of a variable and respond accordingly. The syntax for a switch statement is as follows:

switch (expression) {
  case 'value1':
    // code block 1
    break;
  case 'value2':
    // code block 2
    break;
  case 'valuen':
    // code block n
    break;
  default:
    // default result
}

Like conditional statements, you can string as many cases together as you want. A switch case evaluates the expression one time and then compares its result to all the cases. The code executed will be the first case that matches. A good example might be using a switch case to determine which day of the week it is based on a number, 0 through 6. Assuming "Sunday" is day 0, your switch statement might look like this:
*/

// let day;
// let dayNumber = 2;

// switch (dayNumber) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
//   default:
//     day = 'Invalid day number';
// }

// console.log(day);  // Tuesday

/*
First day is declared but assigned no value, then dayNumber is set to 2. Case 2 in the switch case sets day to 'Tuesday' which is then logged to the console. In this situation the variable dayNumber is explicitly set, but most of the time you will see a switch case used to return the result (e.g. the day of the week in this example) from a function based on the value passed into it. For this example, that would look like this:
*/

function findDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Invalid day number';
  }
}

let day = findDayOfWeek(2);
console.log(day);  // Tuesday

/*
It's important to remember the break statement in each case if the case doesn't return something, because without it the switch case will keep going through the rest of the cases. It's also important to remember that switch cases use strict equality when checking the cases, so the expression result must be both the same value and the same type for the case to be triggered. If you don't define a default case and no other case matches, the code will continue along outside the switch statement. as if it wasn't even there.

Switch case statements are nice when you need to test a single expression for many different possible results, but they are not as commonly used as the other conditional tools you've learned in this module. Nevertheless, they are a great tool to have in your arsenal.
*/