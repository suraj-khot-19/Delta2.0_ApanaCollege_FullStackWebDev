function def(a, b = 0) {
  return a + b;
}
console.log(def(10)); //10
console.log(def(10, 30)); //40

function def1(a = 0, b) {
  return a ** b;
}
console.log(def1(1)); // a=1 b=? //Nan
console.log(def1(2, 4)); //64

//! why imp
function def2(a, b) {
  return a + b;
}
console.log(def2(10)); //! NaN which is bug
