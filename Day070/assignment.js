/*
Qs1. Square and sum the array elements using the arrow function and then find the
average of the array.
*/
const q1 = (arr) => {
  let squereArr = arr.map((e) => e * e);
  console.log("squaered array:", squereArr);
  let addition = squereArr.reduce((prev, curr) => prev + curr);
  let len = squereArr.length;
  console.log("avarage of squeared array", addition / len);
};
q1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.
*/
const q2 = (arr) => {
  return arr.map((e) => e + 5);
};
console.log("array after adding 5:", q2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
Qs3. Create a new array whose elements are in uppercase of words present in the
original array.
*/
const q3 = (arr) => {
  let uppercaseArr = arr.map((e) => e.toUpperCase());
  return uppercaseArr;
};
console.log("uppercase array:", q3(["s", "u", "r", "a", "j"]));

/*
Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
variable number of arguments. The function should return a new array with the original
array values and all of the additional arguments doubled.*/
const doubleAndReturnArgs = (arr, ...elements) => {
  const doubleArray = elements.map((e) => e * 2);
  const newArray = [...arr, ...doubleArray];
  return newArray;
};
console.log(
  "double and original array",
  doubleAndReturnArgs([1, 2, 3, 4, 5], 6, 7, 8, 9, 10)
);

/*
Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object.
*/
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

let obj1 = {
  name: "suraj",
  age: 24,
  degree: "MCA",
};
let obj2 = {
  sex: "male",
  grade: "A++",
};
console.log(mergeObjects(obj1, obj2));
