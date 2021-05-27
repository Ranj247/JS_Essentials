/*
Now that you've got an understanding of the syntax of both simple if statements and if/else if/else statements, it's not a big leap to understanding nested conditional statements. Nesting just means that you will place some code inside of another code block (in JavaScript a code block is bounded by opening and closing { curly braces }). In the context of an if statement, the code to execute based on the condition is nested:

if (condition) {
  // nested code
  // can be multiple lines
  // all this executes if the condition is true
} else {
  // nested code
  // otherwise, all this code executes
}

To create a nested if statement, all you need to do is place an if statement inside another one:

if (condition) {

  if (anotherCondition) {
    // executes if both condition and anotherCondition are true
  } else {
    // executes if condition is true and anotherCondition is false
  }

} else {
  // executes if condition is false
}

You can also do this within the else block:

if (condition) {
  // executes if condition is true
} else {

  if (anotherCondition) {
    // executes if condition is false and anotherCondition are true
  } else {
    // executes if both condition and anotherCondition are false
  }
}

You're probably also realizing by now that you could do it in both places, or you could continue nesting deeper and deeper to your heart's content. This is true, but there comes a point when a better option is usually the right one. Consider this code, which only sets a variable if several conditions are true:

if (condition1) {
  if (condition2) {
    if (condition3) {
      if (condition4) {
        if (condition5) {
          // execute deeply nested code
        }
      }
    }
  }
} else {
  // condition1 is false
}

Now imagine if there were other code around each nested if statement, or if they each had an associated else, or there were multiple possibilities with a series of else if's. You can see how this code would get unruly quite quickly. Wouldn't it be much cleaner to use a logical operator like && and test only one variable instead?

let allTrue = condition1
           && condition2
           && condition3
           && condition4
           && condition5;

if (allTrue) {
  // execute deeply nested code
} else {
  // allTrue is false
}
There are other ways to consolidate this code further too which you'll learn in the future. The point is that nesting should only go as far as readability allows. You can theoretically nest as deeply as you want, but when working with conditionals in this way you should always keep readability in mind.
*/