/*
Of course because an input element in an HTML form is no different than any other element, it's possible to set the value attribute as well as getting it, using JavaScript. This means that just like you can get values out of a form, you can put values into a form as well. This is useful for all sorts of things, from adding a little convenience for your users to creating fully interactive forms that build themselves as the user fills them out.
*/

/* 
Consider an example such as a contact form, where a registered user might need to fill out their username, their email address and a message:

<form method="POST" action="/contact-us/">
  <div class="username">
    <label for="username">Username:</label>  
    <input type="text" id="username" name="username">
  </div>
  <div class="email">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
  </div>
  <div class="message">
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
  </div>
  <input type="submit" value="Submit" />
</form>

The user probably already submitted their email when registering for the site, and as a registered user they obviously already have a username. For the user, it's annoying and inconvenient to have to fill out three fields when their username and email could be prepopulated, especially if they send a lot of messages and thus have to fill out the form a lot. Instead, the developer could get their username and email out of a database and load the form with those fields already filled out:

let user = document.getElementById('username');
let email = document.getElementById('email');

user.value = 'johnsmith1';
email.value = 'john@johnswebsite.com';

The above is simplistic but it demonstrates the functionality well. You might be asking yourself why you wouldn't just use the value attribute right on the form fields themselves, like this:

<input type="text" id="username" name="username" value="johnsmith1">
...
<input type="email" id="email" name="email" value="john@johnswebsite.com">
You're not wrong. You could do this. However, this restricts the value of the fields to something static, and it also doesn't allow you to do anything before filling out those fields. By doing it in JavaScript, you could execute all kinds of JavaScript code before filling out the fields, such as checking how long the user has been a member of the site, validating that their email address is confirmed, or anything else you can imagine. Prepopulating form fields with JavaScript is also useful for things like filling out parts of a user's address based on their location, upselling by preselecting extra options in checkout forms, and a multitude of other things. None of this would be possible with simple HTML using the value attribute. The basics of this example are demonstrated here:
*/

let user = document.getElementById('username');
let email = document.getElementById('email');

user.value = 'johnsmith1';
email.value = 'john@johnswebsite.com';