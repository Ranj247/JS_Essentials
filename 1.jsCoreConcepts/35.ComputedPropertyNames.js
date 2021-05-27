/*
Computed property names allow you to put a value or an expression in brackets [], which will be computed and used as a objects key.

In the previous lessons on objects, you learned about object keys and values, and how you can create either an empty object and then create the keys and values.
*/

// let person = {}
// person.name = "john";
// console.log(person.name) → john

/* Or you can create the same object as follows*/

// let person = {name: "john"};
// console.log(person.name) → john

/*Computed property names gives us another way to do this, so let"s look at an example.*/

// let prop = "name";
// let person = {[prop]: "john"};

/*
So we have created a variable and we want the value assigned to it to be the name of a key in the person object and to do this we have added the variable name wrapped in [] in the object where we would normally place the key.

So now if you log out person.name you would get john even though looking at the object there is no key name.
*/

// console.log(person.name) // john

/* But you can also access that value of that key like */

// console.log(person[prop]) // john

/*
So we can see from doing: let prop = "name" using [prop] in the object is the same as doing {name: "John"}

So that was using a value as a computed property, what is using an expression as a computed property?

Let"s adjust our example.
*/

let prop = "name";
let person = {
    [prop]: "john", 
    lastName: "smith",
    ["full" + prop]: "john smith"
};

/*
Ok so we have added ["full" + prop]: "john smith" So now we have a computed expression and the key evaluates to fullname
*/

console.log(person.fullname) // john smith

/*
Why learn this? When what you have been taught does the same and probably is easier to understand? For most cases when working with objects you will not use this syntax.

We have shown you so that you will recognise this syntax {[prop]: value}. You may see it in production code or if you study the JavaScript React framework later on. You won't need this now, but you can always refer back to it for a refresher later.
*/