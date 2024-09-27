// every thing came with two value true/false

//! false
//! false 0 -0 NaN Undefined null '' "" `` bigIntValue

//! true
//! everything else true

let s1 = ''
if (s1) {
    console.log("this came with true")
}
else {
    console.log("this came with false")
}

let s2 = null
if (s2) {
    console.log("this came with true")
}
else {
    console.log("this came with false")
}

let s3 = undefined
if (s3) {
    console.log("this came with true")
}
else {
    console.log("this came with false")
}

let s4 = 0 / 0
if (s4) {
    console.log("this came with true")
}
else {
    console.log("this came with false")
}

let s5 = "suraj"
if (s5) {
    console.log("this came with true")
}
else {
    console.log("this came with false")
}

let s6 = 45
if (s6) {
    console.log("this came with true")
}
else {
    console.log("this came with false")
}