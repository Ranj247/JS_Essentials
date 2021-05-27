/*
Assignment operators in JavaScript are used to assign or reassign values to a variable. This can be done using any of the assignment operators, one of the variable assignment keywords (let, const or var) and a value to assign:

let x = 1;
const x = 1;
var x = 1;

Which keyword you use depends on the scope you need the variable to have. If you don't remember the difference, review that unit as needed. As you can see the generic syntax for using an assignment operator is:

[keyword] [variableName] [operator] [value];
   let           x           =         1   ;
   
*/

/*
If you are reassigning a new value to an already declared variable, you can simply leave off the assignment keyword.To reassign the value 2 to the variable x above, simply use x = 2;

As you learned in the comparative programming module, there are several different assignment operators, but the one you 'll use most commonly is the simple equals sign (=). When you need to modify a variable'
s value you can either reassign it as demonstrated above, or use one of the compound assignment operators such as += or -= , which take in the original value, modify it accordingly, and then
return the new value.To review, here are the assignment operators you 'll use most often (note that the compound assignment operators require that you first use the regular assignment operator to declare the variable and assign its initial value):
*/

/*

Operator----Description-------------------Example---------Same As
=	          Assignment	                  let x = 5;	    x = 5
+=	        Addition Assignment	          x += 3	        x = x + 3
-=	        Subtraction Assignment	      x -= 3	        x = x - 3
*=	        Multiplication Assignment	    x *= 3	        x = x * 3
/=	        Division Assignment	          x /= 3	        x = x / 3
%=	        Remainder Assignment	        x %= 3	        x = x % 3
**=	        Exponentiation Assignment	    x **= 3	        x = x ** 3

*/

/*
To demonstrate the functionality of these operators, here is a series of operations and their expected output (note that the modulo (%) operator is handy for determining if a value is odd or even, because anything with a remainder of zero when divided by 2 must be even, e.g. 10 % 2 = 0. Any remainder when divided by 2 indicates that the dividend was odd):
*/

let x = 10; 

console.log(x += 1);   // 11
console.log(x -= 1);   // 10
console.log(x *= 2);   // 20
console.log(x /= 2);   // 10
console.log(x %= 3);   // 1 (returns the remainder of 10/3 = 1)
console.log(x **= 3);  // 1 ** 3 = 1 
