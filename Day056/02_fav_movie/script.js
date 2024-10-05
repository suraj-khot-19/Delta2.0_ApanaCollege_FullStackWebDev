'use strict';

const favMovie = "arjun readdy"
let movie = prompt('enter movie name or quite:');

while ((movie.toLowerCase() != favMovie) && (movie.toLowerCase() != 'quite')) {
    movie = prompt('wrong quess please enter movie name or quite:');
}
if (movie.toLowerCase() === favMovie) {
    alert('congrats you guessed correctly')
}
else {
    alert('you quite game')
}