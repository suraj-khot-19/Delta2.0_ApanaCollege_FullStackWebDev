//! Qs. Declare your myName as a string and print its length in JS.
let myName = "suraj";
console.log(myName.length)

//! Qs. Declare your first myName as a string and print its first character.
console.log(myName[0]);

//! Qs. Declare your first myName as a string and print its last character.
const len = myName.length;
console.log(myName[len - 1]);

//! Qs. What is output of following code : "apnacollege" + 123
let q = "apnacollege" + 123;
// here string+num=string so output is apnacollege123
console.log(q);

//! -Qs. What are lengths of an empty string & a string with a single space?
let s1 = '';
let s2 = ' ';
console.log(s1.length);
console.log(s2.length);

/*
PS D:\Workspace\Delta-2.0\Day040> node js_assignment.js
5
s
j
apnacollege123
0
1
*/