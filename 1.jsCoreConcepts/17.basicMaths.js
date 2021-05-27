/*
The compound operators in the previous unit reintroduce the concept of basic arithmetic operations in JavaScript, and thus the set of arithmetic operators. As with all programming languages, JavaScript allows you to perform basic math as a core part of the language. This can be used for all sorts of things and is easy to implement. All you need are at least two operands and an operator!
*/

console.log(1+1);   // 2
console.log(2*10);  // 20
console.log(15/3);  // 5
console.log(3**3);  // 27

/*
With arithmetic operators it's important to remember the order of operations, PEMDAS. In JavaScript the rules are the same as in the mathematics you learned growing up, that is, there is a predecence to each operator. In order:

PE: Parentheses and exponents
MD: Multiplication and Division
AS: Addition and subtraction
You can use these rules to execute complex arithmetic operations in JavaScript to do anything required for your code:
*/

let x = 2;
let y = 3;
let z = 4;

console.log(x + y * z);  // 2 + 12 = 14
console.log((x+y) * z);  // 5 * 4 = 20

/*
To review what you learned in the comparative programming module, here are all the arithmetic operators you'll use most often:
*/

/*
Operator--Description-----------------------Usage-----------------Example
+	        Addition	                        result = a + b	      2 + 2 = 4
-	        Subtraction	                      result = a - b	      2 - 2 = 0
*	        Multiplication	                  result = a * b	      2 * 5 = 10
/	        Division	                        result = a / b	      10 / 2 = 5
**	      Exponentiation	                  result = a ** b	      2 ** 3 = 8
%	        Modulo (returns the remainder)	  result = a % b	      10 % 4 = 2
*/