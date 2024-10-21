let count = 0;
setInterval(() => {
    console.log(count);
    count++;
}, 2000);

// but how to stop this
let id = setInterval(() => {
    console.log('hii');
}, 3000);
console.log(id) // this id willl be visible if we attach this file to inde.html
clearInterval(id) // it will stop it