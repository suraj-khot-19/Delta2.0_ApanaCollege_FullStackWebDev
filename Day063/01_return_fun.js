'use strict';
function funWithReturn(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
    console.log('unrechable code') //! unreachable
}

let max = funWithReturn(10, 45);
console.log(max)