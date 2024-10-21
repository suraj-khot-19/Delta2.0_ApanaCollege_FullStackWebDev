let obj = {
  name: "suraj",
  age: 24,
  username: "the",
  password: "the1111",
  city: "hupari",
  sex: "male",
};

let { username, password } = obj; //automatically search for key
console.log("username:", username);
console.log("pass:", password);
/*
username: the
pass: the1111
*/

// !  {key:variableName}
let { username: UserName, password: PassWord } = obj; //! we can change variable name while storing by simply key:var
console.log("UserName", UserName);
console.log("PassWord", PassWord);
/*
UserName thekhot
PassWord the1111
*/

//! if key-value not present and we addd
let { name, age, degree = "MCA" } = obj;
console.log("name", name);
console.log("age", age);
console.log("degree", degree);
/*name suraj
age 24
degree MCA
*/
// ? but if we try to change existing one the
let { sex, city: location = "kolhapur" } = obj;
console.log("sex", sex);
console.log("location", location);
/*
sex male
location *hupari
*/
// ! here city will not be change it will took from a object itslef
