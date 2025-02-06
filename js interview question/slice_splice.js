// What is the purpose of the array slice method and splice ?


// slice method:

// Purpose: The slice method returns a shallow copy of a portion of an array into a new array, without modifying the original array.

// Syntax: array.slice(start, end)

// Parameters:
//  start (optional): The index at which to begin extracting elements (inclusive). If omitted, slice starts from the beginning of the array.
//    end (optional): The index at which to stop extracting elements (exclusive). slice extracts up to, but does not include, the element at this index. If omitted, slice extracts all elements from start until the end of the array.
// Returns: A new array containing the extracted elements.

const fruits = ['apple', 'banana', 'orange', 'mango'];
const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ['banana', 'orange']



// splice method:

// The splice() method is a JavaScript method that is used to modify the contents of an array by removing or replacing existing elements and / or adding new elements in place.The splice() method takes three or four arguments:

//     The index of the first element to be removed or replaced.
//     The number of elements to be removed.
//     An array of new elements to be added.
//     A boolean value indicating whether the removed elements should be kept.

// The splice() method returns an array of the removed elements.

// Here is an example of how to use the splice() method to remove the 

const myArray = ["Bard", "Bob", "Alice"];

const removedElement = myArray.splice(0, 1);

console.log(myArray); // ["Bob", "Alice"]
console.log(removedElement); // ["Bard"]


// The splice() method can also be used to replace existing elements in an array. For example, the following code replaces the first element in the array with the string "Hello":

const myArray2 = ["Bard", "Bob", "Alice"];

myArray2.splice(0, 1, "Hello");

console.log(myArray2); // ["Hello", "Bob", "Alice"]


// The splice() method can also be used to add new elements to an array. For example, the following code adds the string "World" to the end of the array:

const myArray3 = ["Bard", "Bob", "Alice"];

myArray3.splice(3, 0, "World");

console.log(myArray3); // ["Bard", "Bob", "Alice", "World"]
