let body = document.querySelector('body')

//1
let p = document.createElement('p')
p.innerText = "hey i am a red!"

//2
let h3 = document.createElement('h3')
h3.innerText = "I'm a blue h3";

//3
let div = document.createElement('div')
div.style.border = "2px solid black"
div.style.backgroundColor = "pink"

let el1 = document.createElement('h1')
let el2 = document.createElement('p')

el1.innerText = "i'm in a div";
el2.innerText = "me too!"

div.append(el1, el2)

//and adding
body.append(p, h3, div)