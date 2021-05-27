/*
Type coercion in JavaScript is the implicit/automatic conversion of one data type to another. Since JavaScript is a weakly typed language, JavaScript will automatically convert data types to different data types as needed. For example, in JavaScript when you add a string to a number, the number is implicitly converted to a string, and the result is actually the concatenation of the two strings:
*/

console.log(1 + "1");  // "11"

/*
This is in contrast to languages like Python which do not do this and will instead throw an error, letting you know that it's not possible to add a number and a string together. Obviously in the above case, the result is not correct. This also happens in other situations even if two of the same data type are involved in an operation that would normally return a different type. Consider the addition of a series of booleans:
*/

console.log(true + false);        // 1
console.log(true + true + true);  // 3

/*
Do you see what's going on here? Because the addition operator normally returns a number, and the sum of some number of booleans can't be represented any other way, JavaScript converts the booleans to their binary values (1 for true and 0 for false) and then adds them together. Thus, the first line is converted to 1 + 0, which equals 1, and the second is converted to 1 + 1 + 1 which equals 3. This even happens when adding two numbers together, in some situations

To resolve the above issues, sometimes you'll need to explicitly convert the values you're working with into the proper data type before manipulating them. To resolve the issue with adding a number to a string, either remove the quotation marks from around the string or use the built-in Number() method to convert it to a number:
*/

console.log(1 + "1");          // "11"
console.log(1 + 1);            // 2
console.log(1 + Number("1"));  // 2

/*
One extremely important consideration with respect to JavaScript's type coercion is the issue of equality. You might recall that there are two ways to check if two things are equal in JavaScript: == and ===. The important thing to realize is that using == implicitly coerces data types! This means that 1 == "1" will return true. In reality, these two things are not equal: one is a string and the other is a number. To get the proper result, you must use ===. This is why it's considered a best practice to always use === when checking equality unless you have a specific reason not to. Doing so will ensure that you will never end up with two things that are not really equal being treated as equal because JavaScript coerced them to the same data type.

Type coercion is a double edged sword. It is helpful because it allows us to assume things and write less verbose code, allowing JavaScript to do some of the work for us, but it also opens the door to difficult to detect bugs since unlike its counterparts that do not implicitly coerce data types, JavaScript will not throw an error when you try to perform operations on data types that are really not compatible.
*/