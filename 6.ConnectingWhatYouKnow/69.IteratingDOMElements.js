/*
The concept of the DOM being a data structure gives way to the realization that it's possible to iterate through almost anything in the DOM, right down to text nodes. One common way this is used is in creating, manipulating or removing large numbers of repetitive DOM elements in a loop. This is really useful when you want to use JavaScript to create tables and lists in HTML.

To illustrate the concept of iterating DOM elements, consider that you want to create a table in your HTML. The table might have 1000 rows, so it would be very tedious and time consuming to create all that HTML manually! Instead, you can use JavaScript with a simple loop, and an array of the items you want to put in the table. For illlustration purposes, let's just say it's a table of 1000 random numbers between 1 and 1000, but it could really be anything you wish. Also note that there are more efficient and less verbose ways to do this, but it's shown step by step here to solidify the concept.

To understand how this is possible, just think about the things you need:

You need to somehow create 1000 random numbers (perhaps Math.random() may be of use here?)
You need to create the header row of the table; we'll say it has two columns: Item #, and Value (the actual number)
Inside the body of the table, you need to create 1000 rows, each with two columns (the item number and its value from the array). This can be accomplished with a simple for or while loop.
Here's a runnable example that puts this into practice and actually generates the table in question. Before reviewing this example, you may wish to revisit the Template Literals unit to review the usage of the `${}` syntax:
*/

// Create an empty array:
let numbers = [];

// Put 1000 random numbers in it, between 1 and 1000 (exclusive of 1000, and duplicates are fine...it's random)
let i = 0;
while (i < 1000) {
  numbers.push(Math.floor(Math.random() * 1000));
  i++;
};

// create a table element. Give it an ID so we can identify it
let table = document.createElement('table');
table.id = 'random-numbers';

// Create some basic HTML markup for the table structure:
let tableHtml = `
<thead>
    <tr>
        <td>Item #</td>
        <td>Value</td>
    </tr>
</thead>
<tbody>
</tbody>
`;

// Set the table's inner html
table.innerHTML = tableHtml;

// Now it's an HTMLElement object, we can get its body!
let tbody = table.getElementsByTagName('tbody')[0];

// Iterate the array and append a row to the table body's html for each number. This is using template literals again
let tbodyHtml = '';
for (let i = 0; i < numbers.length; i++) {
  tbodyHtml += `
        <tr>
            <td>${i}</td>
            <td>${numbers[i]}</td>
        </tr>
    `
}

// With iteration complete, we now have a long string of HTML w/ all the rows for the table body...just set it!
tbody.innerHTML = tbodyHtml;

// Append the whole table to the document's body...voila! 1000 rows!
document.body.appendChild(table);