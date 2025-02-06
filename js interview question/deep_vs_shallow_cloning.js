
//! Shallow cloning only copies the top-level properties of an object.
//&Nested objects are not cloned; instead, references to these objects are copied.
//*As a result, changes made to nested objects in the clone will also affect the original object.

const original = {
    name:"tom",
    age:23,
    address:{
        city:"delhi"
    }
}

const shallowClone = Object.assign({},original)

// anohter simple method is {...original}

// console.log(original)
// console.log(shallowClone)

shallowClone.address.city = "punjab"
shallowClone.name = "babu"

console.log(shallowClone) // { name: 'babu', age: 23, address: { city: 'punjab' } }
console.log(original)// { name: 'tom', age: 23, address: { city: 'punjab' } }



//~Deep Cloning

//*Deep cloning creates a completely independent copy of an object, including all nested objects. This means that changes made to the deep clone do not affect the original object, and vice versa.
const deepClone = JSON.parse(JSON.stringify(original))
deepClone.name ="papu"
deepClone.address.city="london"
// console.log(deepClone)
// console.log(original)