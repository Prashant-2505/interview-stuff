// Constructor function for creating Person objects
function Person(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function() {
    return 'Hello, my name is ' + this.name;
  };
  
  // Creating an instance of Person
  const john = new Person('John');
  
  // Accessing a property and invoking a method
  console.log(john.name);    // Output: John
  console.log(john.greet());  // Output: Hello, my name is John
  