//! ex 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.reverse();

console.log(arr)

/*
sort(compareFn?: ((a: number, b: number) => number) | undefined): number[]
Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.

[11,2,22,1].sort((a, b) => a - b)

Sorts an array in place. This method mutates the array and returns a reference to the same array.
*/
arr.sort()
console.log(arr) ///    [1, 2, 3, 4, 5, 6, 7, 8, 9]

//! ex 2 
let alpha = ['a', 'x', 'z', 'b', 'm']
console.log(alpha)  //  [ 'a', 'x', 'z', 'b', 'm' ]
alpha.sort();
console.log(alpha)  //  [ 'a', 'b', 'm', 'x', 'z' ]

// ! ex 3
let num = [10, 50, 500, 100, 5]
console.log(num) //  [ 10, 50, 500, 100, 5 ]
num.sort()
console.log(num) // [ 10, 100, 5, 50, 500 ]  //! cuase it converts num to string and then sort by its asci value

num.sort((a, b) => a < b);
console.log(num)