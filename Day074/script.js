let body = document.querySelector('body')
/*
Qsl. Create a new input and button element on the page using JavaScript only. Set the  
text of button to "Click me'
*/

let input = document.createElement('input')
let btn = document.createElement('button');
btn.innerText = "Click me"

body.append(input, btn)

/*
qs2. Add following attributes to the element : 
Change placeholder value of input to "username" 
Change the id of button to "btn' */
input.setAttribute('placeholder', 'username')
btn.setAttribute('id', 'btn')

/*Qs3. Access the btn using the querySelector and button id. Change the button background 
color to blue and text color to white. */
let button = document.querySelector('#btn')
button.classList.add('bg-blue', 'text-white')


/*
Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
Change its color to purple. */
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice"
h1.classList.add('underline', 'purple')
body.prepend(h1)

/*
Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", 
where Delta is bold. */
let p = document.createElement('p')
p.innerText = "Apna College Delta Practice"
p.classList.add('bold')
body.append(p)