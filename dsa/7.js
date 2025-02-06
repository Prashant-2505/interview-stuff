// You are tasked with designing a memoization function in JavaScript. Memoization is an optimization technique used to speed up functions by caching the results of expensive function calls and reusing the cached result when the same inputs occur again.


// Write a function memoize that takes a function as an argument and returns a new function. This new function should cache the results of previous calls based on the arguments passed and return the cached result if the same arguments are passed again.

// const add = (a, b) => a + b;

// like that

// const memoizedAdd = memoize(add);
// console.log(memoizedAdd(1, 2)); // 3 (calculated)
// console.log(memoizedAdd(1, 2)); // 3 (cached)
// console.log(memoizedAdd(2, 3)); // 5 (calculated)

const memoArray = [{ input: [], output: [] }];

function memoAdd(a, b) {
    for (let item of memoArray) {
        if (item.input[0] === a && item.input[1] === b) {
          return { value: item.output, type: "cached" };
        }
      }
  memoArray.push({ input: [a, b], output: a + b });
  return { value: a + b, type: "caluclated" };
}

console.log(memoAdd(1, 2));
console.log(memoAdd(1, 2));
console.log(memoAdd(1, 3));


// use map for optimization