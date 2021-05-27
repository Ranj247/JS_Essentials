/*
Just like you can create, read, update and delete elements of an array, you can do the same with JavaScript objects. While arrays use indexes to identify their elements, the values of a JavaScript object are identified by their property names. You can access these property names using either square bracket notation (myObject['someProperty']) or dot notaton (myObject.someProperty), though the latter is the preferred way in modern JavaScript.

JavaScript objects are like a dictionary. Each word in a real dictionary should only appear once, but the same definition might apply to multiple words (in other words there are some words that may be different words that mean the same thing). In the case of a JavaScript object, each property must only appear once and must be unique, however the same value can appear more than once, as long as it has a different property name. This is an example of a JavaScript object representing a person:
*/

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// }

/*
There are four things we can do with this person object:

Read its properties
Create new properties
Update its existing properties
Delete its properties

All four of these are quite simple. To read an object property, you can use either square bracket or dot notation. Both are the same, but the latter is preferred:
*/

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// console.log(person['firstName']);  // 'John'
// console.log(person.lastName);  // 'Smith'

/*
To give an object a new property, you can use the same notation, but set the value at the same time:
*/

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// person['bestFriend'] = 'Mike';
// console.log(person['bestFriend']);  // 'Mike'

// person.wife = 'Mary';
// console.log(person.wife);  // 'Mary'

// console.log(person);

/*
To update an existing property you can use the same syntax as creating a new value; just do it on an existing property to overwrite it:
*/

// let person = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 30,
//   location: 'USA'
// };
// person['age'] = 31;
// console.log(person['age']);  // 31

// person.location = 'Spain';
// console.log(person.location);  // 'Spain'

/*
Finally, to delete an object property you can use the delete operator:
*/

let person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  location: 'USA'
};
delete person['lastName'];
delete person.age;
console.log(person);

/*
Note: Trying to access a property which doesn't exist will not throw an error; it will return undefined. Technically, any property that doesn't exist on an object will be undefined, so while accessing a property that has been deleted will still return undefined, if you log the object to the console the property is gone. For all intents and purposes, deleting an object property does effectively remove the property from the object.
*/