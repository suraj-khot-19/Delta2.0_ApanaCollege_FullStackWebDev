//q1
const arrayAverage = (arr) => {
  let sum = 0;
  let len = arr.length;
  for (x of arr) {
    sum += x;
  }
  return sum / len;
};

console.log(arrayAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// q2
const isEven = (n) => {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(10));
console.log(isEven(99));

// q3
const object = {
  message: "hello world!",
  logMessage() {
    console.log(this.message);
    console.log(this); // means it will return object of setTimeout
  },
};
// setTimeout(object.logMessage, 1000); // jisne call kiya hai uska object means setTimeout ka object

// q4
let length = 4;
function callback() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};
object2.method(callback, 1, 2);
