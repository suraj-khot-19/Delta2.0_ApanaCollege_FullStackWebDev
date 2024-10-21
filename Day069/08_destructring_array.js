let arr1 = ["suraj", "khot", "adarsh", "pujari"];
let [name, sirname] = arr1;
console.log(name, sirname);

let arr2 = ["suraj", "shubh", "adarsh", "chetya", "sankya"];
let [first, secound, third, ...rest] = arr2;
console.log("first", first);
console.log("secound", secound);
console.log("third", third);
console.log("remaining will be an arrray", rest);
