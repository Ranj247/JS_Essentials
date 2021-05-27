/*
The entire purpose of JavaScript in the context of HTML is to get, set, modify and manipulate parts of the DOM tree in order to add interactivity to your webpages. To do this requires you to effectively navigate the DOM tree so you can access the elements you wish to modify. Luckily, it's not too difficult to do this, since everything is, well, a tree! To access any individual element, all you need to do is drill down to it from the top of the tree.
*/

/* 
The DOM can actually be thought of as an upside down tree, where the trunk is at the top and all the branches and leaves hang off the bottom. From here we can make the analogy that:
*/

/*
The entire tree (the document) lives inside the window
The trunk of the tree is the <html> element, from which all other elements (branches) emanate
From the trunk, the tree has two major branches, <head> and <body>
The smaller branches of the tree (links, headings, paragraphs, etc) emanate from either the <head> or the <body> element
Each branch of the tree has a unique path you must take to access it, beginning from the trunk and following the branches to get there
At the end of each branch is a leaf. The leaves represent the actual content (text) of the webpage
*/

/* Document Nodes: */

/*
In more technical terms, every item described in the tree above - the elements, branches, leaves and so on - are called nodes.*/

/*

/* What you will actually be doing with JavaScript is navigating around the DOM tree to access different nodes, modifying them, deleting them, adding new ones and so on. */ 

/* The nodes represent:- 

- HTML element itself to individual HTML elements, 
- paragraphs, links, headings, images, even classes and attributes. 

*/

/* In the DOM tree */ 

/* Everything is a node, and each node is an object with properties that can be manipulated, created and deleted. */

