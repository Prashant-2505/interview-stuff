//! what is NAN ?

//& NaN property represents the “Not-a-Number” value. It indicates a value that is not alegal number.typeof of NaN will return a Number.To check if a value is NaN, we use the isNaN() function,


//* Note- isNaN() function converts the given value to a Number type, and then equates to NaN.

console.log(isNaN("Hello") )// Returns true
console.log(isNaN(345) )// Returns false
console.log(isNaN('1')) // Returns false, since '1' is converted to Number type which results in 0
console.log(isNaN(true)) // returns false, since true converted to Number type results in 1 a numb
console.log(isNaN(false)) // Returns false
console.log(isNaN(undefined)) // Returns true