/*
--------The document.write() method------

It writes content to the HTML document. It can write plaintext, HTML, or JavaScript code. When you call document.write() on an existing HTML document, it will replace the entire document including the <html> element itself, which means you lose all the CSS, any JavaScript you've loaded, and all of the content.

To use this method, you simply pass it the content you wish to write as a string:

document.write("<h1>Hello World!</h1>");

You can use the document.write() method to write JavaScript code as well, like printing the date to the document:

document.write(Date());

document.write() can take multiple arguments separated by commas and will print each one in order, but it will not add a new line if you don't use a block level element or you're writing plaintext. To add a new line, you need to add it manually with a <br> tag or write with block-level elements like paragraphs, headings and divs. The runnable example below demonstrates this functionality.

Note: in this example we're using the onclick attribute on the button to call a JavaScript function which actually writes to the document. Don't worry about understanding the intricacies of all this for now; you'll learn about these click events in a future unit. For this unit, the focus is on document.write() itself, but if you need to trigger an action such as calling a function on a mouse click, you can do it like this using the onclick attribute. Remember to review both the HTML and the JavaScript and make sure you understand how they work together:
*/

/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/

function replace() {
  document.write('<h1>Hello!</h1>');
  document.write("Today is ", Date());
  document.write('<p>Each call to <code>document.write()</code> is appended in order to the document, without newlines.</p>');
  document.write('<p>Notice the css for the &lt;code&gt; tag isn\'t working anymore...</p>');
  document.write('<p>That\'s because the whole document was replaced, including the link to the css file!</p>');

  document.write('The calls above are on new lines because they\'re writing paragraphs and headings. If writing plaintext...');
  document.write('notice that this method will NOT append a new line after each statement.');
  document.write('<br><br>To do that, you can use break tags');
}