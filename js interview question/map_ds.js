/* This code creates a new Map object and adds three key-value pairs to it using the `set()` method. It
then creates an iterator using the `keys()` method and uses it to access the keys of the map in
order using the `next()` method. The console logs the value of each key returned by the iterator. */


// Method	Description
// set(key, value)	    Adds or updates a key-value pair
// get(key)	        Retrieves the value for a given key
// has(key)	        Checks if a key exists
// delete(key)	        Removes a specific key-value pair
// clear()	            Removes all elements from the Map
// size	            Returns the number of key-value pairs
// keys()	            Returns an iterator of all keys
// values()	        Returns an iterator of all values
// entries()	        Returns an iterator of [key, value] pairs
// forEach(callback)	        Iterates over the Map


const map = new Map();
map.set('key1','value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

// Accessing keys using the keys() method
const keysIterator = map.keys();
console.log(keysIterator.next().value); // 'key1'
console.log(keysIterator.next().value); // 'key2'
console.log(keysIterator.next().value); // 'key3'





/* This code creates a new Map object called `myMap` and adds three key-value pairs to it using the
`set()` method. It then creates an iterator using the `entries()` method and uses it to access the
key-value pairs of the map in order using the `next()` method. The console logs the value of each
key-value pair returned by the iterator as an array with the key as the first element and the value
as the second element. */
const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Accessing key-value pairs using the entries() method
const entriesIterator = myMap.entries();
console.log(entriesIterator.next().value); // ['key1', 'value1']
console.log(entriesIterator.next().value); // ['key2', 'value2']
console.log(entriesIterator.next().value); // ['key3', 'value3']



// The next() method is called on the iterator object multiple times. The first three calls to next() return an object with done set to false, indicating that there are more elements to iterate over. The value property contains the current element.

// However, in the fourth call to next(), done is true, indicating that the iteration is complete. The value property is undefined in this case because there are no more elements to iterate over.

// The done property is useful for determining when to stop iterating, especially in cases where the number of elements is not known in advance or can vary dynamically.





// There are multiple ways to define a Map in JavaScript. Here are the most common ways:

// 1) Using the new Map() constructor:

const map_A = new Map(
    [
        ['keyA','value1'],
        ['keyB','value2'],
        ['keyC','value3']
    ]
)
const eneries = map_A.entries()
console.log(eneries.next().value)
console.log(eneries.next().value)
console.log(eneries.next().value)
console.log(eneries.next().done)


//2)  Using the set() method to add key-value pairs:

const map3 = new Map();
map3.set('key1', 'value1');
map3.set('key2', 'value2');


//3) Using an existing iterable object:
const iterable = [['key1', 'value1'], ['key2', 'value2']];
const map4 = new Map(iterable);


//4)Using object literals and the Object.entries() method:
const obj = { key1: 'value1', key2: 'value2' };
const map5 = new Map(Object.entries(obj));



console.log("map iteration")


// To iterate over the entries of a Map object in JavaScript, you can use various methods. Here are three common approaches:
 
// 1) for of loop

const map_B = new Map(
    [
        ['keyA','value1'],
        ['keyB','value2'],
        ['keyC','value3']
    ]
)

for(entery of map_B )
{
    const [key,value] = entery
    console.log(`Key: ${key}, Value: ${value}`);
}

map_B.forEach((value,key)=>
{
    console.log(`Key: ${key}, Value: ${value}`);
})

const entrie = myMap.entries();
for (const entry of entrie) {
  const [key, value] = entry;
  console.log(`Key: ${key}, Value: ${value}`);
}
