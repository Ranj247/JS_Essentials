/*
The final step in being able to effectively work with forms in JavaScript is ensuring that the data being submitted is valid. This means verifying that all the required fields are filled out, all fields contain the correct type of data and all that data is formatted correctly, among many other things. You've undoubtedly seen form validation in action in the real world. Any time you're filling out an online form and see a message like "This field is required" or "Please enter a valid email address", you're seeing form validation at work. To do this validation yourself you can use a combination of HTML and JavaScript.
*/

/* Form validation is important for three reasons:*/

/*
It verifies that our applications get the correct data in the correct format so that they can function a expected.
It verifies that user data is safe and legitimate by forcing users to enter secure passwords, valid emails and so on.
It verifies that our own applications are safe from malicious users that might misuse forms to damage the application or steal data.
The simplest type of form validation is accomplished using HTML attributes such as those in the following table. These attributes are applied on the HTML input elements in the form and validate that the data is within the constraints specified by the attribute value.
*/

/*
Attribute---Description
max	        Specifies the maximum value of an input element
min	        Specifies the minimum value of an input element
pattern	    Specifies the value pattern of an input element
required	  Specifies that the input field requires an input
type	      Specifies the type of an input element
disabled	  Specifies that the input element should be disabled
*/

/* Here is an example of an HTML form that utilizes all of these attributes except disabled:*/

/*
<form id="registration-form" action="/register/" method="POST">
  <div class="username">
    <label for="username">Username</label>
    <input name="username" id="username" type="text" required>
  </div>
  <div class="email">
    <label for="email">Email</label>
    <input name="email" id="email" type="email" required>
  </div>
  <div class="password">
    <label for="password">Password</label>
    <input name="password" id="password" type="password" required>
  </div>
  <div class="confirm-password">
    <label for="confirm-password">Confirm Password</label>
    <input name="confirm-password" id="confirm-password" type="password" required>
  </div>
  <div class="age">
    <label for="age">Age</label>
    <input name="age" id="age" type="number" min="18" max="110" required>
  </div>
  <div class="phone">
    <label for="phone">Phone (numbers only)</label>
    <input name="phone" id="phone" type="text" pattern="[0-9]+" required>
  </div>
  <div class="join-newsletter">
    <label for="join-newsletter">Join Newsletter</label>
    <input name="join-newsletter" id="join-newsletter" type="checkbox" checked>
  </div>
  <div id="errors"></div>
  <div class="submit">
      <input type="submit" value="Register">
  </div>
</form>
*/

/*
This form is almost completely validated with HTML. 
- The email address format is validated by using type="email", 
- the age is verified by using a min and max value on the number input, 
- the phone number is verified with the pattern attribute which ensures it has no characters other than the numbers 0-9 and that it has at least one number in it (the + means "match between one and unlimited times"), 
- and all required fields are marked accordingly so any field left blank will cause validation to fail. Any field that doesn't pass the validation will raise a nice little notification for the user before submission is allowed, and this is built right into HTML5 so there's nothing you need to do to take advantage of it. 

-----------------------JavaScript Validation---------------------------
There is one subtle piece that HTML cannot validate though: whether the two password fields match. This is where JavaScript comes in and where you can combine everything you've learned about getting DOM elements, working with their values and handling form submission with event listeners:

function handleSubmit(event) {
  
  let p1 = form.elements['password'].value;
  let p2 = form.elements['confirm-password'].value;

  if (p1 !== p2) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>"
  } else {
    console.log('Validation successful!');
    form.submit();
  }

  event.preventDefault();
}

let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
*/

/*
The above snippet is pretty straightforward. We've written a function that is attached to the form as an event listener and it's listening for the submit event. The submit handler first prevents the default action of the form using event.preventDefault();, then verifies that the two passwords match by getting their values from the form and comparing them, and finally submitting only if they match. Otherwise, it places an error message in the errors div just above the submit button. You can see this in action in the following runnable example (note that it will return page not found when submitted correctly since there is no way for repl.it to handle the form data, but you can see the validation success message in the console). Try submitting the form with an invalid email address, non-numeric characters in numeric fields, or non-matching passwords and see what happens. Then try submitting the form with valid data and looking at the console:
*/

function handleSubmit(event) {
  event.preventDefault();
  let p1 = form.elements['password'].value;
  let p2 = form.elements['confirm-password'].value;

  if (p1 !== p2) {
    let errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>";
    errorDiv.style.display = 'block';
  } else {
    console.log('Validation successful!');
    form.submit();
  }
}

let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);