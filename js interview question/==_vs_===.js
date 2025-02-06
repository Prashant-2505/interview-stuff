
// What is the difference between == and === operators ?


// The == and === operators in JavaScript are used for comparison, but they have different behaviors:

//     The == operator (loose equality) compares values for equality after performing type coercion if necessary. It allows for comparison between different types.

console.log(5 == '5');  // true, as the string '5' is coerced to a number before comparison
console.log(true == 1); // true, as true is coerced to the number 1 before comparison
console.log(null == undefined); // true, as null and undefined are considered equal

// The == operator tries to make the operands compatible before comparing them. It may result in unexpected or unintuitive behavior, so it's generally recommended to use === for strict equality comparisons.




// The === operator (strict equality) compares values for equality without performing type coercion. It requires both the value and the type to be the same for a true comparison.


console.log(5 === '5'); // false, as the operands have different types
console.log(true === 1); // false, as the operands have different types
console.log(null === undefined); // false, as null and undefined are different types


// The === operator provides more predictable and precise comparisons because it doesn't perform type coercion. It checks both the value and the type of the operands.

// In general, it's recommended to use the === operator (strict equality) for most comparisons unless you specifically require type coercion, in which case you can use the == operator (loose equality).









console.log(5 == '5'); 
 // true, as the string '5' is coerced to a number before comparison
console.log(true == 1); // true, as true is coerced to the number 1 before comparison
console.log(null == undefined); // true, as null and undefined are considered equal



console.log(5 === '5'); // false, as the operands have different types
console.log(true === 1); // false, as the operands have different types
console.log(null === undefined); // false, as null and undefined are different types