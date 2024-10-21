// ! arrow func
const sum1 = (a, b) => {
    return a + b;
};
console.log(sum1(10, 20));

// ! simple function
function sum2(a, b) {
    return a + b;
}
console.log(sum2(10, 20));

// !    ex2
const pow = (a, b) => {
    return a ** b;
};
console.log(pow(10, 2));

// ! advantage
//? this is like if one argument is there () is optional

const cube = n => {
    return n * n * n;
};
console.log(cube(4));

// ! advantage
//? if there us only one task i.e return then useing () instead of {} //! it does not allow us to write multi line or ; in ()
const mul1 = (a, b) => a * b;
console.log(mul1(10, 50));