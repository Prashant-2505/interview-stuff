//Explain closures in JavaScript and implement a closure function to maintain a counter with increment, decrement, and reset methods.

function count() {
    let counter = 0;

    function Increment() {
        counter++;
        console.log(counter, "increased");
    }

    function Decrement() {
        console.log(--counter, "decreased");
    }

    function Reset() {
        counter = 0;
        console.log(counter, "reset");
    }

    return {
        Increment,
        Decrement,
        Reset
    };
}

let countIt = count(); 

// Now you can use the functions like this:
countIt.Increment(); // 1 increased
countIt.Increment(); // 2 increased
countIt.Decrement(); // 1 decreased
countIt.Reset(); // 0 reset

















