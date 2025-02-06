//! Explain passed by value and passed by reference.

//& In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference

//&  For understanding passed by value and passed by reference, we need to understand what happens when we create a variable and assign a value to it,

var x = 12;
var y = x
console.log(y)

//* in primitve datatype for exmapl if we store x in variable y then in backen what happen is in memory the new different sapce is alocate with the the value of x and its holding the address of x instead it creatinf different memory space for y with the value of x 

//* in primite data type if we try to acess the any variable it will give you location of that variable not value directly 

//* so its a passed by value




//& in non-primitive data type the value is passed by reference  it directly pass the location instead of new of creting new memory space for diffrent variable and store the value in it it pass the location 


//& obj is created then we created obj2 and store obj in it in backend what happen is it create memory space for obj2 but it not passed value of obj in obj2 it passed its location so if we trying to changing in obj2 it will relect the the obj dirctly 
var obj = new Object({
    name:"tom",
    age:90
})

console.log(obj)
var obj2 = obj
console.log(obj2)

obj2.name = "chris"
console.log(obj2)
console.log(obj)