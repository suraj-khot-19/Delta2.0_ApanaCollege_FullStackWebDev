/*
slice(start?: number, end?: number): string
The index to the beginning of the specified portion of stringObj.

Returns a section of a string.
start=>include
end=>excludes
*/
let s = "ILoveCoding"
console.log(s.slice(1, 5)) //! start from 1th index and go to 5-1=4th idx

console.log(s.slice(5)) //! start from 5th idx and go till end

console.log(s.slice(-3)); //! start from end and come back till 3 characters

console.log(s.slice(-6));  //! start from end and come back till 6 characters

console.log(s.slice(12)) //! empty steing if not present