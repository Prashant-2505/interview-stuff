let arr = [2, 3, 5, 6, 8, 9, 10, 11, 14, 24, 46];
let target = 11;

let s = 0;
let e = arr.length - 1;
while (s <= e) {
  let mid = Math.floor((s + e) / 2);
  if (arr[mid] === target) {
    console.log("Yes, found!");
    break;
  } else if (arr[mid] > target) {
    e = mid - 1;
  } else {
    s = mid + 1;
  }
}

if (s > e) {
  console.log("Target not found.");
}
