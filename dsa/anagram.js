const string1 = "listen";
const string2 = "silent";

const string3 = "hello";
const string4 = "world";

// o(n log n)
function check(string1, string2) {
  let sortedString1 = string1.split("");
  let sortedString2 = string2.split("");

  sortedString1.sort();
  sortedString2.sort();

  for (let i = 0; i < string1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) {
      return false;
    }
  }
  return true;
}

// o(n)
function check2(string1, string2) {
    if (string1.length !== string2.length) return false; // Quick length check
  
    const mp = new Map();
  
    for (let char of string1) {
      mp.set(char, (mp.get(char) || 0) + 1);
    }
  
    for (let char of string2) {
      if (!mp.has(char)) return false; 
      mp.set(char, mp.get(char) - 1);
    }
  
    for (let item of mp) {
      if (item[1] !== 0) return false;
    }
  
    return true; // If all checks pass, they are anagrams
  }
  
 
  

console.log(check(string1, string2));
console.log(check2(string1, string2));
