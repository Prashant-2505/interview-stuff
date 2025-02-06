//!  Regular expression method of js

//^  In JavaScript, there are several methods available to work with regular expressions. These methods allow you to perform various operations such as matching, searching, replacing, and extracting parts of a string based on a specified pattern. Here are some commonly used methods:


//~  1--->  test( method)
//&  The test() method checks whether a pattern matches a string and returns a Boolean value indicating the result.

const str = 'Hello, world!';
const regex = /Hello/;

const result = regex.test(str);
console.log(result); // Output: true'



//~  2--->  match() method:
//&  The match() method searches a string for matches against a pattern and returns an array of the matches found.

const str2 = 'Hello, world!';
const regex2 = /o/g;

const matches = str.match(regex2);
console.log(matches); // Output: [ 'o', 'o', 'o' ]


//~  3--->  search() method:
//&   The search() method searches a string for a specified pattern and returns the index of the first occurrence of the pattern, or -1 if not found.

const str3 = 'Hello, world!';
const regex3 = /world/;

const index = str.search(regex3);
console.log(index); // Output: 7



//~  4-->  replace() method:
//& The replace() method searches for a pattern in a string and replaces it with a specified replacement string.

const str4 = 'Hello, world!';
const regex4 = /world/;

const newStr = str.replace(regex4, 'Universe');
console.log(newStr); // Output: 'Hello, Universe!'


//~ 5-->   split() method:
//&  The split() method divides a string into an array of substrings based on a specified pattern.

const str6 = 'apple-banana-grape-orange';
const regex6 = /-/;

const fruits = str6.split(regex6);
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']

