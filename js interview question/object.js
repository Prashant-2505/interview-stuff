// DIFFERENCE BETWEEN MAP AND OBJECTS




// DIFFERENCE 1

/* This code is creating an empty object `obj` and then adding three properties to it using bracket
notation. The keys for these properties are all the same (`'name'`) but the values are different
(`'John'`, `'Doe'`, and `'tom'`). When the object is logged to the console, it will show that the
value for the `'name'` key is `'Doe'`, because that was the last value assigned to that key. and it overwrie all the previous same key */

// Object example
const obj = {};
const key1 = 'name';
const key2 = 'name';
const key3 = 'name';


obj[key1] = 'John';
obj[key2] = 'Doe';
obj[key3] = 'tom';

console.log(obj); 



/* This code is creating an empty object `obj2` and then adding three properties to it using bracket
notation. The keys for these properties are different (`'name 1'`, `'name 2'`, and `'name 3'`) and
the values are `'John'`, `'Doe'`, and `'tom'`. When the object is logged to the console, it will
show all three properties with their respective values. beacus all the keys is different*/

// Object example 2
const obj2 = {};
const key4 = 'name 1';
const key5 = 'name 2';
const key6 = 'name 3';


obj2[key4] = 'John';
obj2[key5] = 'Doe';
obj2[key6] = 'tom';

console.log(obj2); 




// while in map if doing same making key same and assign value to it , then it still show that ther is 2 entries instead of object 


// Map example
const map = new Map();
const key7 = { id: 1 };
const key8 = { id: 1 };

map.set(key3, 'John');
map.set(key4, 'Doe');

console.log(map.size); 







// DIFFERENCE 2
// In the object example, the order of properties during iteration is not guaranteed. The keys can appear in any order.

// In the map example, the order of entries is maintained. When iterating over the map, the keys are guaranteed to be visited in the order they were added.



// Object example
const obj3 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let key in obj2) {
    console.log(key);
  }
  // Output (order not guaranteed):
  // a
  // b
  // c
  
  // Map example
  const map2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
  
  for (let [key, value] of map2) {
    console.log(key);
  }
  // Output (order guaranteed):
  // a
  // b
  // c
  



  // DIIFERENCE 3
  //SIZE CALCULATION

//   In the object example, to calculate the size (number of properties), we need to use Object.keys(obj).length to get an array of keys and then determine its length.

//   In the map example, the size is directly accessed using the size property.



  // Object example
const obJ4 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(Object.keys(obJ4).length); // Output: 3
  
  // Map example
  const map3 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
  
  console.log(map3.size); // Output: 3
  





//   Additional methods and features:

// Object example
const ONJ5 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(ONJ5.hasOwnProperty('a')); // Output: true
  console.log(Object.values(ONJ5)); // Output: [1, 2, 3]
  
  // Map example
  const map5 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
  ]);
  
  console.log(map5.has('a')); // Output: true
  console.log([...map5.values()]); // Output: [1, 2, 3]
  

















