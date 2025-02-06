 
 // 2 sum

 //^ time o(n*2)

 let arr = [2,3,1,5,6,8,10]
 let sum = 5;

 function findTwoNumbers(arr, sum)
 {
    for(let i = 0; i <arr.length;i++)
    {
        for(let j = i+1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === sum)
            {
                return [arr[i], arr[j]];
            }
        }
    }
 }

 let result = findTwoNumbers(arr, sum);
 console.log(result)



 // using set 
 //! time = o(n) set.has time i  o(1)

 let st = new Set()
 let ans2

 for( item of arr)
 {
      let reminaing = sum - item;

      if(st.has(reminaing))
      {
        ans2 =  [reminaing,item];
        break;
      }
    
        st.add(item);
      
 }

 console.log(ans2)
