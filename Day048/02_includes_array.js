let arr = ["suraj", "santosh", "sonya", "adya", "suraj", "santosh"]

/*
!   includes(searchElement: string, fromIndex?: number): boolean

The element to search for.
Determines whether an array includes a certain element, returning true or false as appropriate.
*/

console.log(arr.includes()) // false
console.log(arr.includes("suraj")) // true
console.log(arr.includes("khot")) // false
console.log(arr.includes("suraj", 5)) // false
console.log(arr.includes("adya", 5)) // false
console.log(arr.includes("suraj", 4)) // true

