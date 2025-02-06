//!  xplain Closures in JavaScript.


const sum = function (a) {
    console.log(a)
    var c = 9
    return function (b) {
        return a + b + c
    }
}

const ans = sum(9)
console.log(ans(9))

const info = function()
{
    var obj={
        name:"dagdu"
    }
    return function()
        {
            console.log(obj.name + " is strange")
        }
    
}
var data = info()
console.log(data())



//~ A closure is a fundamental concept in JavaScript that occurs when a function is defined within another function and retains access to the variables and scope of its containing (parent) function even after the parent function has finished executing. In other words, a closure "closes over" the variables it references, preserving their values even when the parent function's execution context has ended.