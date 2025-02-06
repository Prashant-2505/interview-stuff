//* In synchronous programming, tasks are executed one after another in sequence. The program waits for the current task to complete before moving to the next one. This means each operation blocks the next one until it finishes.

//& In asynchronous programming, tasks are executed independently of the main program flow. The program does not wait for a task to finish before moving to the next one. Instead, it "delegates" the long-running task to the background and continues with other operations. Once the long-running task completes, it will notify the program and allow it to handle the result.

console.log(" i m part of sync programing, step 1")

setTimeout(()=>{
    console.log(" i m part of async programing, step 2")
})

console.log(" i m part of sync programing , step 3")