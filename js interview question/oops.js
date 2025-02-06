//! Class and onject and constructor  same as c++


//& class ---> A class is a blueprint that defines the structure and behavior of objects. It includes properties (attributes) and methods (functions) that the objects created from this class will have. Classes allow for a more organized and reusable way to define similar objects.

//&  Constructor --->  The constructor is a special method within a class that gets called when you create an instance of that class (an object). It's used to initialize the object's state and define initial values for its properties. The constructor is typically named constructor

//& Object --->  An object is an instance of a class. It is a concrete instantiation of the blueprint defined by the class. Objects created from a class have access to the properties and methods defined within the class.




class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Creating an instance of the Person class
  const person1 = new Person('John', 30);
  
  // Accessing properties and invoking a method
  console.log(person1.name);         // Output: John
  console.log(person1.age);          // Output: 30
  console.log(person1.sayHello());   // Output: Hello, my name is John and I am 30 years old.
  