const div = document.querySelector('#div')

//we use classlist for style not using setAttribute beause it add only one class at a time


//log
console.log("list", div.classList)

//add
div.classList.add('red', 'fw-15', 'underline')

//remove
div.classList.remove('fs-4')

//containes
const isred = div.classList.contains('red');
console.log('contains=', isred)

//toggle
div.classList.toggle('bg-black') //if present in list=>remove //if not present=>add

div.classList.toggle('underline')