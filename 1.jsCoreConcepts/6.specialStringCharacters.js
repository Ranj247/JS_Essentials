/*
As you saw in the last unit, occasionally you will need to put a special character in your string, like a quotation mark or a new line, which would otherwise throw off the code interpreter. 
*/

/*
To do this in JavaScript, you can use the special escape character, the backslash, to render any special characters. To use it, just replace any special character with it's special escape sequence and JavaScript will interpret it literally as opposed to treating it as part of the code.
*/

/*
You will only need to do this for certain characters. For example, you saw in the last unit how you can use a backslash to render a single quote inside a string surrounded with single quotes:
*/

let singleQuotedString = 'He\'s a wild one, that single quoted string...';
console.log(singleQuotedString);

let doubleQuotedString = "Confucius say, \"Many backslash make code sad.\"";
console.log(doubleQuotedString);

/*
While this is not the preferred method of escaping quotes (rendering them literally) in a string, it is the only way to escape other special characters, such as newlines and tabs. 
*/

/* To escape a newline, you can use the \n character: */

let multiLineString = 'This string has\nmultiple lines.\nHooray!';
console.log(multiLineString);

/*
There are some other common special characters you will need to escape in strings. A table below provides their escape characters. To use these special characters in your strings, just replace them with the escape character:
*/

/*
Note: the \r character is not commonly used. It is part of a special Windows sequence \r\n, which signifies that the enter key was pressed, but modern Windows understands simply \n to mean "new line", so you can use that universally to render new lines.
*/

/* Character	Escape Sequence */

/*
Horizontal Tab  -	\t
Newline	        - \n
Carriage Return	- \r
Single Quote	  - \'
Double Quote	  - \"
Backslash	      - \\
*/