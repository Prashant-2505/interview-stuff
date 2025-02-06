// What are lambda or arrow functions
// arrow vs normal function


const func = () => {
    console.log("it is lambda function")
}
func()




/* This code is creating an object `obj` with a property `name` set to `'John'` and a method
`sayHello`. The `sayHello` method uses an arrow function inside a `setTimeout` function to log a
greeting message with the `name` property of the object. When `obj.sayHello()` is called, it will
output `Hello, John!` after a delay of 1 second. The arrow function is used to preserve the value of
`this` inside the `setTimeout` function, which refers to the object `obj`. */
const obj = {
    name: 'John',
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

obj.sayHello(); // Output: Hello, John!






/* The code is creating an object `obj2` with a property `name` set to `'John'` and a method
`sayHello`. The `sayHello` method uses a regular function inside a `setTimeout` function to log a
greeting message with the `name` property of the object. When `obj2.sayHello()` is called, it will
output `Hello, undefined!` after a delay of 1 second. This is because the `this` keyword inside
the regular function refers to the global object, not the `obj2` object. Therefore, `this.name` is
undefined. */




const obj2 = {
    name: 'John',
    sayHello: function () {
        setTimeout(function () {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

obj2.sayHello(); // Output: Hello, undefined!





// arrow function is not hoisted
// normal function is hoisted

funct4();
function funct4() {
    console.log("Normal function is hoisted.");
}

funct3();
let funct3 = () => {
    console.log("Arrow function is not hoisted.");
};







