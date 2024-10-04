let arr = ["suraj", "santosh", "sonya", "adya", "suraj", "santosh"]

/*
!   indexOf(searchElement: string, fromIndex?: number): number

The value to locate in the array.
Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
*/
console.log(arr.indexOf()) //   -1
console.log(arr.indexOf("khot")) //   -1
console.log(arr.indexOf("suraj")) //   0
console.log(arr.indexOf("adya")) //   3
console.log(arr.indexOf("suraj", 2)) //   4
console.log(arr.indexOf("santosh", 4)) //   5