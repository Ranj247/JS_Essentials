/*
A method is a function that is associated with a particular type of object (such as a string, a number, or a class). For all intents and purposes, methods are the same as the functions you learned about in the Comparative Programming module, and can be invoked, or called, in an identical way. Many of the objects you'll work with in JavaScript including Numbers, Strings, Arrays and so on also have these methods which can be called in order to operate on them in some way.

Along with being able to concatenate strings using the + operator and inject variables into them using template literals, string objects have a number of methods and properties that can be used to manipulate them. These methods and properties are small functions or characteristics that allow you to easily do things like getting the length of the string, converting the whole string to upper/lowercase, searching the string to find a substring within it, duplicating or repeating it, replacing characters in it and so on.

To use the different string methods and properties all you need to do is call them on a string variable. For example, given the following string, you can call the toLowerCase() method on it to convert the whole string to lowercase:
*/

let title1 = "This is the Title of a Book";
let lowerTitle = title1.toLowerCase();
console.log(lowerTitle);  // this is the title of a book

/*
The toLowerCase() method converts every letter in the string to a lowercase letter. As you might have guessed, there's also a toUpperCase() method:
*/

let title2 = "caps lock is cruise control for cool";
let upperTitle = title2.toUpperCase();
console.log(upperTitle);  // CAPS LOCK IS CRUISE CONTROL FOR COOL

/*
Since a string is really just an array of letters, you can access its individual letters using an index beginning with zero, like any other array or list:
*/

let myString = "Which letter is the best?";
console.log(myString[0]);  // W
console.log(myString[1]);  // h
console.log(myString[2]);  // i
console.log(myString[3]);  // c
console.log(myString[4]);  // h

// or going backwards!
let len = myString.length;
console.log(myString[len - 1]);  // ?
console.log(myString[len - 2]);  // t
console.log(myString[len - 3]);  // s
console.log(myString[len - 4]);  // e
console.log(myString[len - 5]);  // b

/*
Note: in some languages you can "negative-index" an array/list, e.g. myString[-1], but this is not allowed in JavaScript. As a workaround, you can get the length of the array (or string in this case) using the length property, like we did with let len = myString.length; above, and then subtract a given number of characters from it to find the desired character in the string.

Because strings can be indexed as demonstrated above, you can also search them to find where a particular string or character shows up in them using the indexOf() and lastIndexOf() methods. Both of these methods return the index where the specified string appears, and will return -1 if the string you're looking for doesn't appear in the string you're searching:
*/

let welcome = 'This is a welcome message!';
console.log(welcome.indexOf('welcome'));  // 10 (the index of the w)
console.log(welcome.lastIndexOf('e'));  // 24 (the last 'e' in the string)

// If you need to search a long string, you can also pass both of these a second argument - an integer - to specify the search starting point
console.log(welcome.indexOf('s', 7));  // 20 (the search begins after the first two 's') 

/*
Another useful method related to string indexing is the charAt() method, which returns the character at a given index. It can be thought of as the opposite of the two methods above. If the index number is not found, this method will return an empty string:
*/

let theString = 'Welcome to the universe!';
console.log(theString.charAt(15));  // u

/*
Finally, if you need to slice a string to get only certain characters you can use the slice() method, which takes two parameters: a starting index and an ending index. If you pass only the starting index, slice() will return that index plus rest of the string:
*/

let myString2 = 'Welcome to the universe!';
console.log(myString2.slice(1));     // 'elcome to the universe!'
console.log(myString2.slice(0, 6));  // 'Welcom' (last index is not included)
console.log(myString2.slice(0, 7));  // 'Welcome'
console.log(myString2.slice(15));    // 'universe!'

/*
Of course there are many other string methods which can be useful in a variety of circumstances but these are the most common. To see all the other available methods and what they're used for, see the table below. It's not important that you memorize these. You will learn them with time and repeated use, but you can return to this unit to find the method you need when you need to accomplish anything with strings:
*/

/* Method/Property	Description */
/*
length	              Returns the length of a string
charAt()	            Returns the character at the specified index (position)
charCodeAt()	        Returns the Unicode of the character at the specified index
concat()	            Joins two or more strings, and returns a new joined strings
endsWith()	          Checks whether a string ends with specified string/characters
fromCharCode()	      Converts Unicode values to characters
includes()	          Checks whether a string contains the specified string/characters
indexOf()	            Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	        Returns the position of the last found occurrence of a specified value in a string
localeCompare()	      Compares two strings in the current locale
match()	              Searches a string for a match against a regular expression, and returns the matches
repeat()	            Returns a new string with a specified number of copies of an existing string
replace()     	      Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	            Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	              Extracts a part of a string and returns a new string
split()	              Splits a string into an array of substrings
startsWith()	        Checks whether a string begins with specified characters
substr()	            Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	          Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	  Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()	  Converts a string to uppercase letters, according to the host's locale
toLowerCase()	        Converts a string to lowercase letters
toString()	          Returns the value of a String object
toUpperCase()	        Converts a string to uppercase letters
trim()	              Removes whitespace from both ends of a string
valueOf()	            Returns the primitive value of a String object
*/