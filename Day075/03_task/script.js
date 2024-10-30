let btn = document.querySelector('.btn')
let h1 = document.querySelector('.h1')
let div = document.querySelector('.color')

//define things
let n1, n2, n3;

btn.addEventListener('click', () => {
    //genrate
    n1 = Math.floor(255 * Math.random());
    n2 = Math.floor(255 * Math.random());
    n3 = Math.floor(255 * Math.random());

    //color
    let color = `rgb(${n1},${n2},${n3})`

    //change h1
    h1.innerText = color;

    //change style
    div.style.backgroundColor = color;
})