// q1
const square = (n) => n * n;
console.log(square(15));
console.log(square(25));

// q2
// ! way 1
let count = 1;
let id = setInterval(() => {
  count >= 5 && clearInterval(id);
  console.log("hello");
  count++;
}, 2000);

// !way2
let id2 = setInterval(() => {
  console.log("hey");
}, 2000);

// 2s*5 => 10 s means stop
setTimeout(() => {
  clearInterval(id2);
}, 10000);
