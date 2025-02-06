 //!  What is promise

//~ A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows for more readable and manageable asynchronous code compared to traditional callback-based approaches. Promises simplify error handling and chaining multiple asynchronous operations.


//* A Promise can be in one of three states:

//&      Pending: The initial state, neither fulfilled nor rejected.
//&      Fulfilled (Resolved): The operation was completed successfully.
 //&     Rejected: The operation failed with an error.



 //* The Promise constructor takes a callback function with two parameters: resolve and reject.
 //* Inside the callback, you perform your asynchronous operation. If successful, you call resolve with the result. If there's an error, you call reject with the error.


 //^ Promise Methods:

 //& .then(onFulfilled, onRejected): Attaches callbacks for the fulfillment and rejection of the Promise.
//&  .catch(onRejected): Attaches a callback to handle only the rejection of the Promise.
//& .finally(onFinally): Attaches a callback that will be executed regardless of the Promise's state






const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const success = false; // Simulate a successful response

        if (success) {
          const data = { id: 1, name: 'John Doe' };
          resolve(data); // Operation succeeded, call resolve
        } else {
          reject('Error: Unable to fetch data.'); // Operation failed, call reject
        }
      }, 2000); // Simulate a 2-second delay
    });
  };
  
  // Using the Promise
  fetchData()
    .then((result) => {
      console.log('Data fetched successfully:', result);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      console.log('Fetch operation completed.');
    });
  