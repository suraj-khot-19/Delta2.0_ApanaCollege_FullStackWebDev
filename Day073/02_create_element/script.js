//create element
let newH1 = document.createElement('h1')
newH1.innerText = "hi am a new heading ....(appendChild) ";

//append child
let div = document.querySelector('.box')

div.appendChild(newH1) //add element after div

//append
let newbtn = document.createElement('button')
newbtn.innerText = "click me";
newH1.append(newbtn) //insert btn
newH1.append(" this btn is inseted using append also me") //insert btn


//prepend
let newdiv = document.createElement('div')
newdiv.innerHTML = "<h1>div prepend</h1>";
div.prepend(newdiv)