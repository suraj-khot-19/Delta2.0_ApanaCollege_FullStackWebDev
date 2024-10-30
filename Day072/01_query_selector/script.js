const paraClass = document.querySelector('.class') //.=>class
const paraId = document.querySelector('#id') //#=>id
const paraTag = document.querySelector('p') //tags(p,h1,button)=>tag selctes only one first
const paraTags = document.querySelectorAll('p') //tags(p,h1,button)=>tag selctes all
const btnInDiv = document.querySelectorAll('div button') //selctes all buttons inside div
console.log("class", paraClass)
console.log("id", paraId)
console.log("tag", paraTag)
console.log("tags", paraTags)
console.log("div btns", btnInDiv)