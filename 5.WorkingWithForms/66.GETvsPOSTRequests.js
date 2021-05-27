/*
An important distinction when working with forms is whether the data is submitted via a GET or a POST request. This isn't just relevant to JavaScript either - it's actually part of the HTTP request/response cycle itself. 

1) GET request:- Submits the form data through the URL as URL parameters.
- Form data submitted via a GET request will always be visible to the user in their URL
2) POST request:- Submits it in the data component of the HTTP request itself. 
- POST data will remain hidden 

This is an important distinction to make, especially when it comes to working with sensitive form data.

The determination of whether to use GET or POST when submitting a form is made using the method attribute of the form element in the HTML. 

--------------------------------preventDefault()---------------------------------
A form with method="POST" will keep the data hidden while a form using method="GET" will encode it as URL parameters and submit it via the URL. For forms that don't submit anything at all (for example those that have their default action prevented and are only used as a means of modifying the DOM), the method attribute can be left off completely, but it's important to know that if you don't specify it, it will default to GET which could expose sensitive data if you forget to use event.preventDefault().
*/

/* To illustrate, here is a form submitted with the POST method: */

/*
<form method="POST" action="/login/">
  ...
</form>
And the equivalent form using the GET method:

<form method="GET" action="/login/">
  ...
</form>
*/

/*

-------------------------Recommendation-------------------------------------------
In general you should prefer to submit form data using POST, but using GET is sometimes required (for example in order to generate sharable URLs which have captured form data, e.g. https://www.example.com/search?query=thing). In this example, the user could copy the entire URL, including their search for "thing" and send it to a friend. Using POST would not allow this because the query would be hidden in the POST request. The opposite requirement would be a login form: for obvious reasons you would not want your username and password to be submitted as URL parameters which could show up in the browser history or be shared publicly!

The distinction between GET and POST will become more important once you need to make GET and POST requests with your JavaScript and access that data on a back end server. For now just remember the key difference between them and take a look at the following runnable example which illustrates it:
*/

