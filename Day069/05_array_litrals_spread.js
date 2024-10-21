// copy array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copyArr = [...arr];
console.log(copyArr);

// copy string as array
let s = "suraj sanjay khot";
let nameArray = [...s];
console.log(nameArray);

// concat array
let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7, 9];
let evenodd = [...even, ...odd];
console.log(evenodd);
