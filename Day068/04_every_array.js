let arr1 = [1, 3, 5, 7, 9];

let odd = arr1.every((el) => el % 2 !== 0);
console.log(odd);

console.log(
  "even :",
  [2, 4, 6].every((e) => e % 2 === 0)
);
console.log(
  "even :",
  [2, 4, 6, 1].every((e) => e % 2 === 0)
);

// ! every want every element in the array satisfy the condition
