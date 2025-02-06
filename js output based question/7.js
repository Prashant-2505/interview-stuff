function Foo() {}  
Foo.prototype.bar = 42;  
const foo = new Foo();  
console.log(foo.__proto__ === Foo.prototype);  
console.log(Foo.__proto__ === Function.prototype);  



// The statement Foo.__proto__ === Function.prototype returns true because Foo is a function, and in JavaScript, all functions are objects that inherit from Function.prototype.