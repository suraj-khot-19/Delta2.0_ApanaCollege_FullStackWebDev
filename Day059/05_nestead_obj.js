let obj = {
    suraj: {
        age: 23,
        marks: 'A++'
    },
    adya: {
        age: 20,
        marks: 'A++'
    },
    shubh: {
        age: 13,
        marks: 'A++'
    },
}

console.log(obj)
console.log(typeof obj)
console.log(obj.suraj)
console.log(typeof obj.suraj)
console.log(obj.suraj.age)

/*
PS D:\Workspace\Delta-2.0\Day059> node 05_nestead_obj.js
{
  suraj: { age: 23, marks: 'A++' },
  adya: { age: 20, marks: 'A++' },
  shubh: { age: 13, marks: 'A++' }
}
object
{ age: 23, marks: 'A++' }
object
23
*/