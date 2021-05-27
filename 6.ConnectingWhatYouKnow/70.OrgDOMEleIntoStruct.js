/*
In the last unit you saw how it's possible to use JavaScript to build HTML using iteration. You can do it the other way around also! At many points in your development career you'll certainly find yourself needing to loop through all the rows in an HTML table, all the elements of a list, or all the elements of a page altogether. For these times you must know how to organize DOM elements into JavaScript data structures so you can use them in your code, pass them to back end servers and accurately manipulate them.

For this concept you will take a similar approach as the last unit, but this time you'll do it in reverse. Consider that you're writing a JavaScript application that scrapes information off a public website and uses it to do something personal. Maybe you want to aggregate all the recipes from your favorite recipe site into a cookbook as a gift, or you want to collect all the latest headlines from various news sites and determine how many times certain words appear in the headlines. To do this you need to organize the data into a predictable structure like a JavaScript object. Here's a table of people along with their ages and favorite foods:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Favorite Food</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>32</td>
      <td>Pizza</td>
    </tr>
    <tr>
      <td>Mary</td>
      <td>25</td>
      <td>Tacos</td>
    </tr>
    <tr>
      <td>Mike</td>
      <td>28</td>
      <td>Spaghetti</td>
    </tr>
    <tr>
      <td>April</td>
      <td>30</td>
      <td>Steak</td>
    </tr>
  </tbody>
</table>
In HTML this clearly has a hierarchical structure to it: The table is the parent of the thead and tbody. The thead and tbody are siblings, and parents of their respective row children. Each tr is also a sibling and has children which are either td or th elements. If you want to collect all the table data, row by row, you can iterate through the table body to do it:

let tbody = document.getElementsByTagName('tbody')[0];
let rows = tbody.children;
for (row of rows) {
  // Do something for each row
}
The "something" you need to do for each row is the obvious question! The answer isn't too complex though: basically you just need to loop through each row's children (the td elements) and put their text content into a data structure. Since you're working with named values (name, age, favorite food), a JavaScript object is a good choice, but that will only hold one row of data. To hold all the rows, we need an array of objects...no problem!

let tbody = document.getElementsByTagName('tbody')[0];
let rows = tbody.children;

let people = [];

for (row of rows) {
  let person = {};

  let cells = row.children;
  person.name = cells[0].textContent;
  person.age = cells[1].textContent;
  person.favoriteFood = cells[2].textContent;
  people.push(person);
}
Above, since we know the structure of the table in the HTML, it's easy to create JS properties like name, age and favoriteFood on the person object. We also know their locations in the table: the first cell is name, 2nd is age and 3rd is their favorite food. If there were many columns, it would be trivial to also iterate through the thead element's first row and create a property for each of its children as well, but since there are only three columns here its easier to just do it manually. The point is that with a little iteration you've converted an HTML table into a real JavaScript object and now you can do anything you want with it! The concept of being able to convert an HTML entity into a JS object and vice versa is useful in more ways than you can imagine, and will be critical to your understanding of using JavaScript to manipulate the DOM and add interactivity to your webpages. The example above is put into action in this runnable example:
*/

// Get the body and all the rows
let tbody = document.getElementsByTagName('tbody')[0];
let rows = tbody.children;

// Set up the array to hold our people
let people = [];

// Iterate through all rows, "build" a person, and push them into the array
for (let row of rows) {
  let person = {};

  let cells = row.children;
  person.name = cells[0].textContent;
  person.age = cells[1].textContent;
  person.favoriteFood = cells[2].textContent;
  people.push(person);
}

// Voila!
console.log("People:\n", people);

// Now you can do anything you want...find people who love steak!
let steakLovers = people.filter(function (person) {
  return person.favoriteFood === 'Steak'
})
console.log("\nPeople who love steak:\n", steakLovers);

// Sort by age (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
let sortedPeople = people.sort(function (a, b) {
  return a.age - b.age;
});
console.log("\nSorted people:\n", sortedPeople);

// Get the name of the youngest person
let youngest = sortedPeople[0].name;
console.log("\nYoungest person is:", youngest);

// Or using something more complex, like Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
oldest = people.reduce(function (currentOldest, person) {
  return (person.age > currentOldest.age) ? person : currentOldest;
});
console.log(`${oldest.name}, the oldest, is ${oldest.age} years old`);