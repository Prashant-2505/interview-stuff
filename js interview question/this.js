//!  What do you mean by strict mode in javascript and characteristics of javascript strict-mode?




//* In JavaScript, strict mode is a feature that enforces stricter rules and better error handling in the code. When strict mode is enabled, the JavaScript interpreter becomes less forgiving and helps to prevent common mistakes and potentially problematic behavior. Here are the characteristics of JavaScript strict mode:

// "use strict"


//& No implied global variables:
//^ In strict mode, attempting to assign a value to an undeclared variable (myVar in this case) will throw a ReferenceError. Without strict mode, the variable would have been created as a global variable implicitly.



function func() {
    names = "guddu"
    console.log(names)
}

func()






//* Disallows deleting variables, functions, and function arguments:



var x = 10;
delete x; // Throws a SyntaxError in strict mode




//* Eliminates the use of octal literals:


var number = 0755; // Throws a SyntaxError in strict mode




//* Throws errors for duplicate parameter names:



function myFunction(a, b, a) { // Throws a SyntaxError in strict mode
  console.log(a + b);
}
myFunction(1, 2, 3);




//* Restricts the use of this in functions:

"use strict";

function myFunction() {
  console.log(this); // Outputs undefined in strict mode
}
myFunction();

//^  In strict mode, when a function is not called as a method or through call() or apply(), the value of this inside the function is undefined instead of the global object.



//*  Forbids duplicate property names in objects:



var obj = {
  prop: "value",
  prop: "new value" // Throws a SyntaxError in strict mode
};
