//! how many way to declare objects ??

//* 1> object constructor

const obj = new Object({
    name:"tom",
    age:"9"
})
console.log(obj)


//&  2> object create method
// The create method of Object creates a new object by passing the prototype object as a
// parameter

const obj2 = Object.create({
    name:"tom2",
    age:"9"
})
console.log(obj2)



// 3> object literals
const obj3 = {
    name:"tom3",
    age:"9"
}
console.log(obj3)


// 4> ES6 Class syntax:
// ES6 introduces class feature to create the objects

class Person
{
    constructor(name,age)
    {
        this.name = name
        this.age = age
    }
}
const obj4 = new Person("tom4","9")
console.log(obj4)

