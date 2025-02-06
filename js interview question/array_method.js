//!   What do you mean by BOM

//& Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object




//! reduce method

//* the reduce() method is an array method in JavaScript used to reduce an array to a single value. It iterates over each element of the array, performing a user-supplied function on each element. The reduce() method takes two main parameters: a callback function and an optional initial value.


//^ array.reduce(callback, initialValue);


//~ The reduce() method is an array method in JavaScript used to reduce an array to a single value. It iterates over each element of the array, performing a user-supplied function on each element. The reduce() method takes two main parameters: a callback function and an optional initial value.

//~ Here's the basic syntax of the reduce() method:

//~ javascript

//~ array.reduce(callback, initialValue);

//~     callback: This is a function to execute on each element in the array, taking four arguments: accumulator, current value, current index, and the array itself.
//~         accumulator: The accumulated value that is returned after each iteration. It is the result of the previous callback invocation or the initialValue.
//~         currentValue: The current element being processed in the array.
// ~        currentIndex (optional): The index of the current el~ement being processed.
//~    array (optional): The array reduce() was called upon.

//~     initialValue: (Optional) The initial value that will be used as the first argument to the callback function in the first iteration. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.

//~ The reduce() method executes the callback function for each element in the array, passing the current element, the accumulator, and optionally the current index and the array itself. It accumulates the result of the callback function into an accumulated value (the accumulator) and returns this accumulated value at the end of the iteration.


const number = [1,2,3,4,5]

const sum = number.reduce((acc,value)=>
{
    return acc+value;
},0)

console.log(sum)





//! what is rest parameter and sperad operator

//^ the rest parameter and spread operator are two important features in JavaScript introduced in ECMAScript 6 (ES6) that enhance the way you work with functions and arrays.


//* Rest Parameter (...)

//* The rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) followed by a parameter name and collects all remaining arguments into an array.


function sum2(...num)
{
   return num.reduce((acc,val)=> acc+val,0) // here 0 are initial value
}

console.log(sum2(1,2,3,4,5))


function greet(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`);
  }
  
  const args = ['John', 'Doe'];
  greet(...args);  // Output: Hello, John Doe!
  











  //! Spread Operator (...)

//~ The spread operator (...) allows you to expand elements of an array (or any iterable) into individual elements. It can be used in function calls, array literals, or other contexts where multiple elements are expected.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]


const arr3 = [0,2,3]
 
 const arr4 = [1,5,6, ...arr3]
 console.log(arr4)