/*
As with most things in code when something becomes too complex or tedious developers will eventually find a way to simplify it. Luckily, that's the case with strings too. When you need to use a lot of special characters in your string, or maybe even include a variable, you can use a template literal instead.

Creating a template literal is easy. All you have to do is surround the string with backticks(``) instead of single or double quotes. Between the backticks you can use any characters you want including newlines, tabs, quotes and even variables! The interpreter will interpret the string as it's written in the code, which makes this type of string ideal for creating strings of HTML in your JavaScript, while keeping the HTML itself easy to read. A good example of this would be if you wanted to use JavaScript to render a list of something in an HTML list:
*/

let fourthItem = 'Item 4';
let myHtml = `
  <ol class="item-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>${fourthItem}</li>
  </ol>
`;

console.log(fourthItem);
console.log(myHtml);

/*
In the above, everything between the opening backtick and the closing backtick including the quotes, newlines and indentation will all be interpreted as part of the string. The variable, fourthItem, will be evaluated and included as Item 4. This is the preferred method of creating complex strings in modern JavaScript, but for simple strings you can stick with regular quotes and escape characters.
*/