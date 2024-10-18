/*
//! 1.  global scope
let a = 10; //? this will accessible anywhere
console.log(a)

//! 2.  function scope
function fun() {
    let sum = 0; //? this will accessible only inside a function
}
fun();
console.log(sum); //! error

//!  3. blcok scope
{
    let b = 15; //? this will accessible only inside a block
}

for (let index = 0; index < 5; index++) {
    console.log(i);
}
console.log(i); //! error
console.log(b); //! error

*/
//!  4. lexical scope 
function outer() {
    let m = 10;
    let n = 20;
    function inner() {
        console.log(m);
        console.log(n);
    }
    inner();
}
outer()

//?? hoisting using variables before declare //! but we need to call inner fun at end

function outerFun() {
    function innerFun() {
        console.log(m);
        console.log(n);
    }
    let m = 500;
    let n = 50000;
    innerFun();
}
outerFun()