let obj = [
    {
        name: 'suraj',
        age: 23,
        marks: 'A++'
    },
    {
        name: 'adya',
        age: 20,
        marks: 'A++'
    },
    {
        name: 'shubh',
        age: 13,
        marks: 'A++'
    },
]

console.log(obj)
console.log(typeof obj)
console.log(obj[0].name)

obj.map((e, i) => {
    console.log(i + 1, ":")
    console.log("name>>", e.name)
    console.log("age>>", e.age)
    console.log("marks>>", e.marks)
})