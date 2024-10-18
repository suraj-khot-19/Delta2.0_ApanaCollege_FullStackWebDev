// ! q1
function sumOfN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++)
        sum += i;
    return sum;
}

// let sum = sumOfN(15);
let sum = sumOfN(10);
console.log(sum)

// ! q2
function concatArray(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }
    return arr;
}
let x = concatArray('suraj');
console.log(x)

// ! q3
function concatString(arr) {
    let s = '';
    for (let i = 0; i < arr.length; i++) {
        s += arr[i]
    }
    return s;
}
let y = concatString(['suraj', 's', 'khot', 'mh', 416203])
console.log(y)