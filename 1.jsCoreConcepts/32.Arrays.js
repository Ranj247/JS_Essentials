/* Declare the array directly using square brackets: */
let myArray = ['value1', 'value2', 'value3'];

/*-----------------Array Indexing-----------------*/
/*
Array indexing is the process by which you can access an individual array item by using a specific number. You might recall that arrays in JavaScript begin with the index 0. To access a specific array element, you can use its index. For example, given the array of cars in the explanation above:
*/

let cars = ['saab', 'volvo', 'ford'];
console.log(cars[0]);  // 'saab'
console.log(cars[1]);  // 'volvo'
console.log(cars[2]);  // 'ford'

/*
This concept of indexing is the reason that so far when looking at for loops in JavaScript, you have seen the loop begin by declaring an integer variable which is then incremented up to a certain amount as the loop repeats. You can use the integer to represent the index of the array:
*/

// let cars = ['saab', 'volvo', 'ford'];
// for (let car = 0; car < 3; car++) {
//   console.log(cars[car]);
// }

/*
The above code will iterate through the cars array, using its indices to log each value to the console. If you don't know how many items are in the array, you can use the .length property to reference the total number of items in the array:
*/

let lotsOfElements = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(lotsOfElements.length);

for (let i = 0; i < lotsOfElements.length; i++) {
  console.log(lotsOfElements[i]);
}