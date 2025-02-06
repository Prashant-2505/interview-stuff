//!  What do you mean by Self Invoking Functions?

//^ Without being requested, a self-invoking expression is automatically invoked (initiated). If a function expression is followed by (), it will execute automatically. Afunction declaration cannot be invoked by itself.Normally, we declare a function and call it, however, anonymous functions may bused to run a function automatically when it is described and will not be called again.And there is no name for these kinds of functions

(function() {
    var message = "Hello, world!";
    console.log(message);  // Output: Hello, world!
  })();
  
  
 