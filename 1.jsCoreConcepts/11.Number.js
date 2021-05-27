/* 
The Number is one of the primitive data types in JavaScript. It is a wrapper that represents any kind of number, or when used as a function, can convert another value into a number. While other languages have different types of numbers such as integers (whole numbers), floating point (decimal) numbers and so on, in JavaScript every number is just a number.
*/

/* Most often, you will use numbers as variables by declaring a variable that is a number:*/

let myNumber = 123;

/*
Once declared, you can now use this variable like you would a number in everyday life:
*/

myNumber += 1;  // Adds 1, now myNumber is 124

// Declare another variable and multiply them
let multiplier = 2;
let product = myNumber * multiplier;
console.log(product);  // 248
console.log(typeof product);  // "number"

/*
In JavaScript, every number is a floating point number. That means that unlike in other languages, an integer when compared with it's decimal equivalent will be the same:
*/

let myInteger = 123;
let myDecimal = 123.0;
console.log(myInteger === myDecimal);  // true

/*
When used as a function, Number() will convert another value such as a string, boolean, or other data type into a number. Falsy values will be converted to zero, truthy values will be converted to 1, values that cannot be converted to a number will be converted to NaN, and numbers greater than or equal to 1.8 x 10^308 will be converted to the constant Infinity (or -Infinity if the number is negative):
*/

console.log(Number("123"));       // 123
console.log(Number(null));        // 0
console.log(Number(true));        // 1
console.log(Number("Hello!"));    // NaN (Not a Number)
console.log(Number(1.8e308));     // Infinity
console.log(Number(-1.8e308));    // -Infinity

/* 
Numbers also have a number of methods and properties available for manipulating them and retrieving information about them. A table of the methods you'll most likely use in your everyday JavaScript development is below:
*/

/*
Method/Property-----Purpose-------------------------------------Usage-----------------Result
Number.isNaN()	    Rtrn whether passed value is Not a Number	  isNaN("Hello!");  	  // true
Number.isFinite()	  Rtrn whether passed value is finite	        isFinite(Infinity);	  // false
Number.isInteger()	Rtrn whether passed value is an integer	    isInteger(123);	      // true
Number.parseFloat()	Atmpt to convert passed value to float	    parseFloat("123.45");	// 123.45
Number.parseInt()	  Atmpt to convert the passed value integer	  parseInt("123.45");	  // 123
*/

console.log(isNaN('Hello!'));       // true
console.log(isFinite(Infinity));    //false
// console.log(isInteger(123));     //true
console.log(parseFloat("123.45"));  //123.45
console.log(parseInt("123.45"));    //123

/* 
------The following are instance methods which operate on a Number instance------
Method/Property-----Purpose-------------------------------------Usage-----------------Result
toFixed()	    Rtrn string from number with fxd decimals   123.45.toFixed(4);     // "123.4500" 
toPrecision() Rtrn string frm no. with passed precision   123.45.toPrecision(4);  //	"123.5"
toString()	  Rtrn string from number                   	123.45.toString();      //	"123.45"
*/

console.log(123.45.toFixed(4));         // "123.4500"
console.log(123.45.toPrecision(4));     // "123.5"
console.log(123.45.toString());         // "123.45"



/*------------------------------A Note about Floats------------------------------*/

/*
You learned in the last unit that every number in JavaScript is a floating point number. This means that JavaScript math (or any floating-point math, for that matter), isn't 100% accurate. This is because there are some decimal numbers that cannot be represented perfectly in binary (the language of computers). You cannot represent the fraction 1/3 perfectly in the base 10 (decimal) system: 0.333333... is always an estimation no matter how many decimal places you add, because 1 is not evenly divisible by 3. This same problem exists in the base 2 system (binary), so in programming languages that use floating point arithmetic, values that cannot be represented perfectly are rounded:
*/

let decimal = 0.1;
let otherDecimal = 0.2;
let sum = decimal + otherDecimal

console.log(sum);  // 0.30000000000000004

/*
You don't need to know the exact intracacies of why it happens, but you can read more about this well-known problem here. Most importantly, a common way to solve the problem and get an accurate result is to convert everything to integers based on the number of decimal places desired in the result:
*/

console.log(0.1 + 0.2);                         // 0.30000000000000004
console.log((0.1 * 10 + 0.2 * 10) / 10);        // 0.3

console.log(1.03 + 1.04);                       // 2.0700000000000003
console.log((1.03 * 100 + 1.04 * 100) / 100);   // 2.07