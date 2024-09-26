// and
console.log(true && true) // true
console.log(true && false) // false
console.log(false && false) // false
console.log(false && true) // false

// or
console.log(true || true) //  true
console.log(true || false) // true
console.log(false || false) // false
console.log(false || true) // true

// usage
let a = 15;
if (a % 2 === 0 && a > 10) {
    console.log("number is even and greater then 10")
}

let btnClick = false
let btnHover = true
if (btnClick === true || btnHover === true) {
    console.log("bg color red")
}
