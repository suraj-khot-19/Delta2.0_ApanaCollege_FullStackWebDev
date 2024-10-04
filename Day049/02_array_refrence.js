// !    false cause it is stored in reference
let a1 = [];
let a2 = [];
console.log(a1 == a2) // ! false
console.log(a1 === a2) // ! false

let a3 = [1];
let a4 = [1];
console.log(a3 == a4) // ! false
console.log(a3 === a4) // ! false

//!     true
let arr1 = [1, 2, 3, 4]
let arr2 = arr1;  //  pointing to same array value refrence

console.log(arr1 == arr2)   //? true
console.log(arr1 === arr2)  //? true
