//console.log(a);
/*
    console.log(a);
            ^
    ReferenceError: a is not defined
*/
try {
    console.log(a)
}
catch {
    console.log("a is not defined")
}
/*
PS D:\Workspace\Delta-2.0\Day066> node 02_try_catch.js
a is not defined
*/