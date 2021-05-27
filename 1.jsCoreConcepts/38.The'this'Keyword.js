/*
At the end of the last unit you saw how you can create an object (a car) and give it a start() method. In that method there was a reference to the this keyword:
*/

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
//   start: function() {
//     this.ignition = 'on';
//   }
// };

// console.log(car.ignition);
// car.start();
// console.log(car.ignition);

/*
In the above code, this refers to the object it is a part of: the car. The this keyword has different meanings depending on the context in which it is used, but you'll most likely see it used in two main ways:

In a method, this refers to the object that owns the method. If the method isn't owned by any object, then this refers to the global object.
In an event (like when a user clicks on something), this refers to the element that received the event (e.g. the thing they clicked on).
Let's look at some examples of the above scenarios. The first item in the list above is exactly what you've seen with the car object in the previous unit. The start() method is owned by the car object, so within that method, this refers to the car. That means that any time we want to access a property of the car we can use this to reference it. To demonstrate, let's add some more methods to the car:
*/

let car = {
  location: 'garage',
  ignition: 'off',
  fueled: true,
  start: function() {
    this.ignition = 'on';
  },
  drive: function() {
    this.location = 'street';
  },
  park: function() {
    this.location = 'garage';
  },
  refuel: function() {
    this.location = 'gas station';
    this.fueled = true;
  },
  stop: function() {
    this.ignition = 'off';
  },
};

/*
Above, the bolded references to this.ignition, this.location and this.fueled refer to those properties on the car object. Because the car "owns" all those methods (start, stop, refuel and so on), this refers to the car, and allows you to access it from inside each method to modify the car's properties.
*/

// Now we can "use" the car:
car.start();
console.log(car.ignition);
car.drive();
console.log(car.location);

// Ran out of gas!
car.fueled = false;
car.refuel();
console.log(car.location);
console.log(car.fueled);

// Let's go home
car.drive();
console.log(car.location);
car.park();
console.log(car.location);
car.stop();
console.log(car);

/*
Again, throughout the above code the keyword this always refers to the car, so we can use it to perform all sorts of operations on the car's other properties. If someone renamed the car object to something else, like truck, everything would still work with the new name since the reference to the object itself is stored in this. However, if you take one of the methods out of the car object and assign it in the global context, it no longer has any reference to the car, so this becomes undefined:
*/

// let car = {
//   location: 'garage',
//   ignition: 'off',
//   fueled: true,
//   start: function() {
//     this.ignition = 'on';
//   },
//   // ...
// };

// car.start is a function, so really
// all we're doing here is defining it again
// under a new name to demonstrate this concept


// let myStartFunction = car.start;
// myStartFunction();  // TypeError

/*
In JavaScript Tutor, this code will throw an error because once the start() function is removed from the car object, the connection between this and the car is gone, so this no longer has an ignition property.

The second common way you'll use this is to refer to an HTML element. You'll see this a lot, since you will often use JavaScript to handle events within the context of HTML elements. In this context, this refers to the element you're operating on. You'll explore this further in later units but here's an example:

<button onclick="this.style.color='blue'">Click to Change My Text Color!</button>
Click to Change My Text Color!
When you click the button, its text changes to blue since thanks to the onclick property on the button object which sets this.style.color to blue. As you work with JavaScript more and more, you'll often find yourself making changes to HTML elements and in this context you should remember that this always refers to the element itself. In the above code, it refers to the button, allowing the user to change its text color when clicked.

To summarize, remember that there are two main ways you'll use this in JavaScript: First, to refer to an object from inside it, and second, to reference an element that a user is interacting with.
*/