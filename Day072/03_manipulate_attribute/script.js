const img = document.querySelector('img')

//get attribute
console.log('get attribute id=', img.getAttribute('id')) //id
console.log('get attribute class=', img.getAttribute('class')) //null cuase not defined

//set attribute
img.setAttribute('id', 'newId') //id
img.setAttribute('class', 'newClassIfNotPresent') //class


console.log('new attribute id=', img.getAttribute('id')) //id
console.log('new attribute class=', img.getAttribute('class')) //class

//! it will also reset styles after change

//getting src 
console.log("attribute src=", img.getAttribute('src'))
img.setAttribute('src', ' ../../Day051-project/Netflix-Clone-css/assets/c5.jpg')
console.log("attribute src changed=", img.getAttribute('src'))