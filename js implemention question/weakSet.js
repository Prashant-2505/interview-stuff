let weakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

// Add objects
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has({ id: 1 })); // false (different reference)

// Delete an object
weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false
