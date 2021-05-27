/*
Ternary expressions give you a shorthand way to create the same conditional logic you learned about in the last unit. While this shorthand functionality is available in other languages as well, this particular syntax is specific to JavaScript. To demonstrate, below is a standard conditional statement and its equivalent ternary expression:
*/

/* Standard conditional statement: */

/*
if (condition) {
  // code if true
} else {
  // code if false
}
*/

/* Equivalent ternary expression: */

/*
condition ? code if true : code if false
*/

/*
As you can see the ternary expression is much more concise, but there is a downside to it...

Ternary expressions are best used for simple conditonals. Because the expression is all on one line, they are not really good for situations where you want to execute multiple lines of code based on one of the conditions. While it's certainly possible to do this with the strategic use of parentheses and semicolons, it is not recommended because the whole point of the ternary is to make your code more concise and easier to read. The most common use for a ternary expression is in assigning a value to a variable where the value you want to assign is dependent on a condition:

let myConditionalVariable = someCondition ? trueValue : falseValue

As a more practical example, consider that a developer wants to assign a price to a user's plan based on their membership level, either "basic" or "pro". To create the price variable they could use a ternary conditional expression:

let memberType = 'basic';
let price = memberType === 'basic' ? 5 : 10;
In the example, the condition that is evaluated is whether memberType === 'basic'. If this condition is true, then price will be 5, and otherwise it will be 10. The equivalent long-hand conditional expression would be:

let memberType = 'basic';
let price;

if (memberType === 'basic') {
  price = 5;
} else {
  price = 10;
}
These expressions can be chained together to test multiple conditions as well, demonstrated here in a ternary conditional that adds a couple more plans to the above logic. This is the ternary version of a conditional statement that tests multiple conditions, which you'll learn about in the next unit:

let memberType = 'elite';
let price = memberType === 'basic' ? 5
          : memberType === 'pro' ? 10
          : membertype === 'elite' ? 20
          : 0;
This is obviously much less verbose than a whole series of if statements. Ternary conditional expressions are great when used correctly but can actully make your code less readable if overused, so while it might be tempting to try to get your entire application written on one line, you should always keep readability in mind.
*/