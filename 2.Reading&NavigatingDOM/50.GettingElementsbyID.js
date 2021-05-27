/*
The getElementById() method gets a specific element: the one with the id attribute you specify. 
*/

let firstHeading = document.getElementById('first-heading');
let secondHeading = document.getElementById('second-heading');
let thirdHeading = document.getElementById('third-heading');
let fourthHeading = document.getElementById('fourth-heading');

console.log('Text content of the first heading is:', firstHeading.textContent);
console.log('Text content of the second heading is:', secondHeading.textContent);
console.log('Text content of the third heading is:', thirdHeading.textContent);
console.log('Text content of the fourth heading is:', fourthHeading.textContent);