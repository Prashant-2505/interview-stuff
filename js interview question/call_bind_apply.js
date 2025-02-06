//! what is call()  bind()  apply() method and differences ?

//$ call()
//& The call() method is used to call a function with a different this value than the one that the function was originally defined with. The this value is a special keyword in JavaScript that refers to the object that the function is being called on. By changing the this value, you can make the function behave differently depending on the context in which it is called.

//* The call() method takes two arguments: the first argument is the this value, and the second argument is an array of arguments to be passed to the function. The following code shows how to use the call() method to call a function with a different this value:

//* first value is refernce oe this value and second value is argument

//* basically in normal word call method is used to borrow function and take two argument 1st is refernce like this value and second and 2nd is argument


const myFunction = function (name) {
  console.log(`Hello, ${name}`);
};

const myObject = {
  name: "Bard",
};

myFunction.call(null, "bob");



const myFunction2 = function (name) {
  console.log(`Hello, ${name}`);
};

const myArray = ["Bard", "Bob"];

myFunction2.call(null, myArray[0]); // Output: "Hello, Bard"

myFunction2.call(myArray, myArray[1]); // Output: "Hello, Bob"




let obj = {
  name:'golu',
  printName :function()
  {
      console.log("hi" + " " + this.name)
  }
}

obj.printName()

let obj2 = {
  name:"minta"
}

obj.printName.call(obj2)




// apply()
// The apply() method is a JavaScript method that allows you to call a function with a different this value than the one that the function was originally defined with. The this value is a special keyword in JavaScript that refers to the object that the function is being called on. By changing the this value, you can make the function behave differently depending on the context in which it is called.

// The apply() method takes two arguments: the first argument is the this value, and the second argument is an object that contains the arguments to be passed to the function. The following code shows how to use the apply() method to call a function with a different this value:

const myFunction3 = function (name) {
  console.log(`Hello, ${name}`);
};

const myObject2 = {
  name: "Bard",
};

myFunction.apply(myObject2, ["Bob"]); // "Hello, Bob"



//bind ()

// bind is used to create a new function called myBoundFunction based on myFunction. The first argument null sets the this value for the function, and the subsequent argument "Alice" binds the value to the name parameter of myFunction. The resulting myBoundFunction is a new function that is ready to be invoked.

// When myBoundFunction() is called, it outputs "Hello, Alice" because the name argument is already bound during the creation of the bound function.

// The bind method is particularly useful when you want to create a new function with a predetermined this value or when you want to partially apply arguments to a function, creating a new function with some arguments already provided.

// You can also combine bind with other functions or utilize it in more complex scenarios, allowing you to customize the behavior of functions and their execution context.


const myFunction4 = function (name) {
  console.log(`Hello, ${name}`);
};

const myBoundFunction = myFunction.bind(null, "Alice");

myBoundFunction(); // Output: "Hello, Alice"







// logical exmaple of call ()

var person1 = { fname: "tom", lname: "holland" }
var person2 = { fname: "ben", lname: "holland" }

function invite(greet1, greet2) {
  console.log(greet1 + " " + this.fname + " " + this.lname + " " + greet2)
}
// with call method
invite.call(person1, 'hello', 'how are you')
// without cal method
invite(person1, 'hello', 'how are you')




// logical exmaple of bind ()
var person3 = {firstName: 'John', lastName: 'Rodson'};
var person4 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

var inviteperson3 = invite.bind(person3,'Hello', 'How are you?');
var inviteperson4 = invite.bind(person4);
inviteperson3(); 
inviteperson4('Hello', 'How are you?'); 




// Apply: Invokes the function with a given this value and allows you to pass in arguments as an
// array


var person5 = {firstName: 'John', lastName: 'Rodson'};
var person6 = {firstName: 'Jimmy', lastName: 'Baily'};
function invite(greeting1, greeting2) {
console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}

invite.apply(employee1, ['Hello', 'How are you?']); 
invite.apply(employee2, ['Hello', 'How are you?']);