let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce((prev, curr) => prev + curr);
console.log(sum);

let mul = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(mul);
