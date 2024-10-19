function oddeven(request) {
    if (request == 'odd') {
        return function (n) {
            console.log(n % 2 != 0);
        }
    }
    else if (request == 'even') {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log('wrong request')
    }
}
// function chaining
oddeven('even')(22)
oddeven('even')(55)
oddeven('odd')(25)
oddeven('odd')(100)
oddeven('gay')