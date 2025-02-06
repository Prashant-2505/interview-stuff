//! The Temporal Dead Zone (TDZ) in JavaScript refers to the period between the entering of a block scope (like a function or a block enclosed by {}) and the point at which a let or const variable declared within that scope is initialized. During this period, the variable is in an uninitialized state and cannot be accessed. Attempting to access the variable within this zone will result in a ReferenceError.

 
{
    console.log(a)
    var a = 9
}

//* here tdz only work with let and const 
//* if using var then it show undefined not giving any error 
//* cause var is hoisted to upper lvl