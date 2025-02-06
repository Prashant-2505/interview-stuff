// let p1 = new Promise((resolve, reject) => {
//     let success = 1;

//     if (success) {
//         resolve("p1 done");
//     } else {
//         reject("p1 error");
//     }
// });

// let p2 = new Promise((resolve, reject) => {
//     let success = 1;

//     if (success) {
//         resolve("p2 done");
//     } else {
//         reject("p2 error");
//     }
// });

// let p3 = new Promise((resolve, reject) => {
//     let success = 0; // Setting success to 0 to cause rejection

//     if (success) {
//         resolve("p3 done");
//     } else {
//         reject("p3 error");
//     }
// });

// let p4 = new Promise((resolve, reject) => {
//     let success = 1; // Setting success to 1 to resolve

//     if (success) {
//         resolve("p4 done");
//     } else {
//         reject("p4 error");
//     }
// });

// // Correcting the use of Promise.all with an array
// let res = Promise.allSettled([p1, p2, p3, p4]);
// // let res = Promise.all([p1, p2, p3, p4]);
// // let res = Promise.any([p1, p2, p3, p4]);
// // let res = Promise.race([p1, p2, p3, p4]);
// res.then(resolve => console.log(resolve)) 
//    .catch(reject => console.log(reject)); 


// let id = setInterval(()=>{
//     console.log("hii")
// },2000)

//  setTimeout(()=>{
//     clearInterval(id)
// },11000)


// async function get() {
//     try {
//         let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         data = await data.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
// get();


// let id;

// function debounce(fn, delay) {
//     return function(...args) { 
//         clearTimeout(id); 
//         id = setTimeout(() => {
//             fn(...args); 
//         }, delay);
//     };
// }

// function fn() {
//     console.log("hiii");
// }

// let res = debounce(fn, 1000);
// res(); 

// setTimeout(()=>
// {
//     res()
// },1000)


let run = true;

function throttle(fn, delay) {
    return function (...args) {
        if (run) {
            run = false; 
            fn(...args);

            setTimeout(() => {
                run = true; 
            }, delay);
        }
    };
}

function fn() {
    console.log("Function executed at:", new Date().toLocaleTimeString());
}

let throttledFn = throttle(fn, 5000);

setInterval(() => {
    throttledFn(); 
}, 500); 
