//! q1 Write a JavaScript program to get the first n elements of an array. [n can be any positive number]. For example: for array [7, 9, 0, -2] and n=3 Print, [7, 9, 0]

let arr1 = [7, 9, 0, -2]
let n1 = 3;
console.log(arr1.slice(0, n1))

// ! q2   Write a JavaScript program to get the last n elements of an array. [n can be any positive number]. For example: for array [7, 9, 0, -2] and n=3 Print, [9, 0, -2]

let arr2 = [7, 9, 0, -2]
let n2 = 3;
console.log(arr2.slice(-n2))

// !  q3   Write a JavaScript program to check whether a string is blank or not.
let s1 = "";
let s2 = "hi";
console.log(s1.length === 0 ? "blank" : "Not blank")
console.log(s2.length === 0 ? "blank" : "Not blank")

// !    Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let s3 = 'SuRaJ';
// let idx = 3;
let idx = 4;
if (s3[idx] == s3[idx].toLowerCase()) {
    console.log("Lowercase")
}
else {
    console.log("no it is upper case")
}

// !    Qs5. Write a JavaScript program to strip leading and trailing spaces from a string
let s4 = '   suraj   '
console.log(s4)
console.log(s4.trim())

// !    Qs6. Write a JavaScript program to check if an element exists in an array or not
let arr3 = [1, 2, 3, 4, 5, "suraj"]
let search1 = 4;
let search2 = 7;
let search3 = "suraj";
let search4 = "khot";
console.log(arr3.includes(search1) ? "exists" : 'not exists')
console.log(arr3.includes(search2) ? "exists" : 'not exists')
console.log(arr3.includes(search3) ? "exists" : 'not exists')
console.log(arr3.includes(search4) ? "exists" : 'not exists')