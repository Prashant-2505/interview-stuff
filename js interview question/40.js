//! find duplicate in array

let arr = [2, 3, 4, 4, 5, 6, 6]

for (let i = 0; i < arr.length ; i++) {
    for (let j = i+1; j < arr.length ; j++) {
        if(arr[i]===arr[j])
        {
            console.log(`duplicat value is ${arr[j]}`)
        }
    }
}


const frequencyMap = new Map();

for (const item of arr) {
  if (frequencyMap.has(item)) {
    frequencyMap.set(item, frequencyMap.get(item) + 1);
  } else {
    frequencyMap.set(item, 1);
  }
}

for (const [key, value] of frequencyMap.entries()) {
  if (value > 1) {
    console.log(`Duplicate value found: ${key}, Count: ${value}`);
  }
}

