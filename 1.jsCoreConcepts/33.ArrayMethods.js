/*
Along with their properties like length, arrays have a number of built-in methods for performing various operations on them. 

Some of the most common operations you might perform on arrays using these methods include:
- Popping and pushing elements
- Shifting and unshifting elements
- Deleting and splicing elements
- Changing the values of specific elements
- Slicing, sorting and merging
- Testing whether an array includes an element
- Mapping and reducing

These terms won't all make sense to you right now and there are other methods besides the ones listed here, but once you know a few of them you'll find it easy to understand the rest.

Let's go through each of the list items above. For all of these examples we'll use the same array so you can easily see the differences and the functionality of each method:

let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
*/

/*
------------------Popping and pushing elements:------------------
You can pop an item off the end of an array, or push one or more onto the end of it using the 
pop() and push() methods respectively. 

- The pop() method returns the item you popped off 
- The push() method returns the new length of the array, if you assign them to a variable:
*/

let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
let lastItem = fruits.pop();

console.log(lastItem);
console.log(fruits);

let newLength = fruits.push('mangoes');
console.log(newLength);
console.log(fruits);

/*
------------------Shifting and unshifting elements:------------------

- The shift() method pop an item off the front of the array, and returns it 
- The unshift() method add one or more items to the beginning of the array 
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let firstItem = fruits.shift();

// console.log(firstItem);
// console.log(fruits);

// let newLength = fruits.unshift('mangoes');
// console.log(newLength);
// console.log(fruits);


/*
------------------Deleting and splicing elements:------------------

- The splice() method deletes a specific item in an array, to use splice, you specify the index you would like to begin at and the number of items you want to remove
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// fruits.splice(2, 1);  // Remove one item starting at index 2
// console.log(fruits);

/*
------------------Changing the values of specific elements:------------------

You can also use splice() to insert elements into the array at the starting index, by specifying the elements you want to insert in a comma-separated list after the 2nd argument:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];

// // Remove 'cherries', insert 'pineapples' and 'mangoes'
// // 'bananas' is shifted to the right
// fruits.splice(2, 1, 'pineapples', 'mangoes');
// console.log(fruits);

/*
The above removes one element, starting at index 2 and then inserts two new elements starting at that position. The splice() element returns an array of the inserted or deleted elements. 
*/

/* 
If you don't want to replace any items, but just want to splice some items into the array starting at a specific point, you can specify 0 for the second argument:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];

// // Insert 'pineapples' and 'mangoes' starting at index 2
// // 'cherries' is shifted to the right
// fruits.splice(2, 0, 'pineapples', 'mangoes');
// console.log(fruits);

/*
If you simply want to change the value of an existing element, you can do it directly by replacing its index with the new value:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// fruits[2] = 'pineapples';
// console.log(fruits);

/*
------------------Slicing, Sorting and Merging:------------------

- The slice() method, slice an array to obtain a subset of it  

The following slices the array and returns only indices 2 through 4 (not including 4). This does not modify the original array:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let subset = fruits.slice(2, 4);
// console.log(fruits);
// console.log(subset);

/*
- The sort() method will sort the array, by default, from lowest to highest or in alphabetical order. The sorting methodology will differ based on the contents of the array, but usually you will use this to sort numerically or alphabetically:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// fruits.sort();
// console.log(fruits);

/*
- The concat() method merges two arrays together.

Just pass one or more arrays into it to merge them all together:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let vegetables = ['carrots', 'peas', 'beans', 'lettuce'];
// let healthyFoods = fruits.concat(vegetables);

// console.log(fruits);
// console.log(vegetables);
// console.log(healthyFoods);

/*
--------------Testing whether an array includes an element:--------------

- The includes() method checks a specific element exists in an array and return true if the element exists in the array, and false otherwise:
*/

// let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges'];
// let hasApples = fruits.includes('apples');  // true
// let hasMangoes = fruits.includes('mangoes');  // false
// console.log(hasApples);
// console.log(hasMangoes);

/*
--------------Mapping, filtering and reducing:--------------

.map(): executes a given function on every single element of the array. An example might be capitalizing all the elements of an array, or multipling them all by some number.

.filter(): filters the array down to only elements that meet specific criteria. An example might be filtering a list of names down to only names that begin with a certain letter.

.reduce(): reduces all the array elements down to a single result based on a given formula. An example might be reducing an array of numbers down to their sum, by addng them all together.

Focus on remembering all the possible things you might want to do with an array:- 
- Adding / Removing elements, 
- Sorting elements, 
- Combining arrays together, 
- Plucking certain elements out of them and so on. 

*/