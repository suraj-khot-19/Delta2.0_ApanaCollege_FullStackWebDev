let obj = {
  name: "suraj",
  age: 24,
  degree: "MCA",
};

let copyObj1 = { ...obj };
console.log(copyObj1);

let copyObj2 = { ...obj, sex: "male" };
console.log(copyObj2);

let copyObj3 = { id: 1, ...obj, weight: 55 };
console.log(copyObj3);

// array -> object
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrObject = { ...arr };
console.log(arrObject); // 'idx' : value

//string -> object
let s = "suraj";
let sObject = { ...s };
console.log(sObject); // 'idx': value
