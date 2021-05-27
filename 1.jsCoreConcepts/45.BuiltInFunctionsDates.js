/*
The built in global object Date represents a single moment in time. Specifically, a JavaScript date represents the number of milliseconds that have elapsed since the UNIX Epoch, or midnight on January 1, 1970, UTC. This date is the universally accepted standard base value for computer-based date and time values. Dates and times are an integral part of any computer application or system and can be used for a multitude of things ranging from tracking user login and logout timestamps to triggering system backups, gaming applications to automated payment systems and beyond.

The Date() object is a contructor and can be used to create a JavaScript date:
*/

let date = new Date();
console.log(date);  // The current, localized date

/*
Once you've created a Date object, it opens the door to a plethora of methods and functionality. In fact, even before creating a Date object you can use one of its static methods to do the most obvious thing you might want to do with a date: get the current one:
*/

let rightNow = Date.now()
console.log(rightNow);  // 1596476939708

/*
Important: Date objects are not supported in JavaScript Tutor. To run these code samples you'll need to copy and paste them into the console in dev tools. Also note that your times will differ depending on when you're completing the course.

As you can see the above returns the integer representation of the current date relative to the UNIX Epoch. Because it's an integer representation, it's possible to add a number to it. To get the exact same time tomorrow we could add the number of milliseconds in a day (24 * 60 * 60 * 1000):
*/

// let today = Date.now();
// let tomorrow = today + 86400000;  // 86400000 milliseconds in 1 day

// console.log(today);  // 1596477706417
// console.log(tomorrow);  // 1596564106417

/*
You can also create a date object from a timestamp like those above by passing the timestamp to the Date() contructor, and then use the toDateString() method to get a human readable date:
*/

let today = Date.now();
let tomorrow = today + 86400000;  // 86400000 milliseconds in 1 day

let todayDate = new Date(today);
let tomorrowDate = new Date(tomorrow);

console.log(todayDate.toDateString());  // Mon Aug 03 2020
console.log(tomorrowDate.toDateString());  // Tue Aug 04 2020

/*
In fact once you've got a Date object to work with, you can break it into all sorts of pieces and get anything you want from it using various instance methods provided by the Date object itself:
*/

today = new Date();

// Now we can operate on it:
console.log(today.getFullYear());      // The 4 digit year
console.log(today.getMonth());         // The month (0-11)
console.log(today.getDate());          // The day of the month (1-31)
console.log(today.getDay());           // The day of the week (0-6)
console.log(today.getHours());         // The hour (0-23)
console.log(today.getMinutes());       // The minute (0-59)
console.log(today.getSeconds());       // The seconds (0-59)
console.log(today.getMilliseconds());  // The milliseconds (0-999)

/*
All of the above methods return the date/time part in your local time. If you need UTC time, there is a UTC counterpart for each one:
*/

today = new Date(today);

// Now we can operate on it:
console.log(today.getUTCFullYear());      // The 4 digit year
console.log(today.getUTCMonth());         // The month (0-11)
console.log(today.getUTCDate());          // The day of the month (1-31)
console.log(today.getUTCDay());           // The day of the week (0-6)
console.log(today.getUTCHours());         // The hour (0-23)
console.log(today.getUTCMinutes());       // The minute (0-59)
console.log(today.getUTCSeconds());       // The seconds (0-59)
console.log(today.getUTCMilliseconds());  // The milliseconds (0-999)

/*
You can also format the date according to your local format, and there are several methods for producing human readable dates. For a full listing of the Date object's methods and functionality, see the MDN Reference.
*/