//! Map


const myMap = new Map()

myMap.set( 1, 'dog')
myMap.set( 2, 'cat')
myMap.set( 3, 'monkey')
myMap.set( 4, 'tiger')
myMap.set( 5, 'fox')

console.log(myMap.get(1))

// Checking for Key Existence
console.log(myMap.has(1))
//Deleting a Key-Value Pair
myMap.delete(1);
console.log(myMap.has(1))

// iteration over map
 // for each it gave value first then key
myMap.forEach((value,key)=>
{
    console.log(`${key} : ${value}`)
})

// using for loop
for(let[key,value] of myMap)
{
    console.log(`${key}: ${value}`);
}






//! Differnce between map or object

//^ Both Map and objects in JavaScript are used to store collections of key-value pairs. However, there are some fundamental differences between them in terms of behavior, use cases, and capabilities


//* 1. Key Types:

//& Map: In a Map, keys can be of any data type, including objects, functions, and primitives (e.g., strings, numbers).

//& //& Object: In an object, keys can only be strings or symbols. If you use a non-string or non-symbol value as a key, it will be implicitly converted to a string.

//*2. Key-Value Pairs:

//& Map: A Map stores key-value pairs and maintains the order of entries based on the order of insertion. It allows you to iterate over entries in the order of insertion.

//& Object: An object also stores key-value pairs, but it doesn't guarantee the order of properties. The order of properties in an object is not guaranteed and can vary between different JavaScript engines or versions.

//*3. Iteration and Size:

//& Map: A Map is an iterable and provides built-in methods (forEach, keys, values, entries) to iterate over its entries. It also has a size property to get the number of entries.

//& Object: To iterate over properties in an object, you need to use a loop or methods like Object.keys, Object.values, or Object.entries. Objects do not have a built-in size property.

//*4. Garbage Collection (Memory Management):

//& Map: A Map allows for better memory management as the keys are weakly referenced, meaning that the keys don't prevent the objects from being garbage collected if there are no other strong references to them.

//& Object: Keys in an object are strongly referenced, and they can prevent the associated values from being garbage collected if there are other references to the object.

//*5. Use Cases:

//& Map: Use a Map when you need to maintain the order of entries, when you need keys of different types, or when you need weak references for keys.

//& Object: Use an object for most general use cases, especially when you have string or symbol keys.




// Map
const myMap2 = new Map();
myMap.set('name', 'John');
myMap.set(42, 'Answer to everything');
console.log(myMap.get('name'));  // Output: John
console.log(myMap.size);         // Output: 2

// Object
const myObj = {};
myObj['name'] = 'muko';
myObj[42] = 'Answer to everything';

console.log(myObj['name']);  // Output: John
console.log(Object.keys(myObj).length);  // Output: 2
