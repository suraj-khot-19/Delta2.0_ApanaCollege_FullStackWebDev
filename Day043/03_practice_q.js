'use strict';

let size = 'S';
let price = 0;

if (size === 'XL')
    price = 250;
else if (size === 'L')
    price = 200;
else if (size === 'M')
    price = 100;
else if (size === 'S')
    price = 50;
else
    price = "you must enter size as a string L M S XL"

console.log("price: ", price)