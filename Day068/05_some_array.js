let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  "even",
  [1, 2, 3, 4].some((e) => e % 2 === 0)
);
console.log(
  "even",
  [1, 3, 5, 7].some((e) => e % 2 === 0)
);
console.log(
  "odd",
  [1, 2, 3, 4].some((e) => e % 2 !== 0)
);
console.log(
  "odd",
  [2, 4, 6, 8].some((e) => e % 2 !== 0)
);
