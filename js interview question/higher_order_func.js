// What is a higher order function in js

// a higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. In other words, it operates on other functions, making them a central part of its behavior.


// Higher-order function that takes a function as an argument
function calculator(operation) {
  return function (a, b) {
    return operation(a, b)
  }
};

function add(a,b)
{
  return a+b;
}
function multiply(a,b)
{
  return a*b;
}

let addFunc = calculator(add)
let mulFunc = calculator(multiply)

console.log(addFunc(3,4))
console.log(mulFunc(3,4))




 let play = (fn)=>{
     return function()
     {
      return fn(x,z)
     }
 }

 let fn1 = (a,b) =>{console.log(a+b)}
 let res = play(fn1(2,3))