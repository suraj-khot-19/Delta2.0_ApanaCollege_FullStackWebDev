/*
Qs1. Write a JavaScript function that returns array elements larger than a number.
*/

function fun1(arr, n) {
    let newArr = [];
    for (x of arr) {
        if (x > n) {
            newArr.push(x);
        }
    }
    return newArr;
}
const q1 = fun1([5, 44, 225, 98, -55, 35, 65, 88, 77], 50)
console.log("q1:", q1)


/*
Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
*/
function unique(s) {
    let uniqueString = '';
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        if (uniqueString.indexOf(ch) == -1) {
            //-1 means not present
            uniqueString += ch;
        }
    }
    return uniqueString;
}
let q2 = unique('abcdabcdefgggh');
console.log('q2:', q2)


/*
Qs3. Write a JavaScript function that accepts a list of country names as input and 
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output : 
"United States of America"
*/
function fun3(arr) {
    let max = 0;
    let maxindx = 0;

    for (let i = 0; i < arr.length; i++) {
        let len = arr[i].length;
        if (len > max) {
            max = len;
            maxindx = i;
        }
    }
    return arr[maxindx]
}
let q3 = fun3(["Australia", "Germany", "United States of America"])
console.log('q3:', q3)

/*
Qs4. Write a JavaScript function to count the number of vowels in a String 
argument.
*/
function fun4(str) {
    str = str.toLowerCase();
    let count = 0;
    for (ch of str) {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }
    return count;
}

let q4 = fun4('AEioUaeIOu')
console.log('q4:', q4);


/*
Qs5. Write a JavaScript function to generate a random number within a range 
(start, end).
*/
function fun5(start, end) {
    return Math.floor(Math.random() * (end - start)) + start
}

let q5 = fun5(12, 15)
console.log('q5:', q5);