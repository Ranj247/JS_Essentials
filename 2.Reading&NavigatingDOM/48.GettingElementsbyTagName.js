/*
The getElementsByTagName() method is a method of the document object which, as its name implies, gets all elements with a specified tag name. This method is the first of many you'll learn which have the ability to get specific nodes (which you learned about in the last unit) out of the DOM tree so you can store them in variables, read their values, manipulate them or delete them. 

-----The syntax of this method is simple:----
document.getElementsByTagName('tagname');

--The getElementsByTagName() method returns an ---HTMLCollection,--- which is an array-like object containing all the elements of the tag name you specify. 

The collection is iterable like an array and thus can be indexed, and also has a few properties and methods such as .item() which returns the element at the specified index, .length which returns the number of elements found, and .namedItem()which returns an element with the specified id attribute if it exists in the collection.

*/

let paragraphs = document.getElementsByTagName('p');

// All paragraphs
console.log('The HTMLCollection contains:', paragraphs);
console.log(paragraphs.item(4).textContent);
console.log(paragraphs[4].textContent);


// Iterate and print all their texts:
for(let i = 0; i < paragraphs.length; i++) {
    console.log('This is the', paragraphs[i].textContent);
}

// Get a specific index:
console.log("Index 2 is:", paragraphs[2].textContent);

// Same as above, but using the .item() method:
console.log("Index 4 is:", paragraphs.item(4).textContent);

// Get the specific paragraph, log its id attribute:
console.log('The specific paragraph has an id of:', paragraphs.namedItem('specific').id);