let arr = ["suraj", "adarsh", "rowdy"]
console.log(arr) //[ 'suraj', 'adarsh', 'rowdy' ]

arr[0] = "rowdy suraj"
console.log(arr) // [ 'rowdy suraj', 'adarsh', 'rowdy' ]

arr[1][0] = 'k'
console.log(arr) //! not change [ 'rowdy suraj', 'adarsh', 'rowdy' ]


// ! task
arr[-1] = "haaa"
console.log(arr) // [ 'rowdy suraj', 'adarsh', 'rowdy', '-1': 'haaa' ]

console.log(arr[-1]) // haaa