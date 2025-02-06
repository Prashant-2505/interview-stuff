//!  Explain “this” keyword.

//~  The this keyword in JavaScript refers to the current object. It is a special keyword that can be used to access the object's properties and methods, and to invoke the object's constructor.

//~ The this keyword can be used in a variety of ways in JavaScript. Here are some of the most common uses:

//^  Global Scope: In the global scope (outside any function), this refers to the global object, which is window in browsers or global in Node.js.

console.log(this); // Outputs the global object (window in browsers, global in Node.js)


//^ Function Invocation: When a function is invoked as a standalone function, without any context, this still refers to the global object (window/global).

function myFunction() {
    console.log(this);
  }
  
  myFunction(); // Outputs the global object (window in browsers, global in Node.js)


  //^  Method Invocation: When a function is called as a method of an object, this refers to the object on which the method is called.

  var obj = {
    name: "John",
    sayHello: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  obj.sayHello(); // Outputs "Hello, John"
  



  //^ Constructor Invocation: When a function is used as a constructor with the new keyword, this refers to the newly created instance of the object

  function Person(name) {
    this.name = name;
  }
  
  var person = new Person("John");
  console.log(person.name); // Outputs "John"
  
  

  //^  Explicit Binding: The call() and apply() methods allow you to explicitly specify the value of this within a function by providing a context object as an argument.

  function greet() {
    console.log("Hello, " + this.name);
  }
  
  var obj = {
    name: "John"
  };
  
  greet.call(obj); // Outputs "Hello, John"



  //^  Arrow Functions: Arrow functions do not bind their own this value. Instead, they lexically capture the this value of the enclosing context.

  var obj = {
    name: "John",
    sayHello: function() {
      setTimeout(() => {
        console.log("Hello, " + this.name);
      }, 1000);
    }
  };
  
  obj.sayHello(); // Outputs "Hello, John" after 1 second
  
  