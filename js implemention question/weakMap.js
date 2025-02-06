let weakmap = new WeakMap();

// Create objects as keys
let obj1 = { name: "John" };
let obj2 = { name: "Doe" };

// Set values in WeakMap
weakmap.set(obj1, "Value 1");
weakmap.set(obj2, "Value 2");

// Get values from WeakMap
console.log(weakmap.get(obj1)); // "Value 1"
console.log(weakmap.get(obj2)); // "Value 2"

// Check if keys exist in WeakMap
console.log(weakmap.has(obj1)); // true
console.log(weakmap.has(obj2)); // true

// Delete a key-value pair
obj1=null
console.log(weakmap.has(obj1)); // false

// Clear all entries (though rarely used)
weakmap.clear();
console.log(weakmap.has(obj2)); // false
