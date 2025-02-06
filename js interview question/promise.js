
//!  A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it's a returned object to which you attach callbacks, instead of passing callbacks into a function.




//! Promises are used to handle asynchronous operations in JavaScript, such as reading files, making HTTP requests, talking to databases, etc. They can be in one of three states:

//^ Pending: The Promise's outcome hasn't yet been determined, because the asynchronous operation that will produce its result hasn't completed yet.
//& Fulfilled: The asynchronous operation has completed, and the Promise has a resulting value.
//* Rejected: The asynchronous operation failed, and the Promise will never be fulfilled. In the rejected state, a Promise has a reason that indicates why the operation failed.


let isDone = true;

let checkIfDone = new Promise((resolve, reject) => {
    if (isDone) {
        resolve('The task is done.');
    } else {
        reject('The task is not done.');
    }
});

checkIfDone.then((message) => {
    console.log(message); // This will print: 'The task is done.'
});



//? this example of promise use fetch and fetch also return a promise so very first fetch return a promise which have response of api and then .then used as callback to check that response  and after that response another promise is returned which is actual prmise

const myPromise = new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/products')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        })
        .then(data => {
            console.log(data);
            resolve(data);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        });
});



//* Callback hell, also known as "Pyramid of Doom" or "Callback Pyramid," refers to a situation in asynchronous programming where multiple nested callback functions make the code difficult to read and maintain. This issue often arises when dealing with multiple asynchronous operations that depend on each other or need to be executed sequentially.

//& Here's an example in JavaScript using callbacks:

getDataFromDatabase((data1) => {
    processData(data1, (processedData1) => {
        fetchDataFromAPI(processedData1, (data2) => {
            processAPIResponse(data2, (processedData2) => {
                // More nested callbacks...
            }, (error) => {
                console.error("Error processing API response", error);
            });
        }, (error) => {
            console.error("Error fetching data from API", error);
        });
    }, (error) => {
        console.error("Error processing data", error);
    });
}, (error) => {
    console.error("Error getting data from database", error);
});


//* To avoid callback hell and improve the readability of asynchronous code, you can use various approaches and patterns provided by JavaScript. Here are some common techniques:

//! 1--> Promises
//& Use Promises to handle asynchronous operations in a more sequential and readable manner. Promises allow you to chain .then and .catch methods, making the code flatter and easier to follow.

getDataFromDatabase()
    .then(processData)
    .then(fetchDataFromAPI)
    .then(processAPIResponse)
    .catch(error => {
        console.error("An error occurred:", error);
    });



//^ Promise .all
//^ Promise.all is a method in JavaScript that takes an array of Promises and returns a single Promise. This new Promise is fulfilled with an array of resolved values when all the input Promises are fulfilled. If any of the input Promises is rejected, the resulting Promise is immediately rejected with the reason of the first rejected Promise.

const promise1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('two'), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve('three'), 1500));

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // ['one', 'two', 'three']
    })
    .catch(error => {
        console.error(error); // 'three' - the reason of the first rejected promise
    });



//! example 2 of promise .all

const url1 = 'https://dummyjson.com/products/categories';
const url2 = 'https://dummyjson.com/products';

const fetchData = (url) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
        });
};

const promise4 = fetchData(url1);
const promise5 = fetchData(url2); // Correct variable name

Promise.all([promise4, promise5])
    .then(data => {
        const [data1, data2] = data;
        console.log('Data from API 1:', data1);
        console.log('Data from API 2:', data2); // Fixed typo here
    })
    .catch(error => {
        // At least one promise was rejected
        console.error('Error during data fetching:', error);
    });


    //! what is .then .catch 
    //^ .then and .catch are methods used with Promises in JavaScript to handle the results (fulfillment) or errors (rejection) of asynchronous operations.