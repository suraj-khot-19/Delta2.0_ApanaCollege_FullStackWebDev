//navigation

//1. parent
const h4 = document.querySelector('h4');
console.log("h4 parent=", h4.parentElement) //box=>parent

//2. child
const div = document.querySelector('div')
console.log('div childs=', div.children)

//3. childElementCount
console.log('div childElementCount=', div.childElementCount)

//4. nextElementSibling
console.log('h4 nextElementSibling=', h4.nextElementSibling)

//5. previousElementSibling
console.log('h4 previousElementSibling=', h4.previousElementSibling)


//6. multi property
console.log('h4 previousElementSibling.parentElement=', h4.previousElementSibling.parentElement)

//7. children
console.log('div.children[2].children=', div.children[2].children)

//8. style
div.children[2].children[1].style.backgroundColor = 'rgba(23,23,23,0.3'