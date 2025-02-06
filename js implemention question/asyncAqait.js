// fetch('https://dummyjson.com/users') 
//   .then(res => res.json())
//   .then(console.log)
//   .catch(error => console.error('Error:', error));



async function getData() {
    try {
        let response = await fetch('https://dummyjson.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
}

getData()


// Wrap setTimeout in a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Using async/await with setTimeout
  async function exampleWithTimeout() {
    console.log("Start");
  
    await delay(2000); // Wait for 2 seconds
  
    console.log("Executed after 2 seconds");
  }
  
  exampleWithTimeout();
  


