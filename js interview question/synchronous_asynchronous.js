//!  What are synchonous and asynchronous  in js ?

//&  synchonous Execution

//* In synchronous code execution, each operation is performed one after the other in a sequential manner. The next operation waits for the current one to complete before it starts. This means that if an operation takes a significant amount of time, the entire program execution will be blocked, and no other tasks can proceed until the current task is finished.


console.log("start")

for(let i=0;i<5;i++)
{
    console.log(i)
}
console.log("end")



//&  Asynchronous Execution

setTimeout(()=>
{
    console.log("i m first but waiting for time to sone")
},2000)
console.log("i m second but there is not time to wait")
