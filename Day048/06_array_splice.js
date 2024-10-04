let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/*
splice(start: number, deleteCount?: number): number[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.

splice(start: number, deleteCount: number, ...items: number[]): number[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.
*/
arr.splice()
console.log(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

arr.splice(7) // delete eleemnt after idx 7 (including 7)
console.log(arr) // [1, 2, 3, 4, 5, 6, 7 ]

arr.splice(4, 1) // start from idx 4 and delete first element which is 5
console.log(arr) // [1, 2, 3, 4, 6, 7 ]

arr.splice(4, 0, 5, "added", "here") // start from 4 idx and remove 0 elemnt and insert 5, "added", "here" at position 0 and push remaining to after that
console.log(arr) // [ 1, 2, 3, 4, 5, 'added', 'here', 6, 7 ]