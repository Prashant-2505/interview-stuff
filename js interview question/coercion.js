// ! Explain Implicit Type Coercion in javascript.

// ? Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.




//* 1>  String coercion
//& String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.

var a = 3
var b ="3"
console.log(a+b)
console.log(typeof((a+b)))

var c = 24
var d ="hello"
console.log(c+d)
console.log(typeof((a+b)))

//~  When JavaScript sees that the operands of the expression x + y are of different types (one being a number type and the other being a string type ), it converts the number type to the string type and then performs the operation. Since aer conversion, both the variables are of string type, the ‘ + ‘ operator outputs the concatenated string “33” in the first example and “24Hello” in the second example.


var e = 3
var f ="3"
console.log(a-b)
console.log(typeof((e-f)))

//~  Type coercion also takes place when using the ‘ - ‘ operator, but thedifference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.




//* 2>  Boolean coercion

//&  Boolean coercion in JavaScript is the process of converting a value of any type to a Boolean value. This is done implicitly or explicitly.

//&  Implicit boolean coercion happens when a value is used in a logical context, such as a conditional statement or a logical operator. For example, the following code will evaluate to true:

let value = 'string';
if (value) {
  console.log('The value is truthy');
}
else
{
    console.log('The value is falsy');
}



var x = 0;  // it will consider as a false always
var y = 23;
if(x) { console.log(x) } 
if(y) { console.log(y)  }



//* 2>  Logical operators

//& Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands. OR ( | | ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned. AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned

var x = 220;
var y = "Hello";
var z = undefined;
x || y // Returns 220 since the first value is truthy
x || z // Returns 220 since the first value is truthy
x && y // Returns "Hello" since both the values are truthy
y && z // Returns undefined since the second value is falsy
if( x && y ){
console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}
if( x || z ){
console.log("Code runs"); // This block runs because x || y returns 220(Truthy)
}










