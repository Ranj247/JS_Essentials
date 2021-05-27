/*
Objects in JavaScript have three types of methods:

Static methods
Instance methods
Methods you create

Static methods are methods that exist on the Object constructor itself. They usually take an object as an argument and return some property or characteristic of that object. Common static methods you may use include Object.keys() and Object.values(), which return the passed object's properties and values, respectively. Another common static method is Object.entries(), which returns an array of the object's property/value pairs.

Instance methods on the other hand are methods that require a specific object instance to operate on. Two you will probably use are Object.instance.hasOwnProperty(), which returns whether an object has a property in its own definition (rather than inheriting it from another object) and Object.instance.toString(), which returns a string representation of the object.

Methods you create are instance methods that you yourself have added as properties on the object. This type of method is a just a property on the object whose value is a function that you can call in order to execute some code.

Let's look at the usage of some of these methods. We'll start by creating an object, then we'll:

Use the static methods to get some information about it
Use some instance methods to find out about its properties and manipulate it a bit
Create our own method and call it

The first step is to create an object:
*/

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

/*
First, you can use the static methods Object.keys() and Object.values() to get the object's properties (keys) and values, respectively. Object.entries() can also be used to achieve the same thing, but returns the result in an array of property/value pairs. Note: Object.values() is not supported in JavaScript Tutor, so that line will throw an error. Try pasting the code into the dev tools console instead if you want to see that work:
*/

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

// console.log(Object.keys(car));
// // returns ["location", "ignition", "fueled"]

// // Unsupported on JavaScript Tutor
// console.log(Object.values(car));
// // returns ["garage", "off", true]

// console.log(Object.entries(car));  
// // returns [Array(2), Array(2), Array(2)]
// // Expanded view of the three arrays:
// // 0: (2) ["location", "garage"]
// // 1: (2) ["ignition", "off"]
// // 2: (2) ["fueled", true]

/*
Now, let's find out if the car has an ignition property, using the instance method hasOwnProperty():
*/

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

// console.log(car.hasOwnProperty('ignition'));  // true
// console.log(car.hasOwnProperty('drive'));  // false

/*
You can also use the toString() method to return a string representation of the object:
*/

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
// };

// console.log(car.toString());

/*
Notice how the representation returned is [object Object]. This is because we haven't defined the toString() method on this specific object (the car), so it's inherited from the global object which all objects inherit from. You'll learn to override this in the next unit. In the meantime, you can add your own method to turn the ignition on. This is just like any other function which you learned to create in the Comparative Programming module, except that it exists as a property of the car object:
*/

let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  }
};

console.log(car.ignition);
car.start();
console.log(car.ignition);

/*
This jumps ahead a little bit but it's pretty simple to understand. We just created a property called start just like creating any other property, except this time its value is a function instead of a string, boolean, integer, or something else. The this in the start method refers to the car object itself, so when we call the function by using car.start();, ignition is changed to on. The function doesn't return anything, it just changes the ignition property to on.

In an upcoming unit you'll learn about the this keyword and how it relates to objects like this one.
*/