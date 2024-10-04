let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["suraj", "santosh", "sonya", "adya", "suraj", "santosh"]

/*
!  concat(...items: ConcatArray<number>[]): number[]

Additional arrays and/or items to add to the end of the array.
Combines two or more arrays. This method returns a new array without modifying any existing arrays.
*/

let concatArray1 = arr1.concat(arr2);
console.log(concatArray1)

let concatArray2 = arr2.concat(arr1);
console.log(concatArray2)