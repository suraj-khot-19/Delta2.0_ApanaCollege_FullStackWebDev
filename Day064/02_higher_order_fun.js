function higherOrder(fun, n) {
    for (let i = 0; i < n; i++)
        fun()
}

// ! define function outside
function greeting() {
    console.log('Jay Shree Ram!')
}
higherOrder(greeting, 5)

//! define function inside
higherOrder(function () { console.log('Jay Hanuman!') }, 3)