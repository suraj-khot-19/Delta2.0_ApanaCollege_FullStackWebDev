let obj = {
    1: 'a',
    2: 'b',
    key: 'name',
    null: 'c',
    undefined: 'd'
}
console.log(obj[1])
//console.log(obj.1) //! error

console.log(obj.key); //? ok
//console.log(obj[key]); //! key is not defined(here it taking as a string)

console.log(obj[null])
console.log(obj.null)

console.log(obj[undefined])
console.log(obj.undefined)

/*
PS D:\Workspace\Delta-2.0\Day059> node 03_object_string.js
a
name
c
c
d
d
*/

let obj2 = {
    name: 'suraj',
    age: [{ day: '19', month: 12, year: 1999 }]
}
console.log(obj2)
console.log(obj2.name)
console.log(obj2.age)
// console.log(obj2.age[day]) //! error
// console.log(obj2.age[month])//! error
// console.log(obj2.age[year])//! error
console.log(obj2.age[0]) //! error