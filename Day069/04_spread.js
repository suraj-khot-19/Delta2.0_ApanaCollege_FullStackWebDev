// we can use spreads on string and array it just separate the values and perform opearation

console.log(...[1, 2, 3, 4, 5, 6]);
console.log(..."suraj");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("max:", Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log("min:", Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log("max:", Math.max(...arr));
console.log("min:", Math.min(...arr));

console.log(arr);
console.log(...arr);
