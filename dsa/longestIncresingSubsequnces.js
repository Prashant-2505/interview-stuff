let arr = [10, 9, 2, 5, 3, 7, 101, 18];


function LIS(arr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = [arr[i]];  

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > temp[temp.length - 1]) { 
        temp.push(arr[j]);
      }
    }

    if (temp.length > ans.length) { 
      ans = temp;
    }
  }

  return ans;
}




console.log(LIS(arr))
