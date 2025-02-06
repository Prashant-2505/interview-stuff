console.log(1);                      // Synchronous
setTimeout(() => console.log(2), 0); // Asynchronous (Macro-task)
Promise.resolve().then(() => console.log(3)); // Asynchronous (Micro-task)
console.log(4);                      // Synchronous
