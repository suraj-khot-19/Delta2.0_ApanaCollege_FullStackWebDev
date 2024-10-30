let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', () => {
    btn1.classList.add('red')
    alert('clicked');
    alert('haa')
})

btn2.addEventListener('dblclick', () => {
    btn2.classList.add('red')
})