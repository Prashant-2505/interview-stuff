// Explain Hoisting

//! Hoisting is the default behaviour of javascript where all the variable and function
//! declarations are moved on top.

//! This means that irrespective of where the variables and functions are declared, they
//! are moved on top of the scope. The scope can be both local and global.

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it
var hoistedVariable;


console.log(b)   //~ here it gave undefined cause we are accessing b and b is histed to its upper lvl of scope and there is nothing at there upper lvl unlike above example
b = 9
var b


//* hoisting only work with var not with let and const
//& but function are fully hoisted

func1()
function func1() {
    console.log("i m fully hosuted")
}


//! but arrow function is not hoisted
// func2()
// const func2 = () => {
//    console.log("opop")
// }
