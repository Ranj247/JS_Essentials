/*
You learned in the comparative programming module that comparison operators, sometimes called relational operators, are used to make comparisons between two different pieces of data and return true or false based on whether the condition is met. Most often, these operators will be used to control the flow of the application, such as by utilizing them in an if statement to decide whether to execute a block of code. The comparsion operators allow you to determine equality, whether two pieces of data have the same type, whether one is larger or smaller than another and so on.
*/

/*
A simple example of the usage of a comparison operator might be in setting a variable based on a user's age:
*/

// let canVote = false;
// let age = 19;

// if (age >= 18) {
//   canVote = true;
// }
// console.log(canVote);  // true

/*
In the above, the variable canVote is initialized to false by default. Then a variable age is initialized to 19 (let's assume for the purposes of the example that a user input their age to provide this). Finally, an if statement is used to determine if age >= 18 and if so, canVote is set to true. The table below provides a description of each comparison operator in JavaScript. Pay close attention to the equality operators and make sure you use the strict equality operators as a best practice; the strict equality operators compare not only the values but the data type as well, and using the loose equality operators may produce unexpected results:
*/

/*
Operator--Description-----------------------JavaScript Example------------Returns
==	      Equal to (loose equality)	        console.log(1 == 1)	          true
===	      Equal to (strict equality)	      console.log(1 === "1")	      false
!=	      Not equal to (loose equality)	    console.log(1 != 1)	          false
!==	      Not equal to (strict equality)	  console.log(1 !== "1")	      true
>	        Greater than	                    console.log(2 > 1)	          true
<	        Less than	                        console.log(2 < 1)	          false
>=	      Greater than or equal to	        console.log(2 >= 1)	          true
<=	      Less than or equal to	            console.log(2 <= 1)	          false
*/


console.log(1 === 1);     // true
console.log(1 === "1");   // false
console.log(1 != 1);      // false
console.log(1 !== "1");   // true
console.log(2 > 1);       // true
console.log(2 < 1);       // false
console.log(2 >= 1);      // true
console.log(2 <= 1);      // false