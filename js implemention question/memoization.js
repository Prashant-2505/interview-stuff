//? memoization ---> as same as in c++

// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     }
//     return n * factorial(n - 1);
//   }

//   console.log(factorial(5));  // Output: 120
//   console.log(factorial(5));  // Output: 120

memo = [];
function factorialWithMemoization(n) {
  if (n === 0) {
    return 1;
  }

  if (memo[n]) {
    console.log("cached factorial")
    return memo[n]; // Return memoized result if available
  }

  const result = n * factorialWithMemoization(n - 1, memo);
  memo[n] = result; // Cache the result
  console.log("calculated factorial")
  return result;
}

console.log(factorialWithMemoization(5)); // Output: 120
console.log(factorialWithMemoization(5)); // Output: 120
