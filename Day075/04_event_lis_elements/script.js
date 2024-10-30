let div = document.querySelector('div')

div.addEventListener('click', () => {
    div.classList.add('div')
})

let p = document.querySelector('p')
let span = document.querySelector('span');
p.addEventListener('copy', () => {
    span.style.display = 'block'
})
