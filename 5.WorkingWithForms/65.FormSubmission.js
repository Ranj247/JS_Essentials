/*
To effectively work with forms in JavaScript, you need to be able to populate and get the values of fields and also know how to handle form submission. To do this you'll need to understand three main things:

How to capture the submit event when a user submits a form, so you can handle the event in JavaScript
How to submit a form yourself, so you don't need to depend on a user to do it
How to prevent the default behavior of the form, if you're going to override it with JavaScript
Luckily all three of these concepts are quite simple. Let's look at each one individually:

Capturing the Form's Submit Event:
You've already learned about event handlers in JavaScript. The form element's submit event is just the same as the others you've learned. To capture it there are two things you can do:

Attach the onsubmit attribute to the form element itself in the HTML
Attach an event listener to the form and listen for the submit event
The second option, like with the other events, is the preferred option because it gives you more flexibility and keeps your code more segregated, clean and easy to maintain. For completeness though we'll look at both options:

Using the onsubmit attribute:

index.html:
<form id='login-form' action="" method="POST" onsubmit="handleSubmit(event);">
  ... 
</form>

script.js:
function handleSubmit(event) {
  // handle the event
}
Using the submit event with an event listener:

index.html:
<form id='login-form' action="" method="POST">
  ...
</form>

script.js:
function handleSubmit(event) {
  // handle the event
}

let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleSubmit);
In the form handler (the handleSubmit() function above) you can access any of the form values needed using the value attribute on each form element. What you decide to do with those values is up to you. A common workflow might be capturing all the values, creating a JavaScript object to hold them all, and POSTing them to the server from JavaScript, waiting for the response, clearing the form and sending the user a success message allowing them to submit the form without even refreshing the page! To do that you'll need to understand the next section:

Submitting a Form With JavaScript:
Every form element in HTML has a submit() method you can use to submit the form using JavaScript. To use it is simple; just get the form element itself, do whatever processing you need to do with the values the user has entered, and then call .submit():

index.html:
<form id="login-form" action="/login/" method="POST">
  ...
</form>

script.js:
function handleSubmit(event) {
  ...
  loginForm.submit();
}

let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleSubmit);
The above example is identical to the previous one except that it adds the submit() method at the end of the handleSubmit() function. This is a common workflow: the user fills out the form, the site captures the submit event with an event listener, does some processing or validation of the form values, calls form.submit() and returns some sort of response to let the user know whether or not it was successful. There is one more thing you'll need in order to do this cleanly though:

Preventing the Default Form Behavior:
By default, when you create an input with type="submit", its default behavior is to submit the form to the url specified in the action attribute. Without JavaScript, this usually means that the page will reload as the data is submitted to a server via an HTTP GET or POST request. With JavaScript, though, you might want to do any number of things in response to a form submission, and in many cases you may not want the page to refresh or you might want to use the form for something totally different than its default behavior. For this purpose, there is event.preventDefault();, which stops the default action of an element in its tracks and allows you to do whatever you want instead. Whenever you want to intercept the submission of a form in JavaScript, you should always prevent the default action if you plan to submit the form after processing it with your JS code. Otherwise, clicking the submit button will trigger both your JavaScript code as well as the default action and will result in unexpected behavior and potentially duplicate form submissions. Using preventDefault() is simple, just add it as the very first thing in your event handler:

index.html:
<form id="login-form" action="/login/" method="POST">
  ...
</form>

script.js:
function handleSubmit(event) {
  event.preventDefault();
  ... // Everything else you want to do  
  loginForm.submit();
}

let loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', handleSubmit);
By combining these three concepts together - capturing the submit event, preventing the default action, and submitting the form yourself with JavaScript - you can successfully intercept any form submission and use it to execute your JavaScript code. The following example demonstrates a couple ways to work with form submission in JavaScript (note the use of the form's elements property in the second form's submit handler, which is an alternative, simpler way to get the elements and their values):
*/

let contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Do our own stuff
  console.log('Submitting...');

  // Submit it ourselves
  contactForm.submit();

  // Do more of our own stuff
  console.log('Submission Complete!');
}


let contactForm2 = document.getElementById('contact-form2');
contactForm2.addEventListener('submit', handleSubmit2);

function handleSubmit2(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Note the use of .elements (a simpler way to get form field values and using the elements id eg ['username'])
  let userName = contactForm2.elements['username'].value;
  let email = contactForm2.elements['email'].value;
  let message = contactForm2.elements['message'].value;

  // Remember template literals with backticks?
  let html = `
    <p>Hi ${userName}! Thanks for sending us a message! We'll respond to ${email} soon. For reference, the message you submitted is below:</p>
    <p>${message}</p>
  `;

  // Put the above HTML in the response div below the form
  let responseDiv = document.getElementById('response');
  responseDiv.innerHTML = html;
  responseDiv.style.display = 'block';
}