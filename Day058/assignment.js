/*
! Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]
*/
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

console.log("before delete array:", arr)
while (arr.indexOf(num) != -1) {
    let idx = arr.indexOf(num);
    arr.splice(idx, 1)
}
console.log("after delete arrays element:", arr)

/*
! Qs2. Write a JS program to find the no of digits in a number.
Example : if number = 287152, count = 6
*/
let number = 287152;
console.log(number.toString().length)

/*
! Qs3. Write a JS program to find the sum of digits in a number.
Example : if number = 287152, sum = 25
*/
let num3 = 287152;
let sum = 0;

while (num3 % 10 > 0) {
    let rem = num3 % 10;
    sum += rem;
    // Returns the greatest integer less than or equal to its numeric argument.
    num3 = Math.floor(num3 / 10);
}
console.log(sum)


/*
!  Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :
    7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
    5! (factorial of 5) = 1x2x3x4x5 = 120
    3! (factorial of 3) = 1x2x3 = 6
    0! Is always 1
*/
let n = 7;
let fact = 1;
for (let i = n; i > 0; i--) {
    fact *= i;
}
console.log(fact)

/*
!  Qs5. Find the largest number in an array with only positive numbers
*/
let arr3 = [45455, 10, 204, 45, 4, 85, 9993]
let largest = 0;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > largest) {
        largest = arr3[i];
    }
}
console.log(largest)
