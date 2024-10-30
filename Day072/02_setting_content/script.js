let h1 = document.querySelector('.heading');

//changing inner text
h1.innerText = "hello"

//inner text=>text in node
console.log(h1.innerText)

//inner html=>all markup in h1
console.log(h1.innerHTML)

//textContent=>showing all full text(including hidden)
console.log(h1.textContent);

const hi = document.getElementById('hi');
console.log("inner text==>", hi.innerText) //not consider hidden
console.log("text content==>", hi.textContent) //also display hidden