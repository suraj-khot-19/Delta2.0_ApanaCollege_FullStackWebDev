// q1
let number = 45;
if (number % 10 === 0) {
    console.log("good")
}
else {
    console.log("bad")
}

// q2
let name = prompt("enter name")
let age = prompt("enter age")
alert(`${name} is ${age} years old`)

let info = document.querySelector('#info')
info.innerText = `${name} is ${age} years old`;

// q3
let quarter = 2;
switch (quarter) {
    case 1:
        console.log("January, February, March")
        break;
    case 2:
        console.log("April, May, Jun")
        break;
    case 3:
        console.log("July, August Septmber")
        break;
    case 4:
        console.log("October, November, December")
        break;
}

// q4
let string = 'Adarsh'
if (string[0] === 'a' || string[0] === 'A' && string.length > 5) {
    console.log("golden string")
}
else {
    console.log("not a golden string")
}

// q5
let num1 = 10;
let num2 = 120;
let num3 = 100;
if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater`)
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater`)
}
else {
    console.log(`${num2} is greater`)
}

// q6
let x = 32;
let y = 47855;
const fun = (num) => {
    while (num >= 10) {
        num = num % 10;
    }
    return num;
}
let x1 = fun(x)
let y1 = fun(y)
if (x1 === y1) {
    console.log("2 numbers have same last degit")
}
else {
    console.log("2 numbers dont have same last degit")
}