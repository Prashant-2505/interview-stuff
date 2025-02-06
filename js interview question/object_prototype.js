//! explain object prototype

//* In JavaScript, the concept of object prototypes is fundamental to how objects inherit properties and methods from other objects. Understanding prototypes is key to grasping how inheritance works in JavaScript

//& Every object in JavaScript has an associated prototype object, which is a reference to another object. The prototype object acts as a blueprint for the properties and methods that an object should inherit. When you access a property or method on an object, and the object itself doesn't have that property or method, JavaScript looks up the prototype chain to find it in its prototype or further up the chain.


// constructor
function Person(name,age)
{
    this.name = name,
    this.age = age
}
// Adding a method to the Person prototype
Person.prototype.sayHello = function()
{
    console.log(`helo my name is ${this.name} and i m ${this.age} year old`)
}

var person1 = new Person("golu",90)
 person1.sayHello()