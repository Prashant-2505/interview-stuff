function throttling(fn, delay) {
    let lastCall = 0; // Keeps track of the last execution time
    return function (...args) {
      const now = Date.now(); // Get the current time
      if (now - lastCall >= delay) {
        lastCall = now; // Update the last execution time
        fn(...args); // Execute the function
      }
    };
  }
  
  // Example usage:
  function greet(message) {
    console.log(message, new Date().toISOString());
  }
  
  const throttledGreet = throttling(greet, 2000);
  
  // Simulate multiple calls
  setInterval(() => {
    throttledGreet("Hello");
  }, 500);
  