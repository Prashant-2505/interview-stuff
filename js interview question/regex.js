//!  flag ans regulr expression(regrex) in js 

//?  In JavaScript, a regular expression, often referred to as a regex, is a sequence of characters that forms a search pattern. It is used to match and manipulate strings based on specific patterns. Regular expressions in JavaScript are represented by a combination of characters and optional flags.

//~ In JavaScript, a flag is an optional parameter that can be added to certain functions or methods to modify their behavior or provide additional options. Flags are typically represented as strings or characters and are used to enable or disable specific features or settings.

//~ Flags are commonly used in regular expressions (regex) to specify different matching options. For example, the 'g' flag (global) in a regex pattern allows for multiple matches to be found instead of stopping at the first match. Other flags that can be used in regex include 'i' (case-insensitive), 'm' (multiline), 's' (dot matches all), and 'u' (unicode).

//~ Flags can also be used in functions like String.replace() or RegExp.exec() to modify their behavior. For instance, the 'i' flag in String.replace() makes the search case-insensitive.

//~ In summary, flags in JavaScript are optional parameters that modify the behavior of certain functions or methods, allowing you to customize their functionality or enable specific features.



//^  1-->  'g' flag (global)
//& This flag allows for multiple matches to be found instead of stopping at the first match. and it will return an array with matches and its location

const str = 'Hello, hello, hello!';
const regex = /hello/g;

const matches = str.match(regex);
console.log(matches); // Output: ['hello', 'hello' ]

//& if use 'i' with 'g' it will also give a uppercase "Hello"

const regex2 = /hello/gi
const matches2 = str.match(regex2)
console.log(matches2)




//^ 2-->   'i' flag (case-insensitive):
//& This flag enables case-insensitive matching.

const str2 = 'Hello, hello, hello!';
const regex3 = /hello/i;

const matches3 = str.match(regex3);
console.log(matches3); // Output: [ 'Hello', 'hello', 'hello' ]



//^  3-->  'm' flag (multiline):
//&  This flag allows the caret (^) and dollar sign ($) to match the start and end of each line (in addition to the start and end of the entire string).

const str3 = 'First line\nSecond line';
const regex4 = /^Second/m;

const match4 = str3.match(regex4);
console.log(match4); // Output: 'Second'



//^  4--> 'u' flag (unicode):
//&  This flag enables full Unicode matching.

const str5 = 'h𝐞𝐥𝐥𝐨';
const regex5 = /\p{L}/u;

const match5 = str5.match(regex5);
console.log(match5); // Output: '𝐇'

