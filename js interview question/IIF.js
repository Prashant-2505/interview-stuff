//!   What is an Immediately Invoked Function in JavaScript?



// Normal function
function myFunction() {
    var myVar = "This is a local variable";
    console.log(myVar); // This will print "This is a local variable"
  }
  
  myFunction(); // This will execute the function and print the value of the local variable
  


  // IIFE
  (function () {
    var myVar = "This is a local variable";
    console.log(myVar); // This will print "This is a local variable"
  })();
  
//*  In the first example, the myFunction function is not executed until it is called. This means that the code within the myFunction function will not be executed until the function is called. in the second example, the IIFE is executed immediately after it is defined. This means that the code within the IIFE will be executed immediately, even if the IIFE is not called explicitly.

//* As you can see, the IIFE is executed immediately after it is defined, while the normal function is not executed until it is called. This can be useful for executing code without having to explicitly call it.





  (function () {
    // This code is encapsulated within the IIFE
    var myFunction2 = function () {
      return "This is a function that is encapsulated within an IIFE";
    };
    return myFunction2;
  })();

  //* IIFE for encapsulating code:


 
  
 
  