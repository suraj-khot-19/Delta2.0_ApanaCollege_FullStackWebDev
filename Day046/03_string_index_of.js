/*
Returns the position of the first occurrence of a substring.

@param searchString — The substring to search for in the string

@param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
*/
let s1 = "surajKhot";
console.log(s1.indexOf('s')) // 0
console.log(s1.indexOf('z')) // -1 not found

let s2 = "surajsanjaykhot"
console.log(s2.indexOf('s', 2)); // 5 it search after index 2

let s3 = "Suraj"
console.log(s3.indexOf('s')); // -1 case sensitive