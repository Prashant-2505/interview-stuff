//! binay search

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = 7;

let s = 0;
let e = arr.length - 1;  

while (s <= e) {
  let mid = Math.floor((s + e) / 2);  

  if (arr[mid] === x) {
    console.log(`Element found at index ${mid}`);
    break;  
  } else if (arr[mid] < x) {
    s = mid + 1;
  } else {
    e = mid - 1;
  }
}

if (s > e) {
  console.log("Element does not exist in the array");
}
