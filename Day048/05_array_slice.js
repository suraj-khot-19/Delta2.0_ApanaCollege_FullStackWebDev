let arr = [1, 2, 3, 4, 5, 6]

/*
!  slice(start?: number, end?: number): number[]

The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
*/
console.log(arr.slice()) // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr.slice(3)) // [ 4, 5, 6 ]
console.log(arr.slice(2, 5)) // [ 3, 4, 5 ]
console.log(arr.slice(7)) // []

console.log(arr.slice(-4)) // [ 3, 4, 5, 6 ]
console.log(arr.slice(-4, -2)) // [ 3, 4 ]
console.log(arr.slice(-2, -5)) // []
