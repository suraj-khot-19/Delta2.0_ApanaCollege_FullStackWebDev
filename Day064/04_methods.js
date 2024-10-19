// methods like key:value then method.key==object
let method = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    div: function (a, b) {
        return a / b;
    },
    mul: function (a, b) {
        return a * b;
    },
}
console.log(method.add(10, 20));
console.log(method.sub(10, 20));
console.log(method.div(10, 20));
console.log(method.mul(10, 20));

//! shortend
let calculator = {
    sum(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
}
console.log(calculator.sum(50, 5000))
console.log(calculator.sub(50, 5000))