function FUN(){}

FUN.prototype.greet = function()
{
    console.log('Hello World');
}


const fun2 = new FUN()
fun2.greet()

console.log(fun2.__proto__)
console.log(fun2)
console.log(FUN.prototype)


//! here every function has theri own prototype which is object, here in exmaple function FUN is an empty function and then its prototype is create an object greet that greet object has a function 

//* then another fun2 created its a object using new means its new object of FUN function 

//& now if we want to access the prototype of main function measn the pareants function who have theri own prototype then we use syntax like functionName.prototype

//^ or if we want to access of prototype of object thae we created fun2 who dont have theri own prototype but have access to the other function prototype of like FUN then we have use syntax like objectName.__prototype__


console.log(fun2.__proto__ === FUN.prototype); // true

//! this return trye cause fun2.__proto__ has the protoype of FUN



// sample exmaple guess output 

function Foo() {}  
Foo.prototype.bar = 42;  
const foo = new Foo();  
console.log(foo.__proto__ === Foo.prototype);  
console.log(Foo.__proto__ === Function.prototype);  
