function debounce(fn, delay) {
    let timerId; 
    return function(...args) {
        clearTimeout(timerId); 
        timerId = setTimeout(() => {
            fn(...args); 
        }, delay);
    };
}

function greet(say) {
    console.log(say);
}

const debouncedGreet = debounce(greet, 2000);

debouncedGreet("hiii"); 


// setInterval(()=>{
//     debouncedGreet("hiii"); 
// },1000)