/*
In computing, equal is not necessarily identical, nor is it even strictly equal. In the context of computing and software development, there is a difference between whether two things have the same value, whether they have the same value and the same data type, or whether they are exactly the same object in memory. As you learned in the comparative programming module, in JavaScript there are two primary ways to compare equality:
*/

let a = 1;
let b = "1";

console.log(a == b);      // true
console.log(a === b);     // false

/* 
== (Loose Equality): Compares values after coercing them to compatible types 

When using ==, the first number is coerced to a string before the comparison takes place, which causes JavaScript to determine that 1 (a number) and "1" (a string) are equal. In reality, they are not equal. The two values were coerced to the same type.
*/

/* 
=== (Strict Equality): Compares values without type coercion, comparing data type as well 

The strict equality operator does not do this, and thus returns false because a string and a number are different data types. 
*/


/*
In short, you should always use strict equality (===) for testing equality in JavaScript unless you have a specfic reason not to. By doing this, you ensure that you will never inadvertently convert any of the items you're comparing to different data types. 
*/

/*
If you need to determine whether two objects are exactly the same object, you can also use Object.is(), which is similar to the Python is operator shown in the image here. 
*/

/*
----------------------------------Object.is()----------------------------------
The Object.is() operator takes two parameters which are the two objects to compare, and returns a boolean depending on whether they are the same object. 

While this method is not commonly used, you can read more about it here.
*/