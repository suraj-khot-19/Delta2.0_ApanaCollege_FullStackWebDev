// q1 max in array
let arr = [1, 2, 3, 555, 4, 5, 6, 7, 8, 9, 10, 5, -55];

let max = arr.reduce((prev, curr) => {
  if (curr > prev) {
    return curr;
  } else {
    return prev;
  }
});
console.log("max:", max);

// q2 check all el are *10 or not
let arr2 = [10, 20, 30, 40];
let mulOf10 = arr2.every((e) => e % 10 === 0);
console.log("multiple of 10:", mulOf10);

// q3 min in array
let arr3 = [-50, 10, 55, -45, -755, 122, -754];
let min = arr3.reduce((prev, curr) => {
  if (curr < prev) {
    return curr;
  } else {
    return prev;
  }
});
console.log("min:", min);
