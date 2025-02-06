let obj = {
  name: "john",
  speak: function () {
    console.log(this.name + " speaking");
  },
  __proto__: {
    age: 90,
    speakAge: function () {
      console.log(this.name + " speaking " + this.age);
    },
    __proto__: {
      weight: "80kg",
      speakWeight: function () {
        console.log(
          this.name + " speaking " + "his wieght is " + this.weight + " and age is " + this.age
        );
      },
    },
  },
};

obj.speakWeight();




// Level 1: Base object
const animal = {
    type: 'Animal',
    speak: function() {
      console.log('Animal makes a sound');
    }
  };
  
  // Level 2: Intermediate object
  const dog = Object.create(animal);
  dog.breed = 'Labrador';
  dog.speak = function() {
    console.log('Dog barks');
  };
  
  // Level 3: Child object
  const myDog = Object.create(dog);
  myDog.name = 'Max';
  
  // Accessing properties and methods
  console.log(myDog.name); // "Max" - Property of myDog
  console.log(myDog.breed); // "Labrador" - Inherited from dog
  console.log(myDog.type); // "Animal" - Inherited from animal
  myDog.speak(); // "Dog barks" - Overridden method in dog
  
  // Accessing the prototype chain
  console.log(Object.getPrototypeOf(myDog)); // dog object (Level 2)
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(myDog))); // animal object (Level 1)
  
