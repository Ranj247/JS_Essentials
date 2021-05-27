/*
You now know how to integrate many different JavaScript concepts with the DOM, from creating elements to setting their attributes, iterating through data structures to render DOM elements and vice versa, and you have a multitude of tools in your toolbox for working in JavaScript in general like conditional statements, knowledge of the different data types and how to convert between them and so on. At this point, you have most of the tools you need to render pretty much anything in HTML, but sometimes it's not prudent to do it step by step and it's best to write the structure of the HTML as a string and just use JavaScript to keep appending to the HTML string until it's complete, then set the document or the body's innerHTML property to your long HTML string.

To do this, you will need to revisit and become comfortable with the concept of template literals. Luckily this is a simple concept. The only difference between a template literal and a string is the use of backticks instead of single or double quotes. Anything that comes from JavaScript, such as variables, get injected into the string using the $ operator and a set of curly braces, like this:

let myVariable = 123;
let myLiteral = `The value of my variable is ${myVariable}.`
The above will render "The value of my variable is 123." when evaluated. You can use this concept to write complex HTML structures like tables, lists, divs filled with lots of images or anything else you can imagine, by combining the concept of a template literal with the concept of iteration, data structures and JavaScript variables. The way developers usually tackle this is to begin with an empty string and then append HTML to it step by step in a loop or using some other JavaScript logic. Here's an example:

let fruits = [
  {
    name: 'Apple',
    image: 'images/apple.png',
  },
  {
    name: 'Orange',
    image: 'images/orange.png',
  },
  {
    name: 'Banana',
    image: 'images/banana.png',
  },
];

let html = `
  <table>
    <thead>
      <tr>
        <th>Fruit</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
`;

for (fruit of fruits) {
  let rowHtml = `
    <tr class="fruit-row">
      <td>${fruit.name}</td>
      <td><img src="${fruit.image}" /></td>
    </tr>
  `;
  html += rowHtml;  
}
html += `
  </tbody>
</table>
`;

document.body.innerHTML = html;
The process is straightforward. In the above example you begin with defining an array of objects, each object being a fruit with a name and an image url. This object is arbitrary here, but a more realistic scenario might have it coming from an API or somewhere else in your application. Either way, the intention is to create a table (or list, series of divs, paragraphs, or whatever else you want) where each row is a different fruit and the cells are the name of the fruit and an image of it. This is a pretty complex HTML structure that would take forever to create if you did it all step by step with things like createElement(), setAttribute(), appendChild() and so on.

Instead, above you create the first part of your HTML as a template literal (note this could be a regular string since it had no variables in it but we've made it a template literal so it's easier to read and can be multi-line) but stop at the part where things will need to be repeated. The top part of the table structure is static, but to generate the rows in the body, we stop there and go into a for loop. Inside the loop, we use a template literal to create a new row for each fruit and add it to the current html string. In the end, this just creates a really long string with all your HTML in it, and to finish it up you just need to close off the table body and the table itself, so that's added to the string after the loop finishes. Finally, the whole string is set to replace the document body's innerHTML. If you needed to inject this into an existing page without replacing the whole body, you could simply use createElement('div') to create a div for the table to live in, set the div's innerHTML, and use appendChild(), insertBefore or one of the other methods you've learned to insert the div into the DOM in the correct place. Here is the above example in action (note that the images are not real so they won't work but you can look at the source of the page using dev tools once rendered if you want to verify the elements were created correctly):
*/

// Define the array of fruits
let fruits = [{
    name: 'Apple',
    image: 'images/apple.png',
  },
  {
    name: 'Orange',
    image: 'images/orange.png',
  },
  {
    name: 'Banana',
    image: 'images/banana.png',
  },
];

// Start with the top of the HTML
let html = `
  <table>
    <thead>
      <tr>
        <th>Fruit</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
`;

// Iterate the array to create all the rows and append them to the html above one by one. You can even add classes and other attributes!
for (fruit of fruits) {
  let rowHtml = `
    <tr class="fruit-row">
      <td>${fruit.name}</td>
      <td><img src="${fruit.image}" /></td>
    </tr>
  `;
  html += rowHtml;
}

// Finish off the HTML by closing the tbody and table
html += `
  </tbody>
</table>
`;

// Set the document body's innerHTML to the html string above
document.body.innerHTML = html;