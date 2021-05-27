/*
You learned in the Comparative Programming module that one of the fundamental primitive data types in all programming languages is the string. A string is just a string of text, and you will see them all over the place, especially when it comes to rendering content that the end user will see, like in a web browser. Strings are often used as a way to represent data in a human-readable form: many times you will want to store a human-readable string of text in a variable and then reference it later on.

Strings can be created by surrounding a string of text in either single quotes or double quotes, like this:

let myString = 'This is a string!';
let myString2 = "This is a string, too!";
The type of quotation marks you use doesn't matter, though most developers these days prefer single quotes since it's one less keystroke (you don't have to hold down shift). There is one caveat to this though: if you want to include a literal quotation mark in your string of text, you must enclose the string in the opposite kind:

let quotes1 = "This string's got a single quote in it."
let quotes2 = 'The developer said, "Strings are awesome!"';
The reason you have to do this is because, for example, in the quotes1 variable above, if you surrounded the whole string in single quotes the code interpreter would interpret the apostrophe in the word string's as the end of the string. To combat this you surround it in the opposite kind. Another option is to prepend it with a backslash (let quotes3 = 'can\'t stop, won\'t stop';), but this can make your code messy and difficult to read so the former methodology is usually preferred.
*/