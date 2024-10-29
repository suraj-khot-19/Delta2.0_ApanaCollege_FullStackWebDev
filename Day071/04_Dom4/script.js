const images = document.getElementsByClassName('images');

//printing
for (let i = 0; i < images.length; i++) {
    console.log(i, " : ", images[i].src)
}

//now we can change it also
for (let i = 0; i < images.length; i++) {
    let img = "../../Day051-project/Netflix-Clone-css/assets/c9.jpg";
    images[i].src = img;
}

//now again printing
for (let i = 0; i < images.length; i++) {
    console.log(i, "th changed image : ", images[i].src)
}