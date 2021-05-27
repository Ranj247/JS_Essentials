/*
-------------------------concept of data structures----------------------
Of all the things you've learned in this module, arguably the most important is the concept of data structures. As a developer you will live and breathe data of all sorts. In the context of JavaScript, the DOM is no different than any other data structure you've worked with so far. You probably recall that the DOM is considered a tree where everything stems from the trunk (the html element), and its two major branches, head and body, give way to everything else in the DOM. The entire DOM is a series of familial, hierearchical relationships.

Like the DOM, a JavaScript object, denoted by opening and closing curly braces, is a series of familiar and hierearchical relationships. 

--In the context of the DOM - HTML elements
The only difference is that in the context of the DOM, the children, parents, grandchildren and so on are HTML elements or text nodes. 

--In the context of JavaScript data structure
In a JavaScript data structure, they are properties, arrays, functions other objects and so on. They're all nested within each other, just like the DOM. This concept is critical to understand.

The DOM is literally a data structure
Don't believe it? Go to any website, even the one you're looking at right now, right click and open Chrome dev tools, and paste in this code:

let html = document.getElementsByTagName('html');
let children = html[0].children;
for (child of children) {
    console.log(child.tagName);
}

You'll see that the output is both the HEAD and BODY elements. The html element itself, when you use the document object to get it by its tag name, is a literal JavaScript object which you can iterate and access properties of just like you did in the data structures lesson. It's equivalent - albeit this is simplified - to building an object like this:

let html = [{
  children: [
    { tagName: 'HEAD' },
    { tagName: 'BODY' },
  ]
}];
console.log(html[0].children[1].tagName);

If you paste the above code into the console it will work exactly the same as getting the real HTML element (except that the one we've created here won't actually have all the real HTML content, of course). The structure, though, is exactly the same. html is an array of objects, the first of which is the object containing a property called children. That property itself is an array of objects, each with a tagName property.

In the real DOM, these objects are the HTML elements with all their properties such as height, width, attributes, their methods and functions, and eveything else you've worked with in this unit. The point is that if you know how to navigate, iterate and manipulate these data structures, you know how to navigate, iterate and manipulate the DOM! The following runnable example demonstrates, with no HTML content at all, how it's possible to access anything you need in the DOM:
*/

// Get the <html> element
let html = document.getElementsByTagName('html')[0];

// head and body
let head = html.children[0];
let body = html.children[1];
console.log('The first child of the HTML element is:', head);
console.log('The second child of the HTML element is:', body);

// find the URL of this script file (defined in the src attribute):
let scriptUrl = body.getElementsByTagName('script')[0].src;
console.log('URL for script.js is:', scriptUrl);

// That gave us the whole URL. What if we just want the filename? How about using window.location.href which will give us the whole URL leading up to script.js?
let baseUrl = window.location.href;
console.log('baseUrl is:', baseUrl);

// Split the full url using the baseUrl and get index 1
// Remember you don't have to split a string using a single character.
// You can split it using a whole string, like a URL!
splitUrl = scriptUrl.split(baseUrl);
console.log('Splitting using the baseUrl gives an array:', splitUrl);
scriptName = splitUrl[1];
console.log('Script filename is:', scriptName);

// Maybe we need to know all the stylesheets in use. First get all the links in the <head> element:
let links = head.getElementsByTagName('link');
console.log('Links in the head:', links);

// It's just an HTMLCollection...like an array! Iterate it!
for (let link of links) {
  // If the rel attribute is 'stylesheet', you've found one! Split it w/ the baseUrl like above to get its filename
  if (link.rel === 'stylesheet') {
    console.log('Found a stylesheet:', link.href.split(baseUrl)[1]);
  }
}

// The DOM is just one big data structure!