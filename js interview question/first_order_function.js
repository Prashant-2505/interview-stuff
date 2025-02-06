// What is a first class function or What is a first order function

// a first-class function refers to a function that can be treated like any other variable or data type. This means that you can assign functions to variables, pass them as arguments to other functions, and even return them as values from other functions.




// Assigning to variables: You can assign a function to a variable just like you would assign a number, string, or any other data type.
const greet = function (name) {
    console.log(`Hello, ${name}!`);
};

greet("John"); // Output: Hello, John!



function DoOperation(operation, a, b) {
    return operation(a, b)
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(DoOperation(add,2,3))
console.log(DoOperation(multiply,2,3))