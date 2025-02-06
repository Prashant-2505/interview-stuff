//! What is a prototype chain ?

//* In JavaScript, the prototype chain is a way of inheriting properties and methods from other objects.Every object has a prototype object, which is another object that contains properties and methods that can be inherited by the first object.The prototype object can also have a prototype object, and so on, creating a chain of inherited properties and methods.The end of this chain is called the null prototype.

var parent = {
    name: "ben",
    sayHello: function() {
      console.log(`Hello ${this.name}`);
    }
  };
  
  parent.sayHello();
  // output -> Hello ben
  
  var child = Object.create(parent);
  child.name = "tom";
  child.sayHello();


  parent.age = 30;
  //~ if we trying to access child age which is not declared yet but still give it output of 30 because it iherit the age from the parent object
  console.log(child.age)
  