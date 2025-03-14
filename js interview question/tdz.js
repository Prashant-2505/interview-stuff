
//! What is a Temporal Dead Zone?

//^ Temporal Dead Zone is a behaviour that occurs with variables declared using let and const keywords. It is a behaviour where we try to access a variable before it is initialized. Examples of temporal dead zone:\


x = 23; // Gives reference error
let x;
function anotherRandomFunc(){
message = "Hello"; // Throws a reference error
let message;
}
anotherRandomFunc();