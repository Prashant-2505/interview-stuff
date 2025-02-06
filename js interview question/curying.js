//* Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. This means that a curried function can be called with one argument at a time, and each function call returns another function that accepts the next argument.


//& Currying turns a function with multiple arguments into a series of functions each taking one argument.

//^ Instead of calling the function with all arguments at once, you call it with one argument, then call the resulting function with the next argument, and so on.

//! without curring
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5


//! with curuing
function add(a) {
    return function(b) {
        return a + b;
    };
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8
console.log(add(2)(3)); // Output: 5
