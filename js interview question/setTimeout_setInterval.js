
//& it run for every 2 seconds
// setInterval(() => {
// console.log("i m printing after every 2 seconds");
// }, 2000)

 //! An interval ID is a unique identifier returned by the setInterval function in JavaScript. This ID is used to reference the specific interval that was created, allowing you to control it later. Specifically, you can use the interval ID to clear the interval using the clearInterval function, which stops the repeated execution of the specified function.

// const id = setInterval(() => {
//     console.log("i m printing after every 2 seconds");
//     }, 2000)

    // clearInterval(id)

    //! it run after 3 seconds
    // setTimeout(()=>{
    // console.log(" i will print aftr after 3 seconds");
    // },3000)


    //* let use both together --> suppose you want that somethingwill print after every 2 seconds  for and i will continue till 10 sec and stop printing after 10 seconds


    let id2 =  setInterval(()=>{
        console.log("hii")
    },2000)

    setTimeout(()=>{
      clearInterval(id2)
    },11000)