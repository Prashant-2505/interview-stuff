const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];


function group(words)
{
     let result = {};
     for(let word of words)
     {
         let sortedWord = word.split('').sort().join('');
         if(result[sortedWord])
            result[sortedWord].push(word);
         else
            result[sortedWord] = [word];
     }
     return result;
}

function group2(words)
{
    let mp = new Map();

    for(item of words)
    {
        let sorted = item.split('').sort().join('')

        if(mp.has(sorted))
        {
            mp.get(sorted).push(item);
        }
        else
        {
            mp.set(sorted, [item]);
        }
    }

    return Array.from(mp.values())
}

console.log(group(words));
console.log(group2(words));