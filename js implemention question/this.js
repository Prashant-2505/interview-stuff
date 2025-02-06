


//!1. this in a Global Context
//* In the global execution context (outside any function):

//^ In non-strict mode, this refers to the global object (window in browsers, global in Node.js).
//^ In strict mode, this is undefined.
console.log(this); // In browser: Window; In Node.js: global

'use strict';
console.log(this); // undefined



//! 2. this in a Function
//* The value of this depends on how the function is called.

//& Normal Function (Non-Strict Mode):
//& this refers to the global object.
function showThis() {
  console.log(this);
}
showThis(); // In browser: Window

//& Normal Function (Strict Mode):
//& this is undefined.

'use strict';
function showThis() {
    console.log(this);
}
showThis(); // undefined


//! 3. this in an Arrow Function
//^ Arrow functions don’t have their own this. Instead, they inherit this from their surrounding lexical context.

const obj = {
    name: "Alice",
    greet: function() {
        const arrow = () => {
            console.log(this.name); // `this` is inherited from the `greet` function
        };
        arrow();
    },
};
obj.greet(); // Outputs: Alice