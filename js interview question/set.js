//!    Explain set

//^    In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive or object references. A Set is a collection of values, where each value can occur only once within the Set. This makes it suitable for tasks that require unique values, such as removing duplicates from an array.


const mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('apple'); // Ignored, as 'apple' already exists in the set

console.log(mySet.has('apple'));  // Output: true
console.log(mySet.has('orange')); // Output: false


// deletion on set
mySet.delete('banana');




mySet.add('cat');
mySet.add('dog');
mySet.add('monkey');
mySet.add('snake');

// iterate over set

//for each loop
mySet.forEach(value => {
    console.log(value);
  });
  
  // Or using a for-of loop
  for (const value of mySet) {
    console.log(value);
  }
  













//!   Explain WeakSet in javascript

//*   WeakSet is a built-in object in JavaScript that allows you to create a collection of weakly held (or "weakly referenced") objects. Unlike Set, WeakSet allows only objects to be stored and does not prevent their garbage collection. In other words, it doesn't prevent objects from being removed from memory if they are no longer referenced elsewhere in the program.let weakSet = new WeakSet();

let weakSet = new WeakSet();


const obj1 = { name: 'John' };
const obj2 = { name: 'Doe' };

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));  // Output: true

// Removing an object from the WeakSet
weakSet.delete(obj1);

console.log(weakSet.has(obj1));  // Output: false
