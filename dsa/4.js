const str = "zzeexxappm";

// Reduce approach to count character frequencies
const frequencyMap = str.split("").reduce((acc, cur) => {
    if (acc[cur] === undefined) {
        acc[cur] = 1;
    } else {
        acc[cur]++;
    }
    return acc;
}, {}); 

console.log("Frequency Map:", frequencyMap);

// Find the first non-repeating character
let result;
for (let char of str) {
    if (frequencyMap[char] === 1) {
        result = char;
        break; // Stop at the first non-repeating character
    }
}

console.log("First Non-Repeating Character:", result);




// map approach

const mp = new Map()

for(let char of str)
{
    if(mp.has(char))
    {
        mp.set(char,mp.get(char) +1);
    }
    else
    {
        mp.set(char,1);

    }
}

console.log(mp)

for (const [char, count] of mp.entries()) {
    if (count === 1) {
        console.log("First Non-Repeating Character:", char);
        break; // Stop at the first non-repeating character
    }
}