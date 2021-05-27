/*
The second way to declare a variable in JavaScript is using the const keyword. const is an abbreviation for constant, an allusion to the idea that these variables should be constant, that is, they shouldn't change. In JavaScript, const variables are typically used to store data that won't be modified at any point in the code - things like settings, URLs which might be called, filenames, and the like.

You can define a variable with const in the exact same way as you would using let, and it will behave almost identically:

const google = "https://www.google.com";
*/

/*
Variables declared with const are similar to those declared with let in some ways. They have block scope like let variables and will behave identically in that respect, but they do have a few key differences:

1) Unlike let variables, constants cannot be reassigned or redeclared. Attempting to redeclare the variable or change its value in any way will fail:
*/

// const url = "www.google.com";
// const url = "www.youtube.com";  // SyntaxError: Identifier 'url' has already been declared
// url = "www.google.com";         // TypeError: Assignment to constant variable.

// const number = 4;
// number = number + 2;            // TypeError: Assignment to constant variable.
// number += 2;                    // TypeError: Assignment to constant variable.

/*
2) Unlike let variables, constants cannot be declared without being assigned a value:
*/

// let url;    // Ok (url is undefined, but declared)
// const url;  // SyntaxError: Missing initializer in const declaration

/* 
3) Arrays and objects stored in constants can be modified, but you can't reassign a new object or array to the same constant:
*/

// // Define a constant object:
// const john = {name: "John", age: 30, location: "US"};

// john.age = 31;  // Ok, we're changing the object property, not the constant itself
// john['birthday'] = 'April 25';  // Ok, we're modifying the object, not the constant itself
// john = {name: "John", age: 31, location: "Ireland"};  // NOT ok, we're changing the constant's value

// // Define a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// cars[0] = "Toyota";  // Ok, we're updating the array element, not the constant itself
// cars.push("Audi");   // Ok, we're updating the array, not the constant itself
// cars = ["Toyota", "Volvo", "BMW", "Audi"];  // NOT ok, we're changing the constant's value

/* 
Constants should be used to store data that won't change. If the data might change, use let instead. It's important to remember also that because both let and const are block scoped, and you cannot redeclare either type of variable, you cannot declare a constant with the same name as a variable declared with let, or vice versa, within the same scope. You'll learn more about scope in an upcoming unit, but there's one more type of variable you need to know about first.
*/