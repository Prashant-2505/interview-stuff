// Why do we use the word “debugger” in javascript?


// The word "debugger" in JavaScript is used to refer to a statement that stops the execution of the code and calls the debugging function. This is useful for debugging JavaScript code, as it allows you to examine the values of variables and step through the code line by line.

let a = 6;
let b = 9;
let c = a * b;
debugger;
console.log(c);



// Difference between var and let keyword in javascript
// 1. From the very beginning, the 'var' keyword was used in JavaScript programming
// whereas the keyword 'let' was just added in 2015.
// 2. The keyword 'Var' has function scope. Anywhere in the function, the variable
// specified using var is accessible but in ‘let’ the scope of a variable declared with
// the 'let' keyword is limited to the block in which it is declared. Let's start with a
// Block Scope.
// 3. 'var' declares a variable that will be hoisted but 'let' declares a variable that will
// be hoisted.