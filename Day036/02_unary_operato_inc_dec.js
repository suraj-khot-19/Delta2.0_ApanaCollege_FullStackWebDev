// unery operator

//! post increment
a = 10;
post = a++;
console.log("post ", post);
console.log("a", a);
/*
means post incement will be like first use then increment
post  10
a 11
*/

//! pre increment 
b = 10;
pre = ++b;
console.log("pre ", pre);
console.log("b", b);
/*
means pre incement will be like first incement then only use
pre  11
b 11
*/

//! post decrement
c = 10;
postD = c--;
console.log("post ", postD);
console.log("c", c);
/*
means post decrement will be like first use then decrement
post  10
c 9
*/

//! pre decrement 
d = 10;
preD = --d;
console.log("pre ", preD);
console.log("d", d);
/*
means pre decrement will be like first decrement then only use
pre  9
d 9
*/
