let setData;

const promise = new Promise((resolve, reject) => {
  fetch('https://dummyjson.com/products/?limit=2')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        reject('Failed to fetch data');
      }
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
});

promise
  .then(data => {
    setData = data;
    console.log(typeof (setData))
    console.log(setData.products)
  })
  .catch(error => {
    console.log(error);
  });
