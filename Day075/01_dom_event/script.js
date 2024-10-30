let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
console.log(btn2)
btn1.style.backgroundColor = 'green'

//on click
btn1.onclick = function () {
    btn1.style.backgroundColor = 'red';
}

//on mouse enter
btn2.style.padding = '2px'
let onenter = () => {
    btn2.style.padding = '25px'
    console.log('enrer')
}
btn2.onmouseenter = onenter;
