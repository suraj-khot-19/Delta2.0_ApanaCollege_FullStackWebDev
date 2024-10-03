let arr = ["suraj"]
console.log(arr)

/*
! push(...items: string[]): number

New elements to add to the array.
Appends new elements to the end of an array, and returns the new length of the array.
*/
arr.push(1)
console.log(arr) // [ 'suraj', 'khot' ]

arr.push("khot")
console.log(arr) // [ 'suraj', 1, 'khot' ]

/*
! pop(): string | undefined

Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
arr.pop()
console.log(arr) // [ 'suraj', 1 ]

/*
! unshift(...items: string[]): number

Elements to insert at the start of the array.
Inserts new elements at the start of an array, and returns the new length of the array.
*/
let x = arr.unshift("first")
console.log(x); // 3 (returns the new length of the array.)
console.log(arr) // [ 'first', 'suraj', 1 ]

/*
! shift(): string | undefined

Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
*/
arr.shift()
console.log(arr) // [ 'suraj', 1 ]


/*
?? add

! Push()    =   add elemet at end
! Unshift() =   add elemet at start

?? remove

! Pop()     =   remove elemet at end
! Shift()   =   remove elemet at start
*/