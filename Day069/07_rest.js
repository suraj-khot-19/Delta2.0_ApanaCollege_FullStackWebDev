function rest(...arr) {
  return arr;
}
console.log(rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ! opposite to spread
// spread make collection of element to single element
// rest make single elements to collection of element with array

// ? basically Math.max() function took the values like rest
/*
    Math.min(); 
    min(...values: number[]): number;
    
*/

// !ex
function sum(...el) {
  //  so we can use array function on rest
  el.push(-10); // we can push
  return el.reduce((prev, curr) => prev + curr);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ! ex
function min(msg, ...arr) {
  console.log("message:", msg);
  return arr.reduce((prev, curr) => {
    if (curr < prev) {
      return curr;
    } else {
      return prev;
    }
  });
}
console.log(min("find min", 1, 2, 3, 4, 5, -6, 7, 8, 9, 10));
console.log(min(-8, 2, 3, 4, 5, -6, 7, 8, 9, 10));
