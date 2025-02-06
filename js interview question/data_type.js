// What are the different data types present in javascript?

// To know the type of a JavaScript variable, we can use the typeof operator.

// 1>  primitive 
// 2>  non-primitive


// primitive 
// string 
 var a = "hello"
 console.log(typeof(a))
  
 // number
 var b = 2
 console.log(typeof(b))


//  BigInt - This data type is used to store numbers which are above the limitation
// of the Number data type. It can store large integers and is represented by adding
// “n” to an integer literal
var c= 223567890123456789012345678901234567890n;
console.log(typeof(c))


// boolean
console.log(typeof(true))



// Symbol - It is a new data type introduced in the ES6 version of javascript. It is
// used to store an anonymous and unique value.
var d = Symbol('secret')
console.log(typeof(d))




// Non-primitive types
//  object ,array, map
