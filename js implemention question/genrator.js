//^  A generator function doesn’t execute immediately when called. Instead, it returns a generator object, which has methods such as .next(), .return(), and .throw(). When .next() is called on the generator, it runs the function until it encounters a yield statement, pauses, and returns an object with the value (the result of the yield expression) and a done flag (whether the generator has finished or not).



// Generator function to generate a sequence of numbers
// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// // Create a generator object
// const gen = generateSequence();

// // Calling next() returns an object with value and done properties
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: 4, done: false }
// console.log(gen.next()); // { value: undefined, done: true }



function* generatorExample() {
    yield 1;
    yield 2;
    try {
      yield 3;
    } catch (error) {
      console.log('Caught:', error.message);
    }
    yield 4;
  }
  
  const gen = generatorExample();
  console.log(gen.next());        // { value: 1, done: false }
  console.log(gen.next());        // { value: 2, done: false }
  console.log(gen.throw(new Error("Oops!"))); // Logs "Caught: Oops!", { value: 4, done: false }
  console.log(gen.return("Done"));// { value: "Done", done: true }
  console.log(gen.next());        // { value: undefined, done: true }
  