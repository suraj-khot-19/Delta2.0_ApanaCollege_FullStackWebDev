/*
(method) String.replace(searchValue: string | RegExp, replaceValue: string): string (+3 overloads)
Replaces text in a string, using a regular expression or search string.

@param searchValue — A string or regular expression to search for.

@param replaceValue — A string containing the text to replace. When the searchValue is a RegExp, all matches are replaced if the g flag is set (or only those matches at the beginning, if the y flag is also present). Otherwise, only the first match of searchValue is replaced.
*/
let s1 = "suraj sanjay khot"

let s2 = s1.replace('suraj', 'santosh')
console.log(s2) // santosh sanjay khot

console.log(s1.replace('s', 'S')); //! replace only first occurance //? Suraj sanjay khot

