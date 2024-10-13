let range = prompt('please enter range');

let rand = Math.floor(Math.random() * range);

let guess = prompt('Now guess the number')
let count = 0;
while (1) {
    if (guess == rand) {
        count++;
        alert(`congrats You gueesed it! and ${count} number of guesses`)
        break;
    }
    else if (guess < rand) {
        count++
        guess = prompt('guess is *small than that of random number')
    }
    else if (guess > rand) {
        count++
        guess = prompt('guess is *greater than that of random number')
    }
}
console.log(count)