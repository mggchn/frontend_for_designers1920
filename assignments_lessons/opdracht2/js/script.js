// slider en afbeeldingen aanroepen
const carouselSlider = document.querySelector('.carousel-slider');
const carouselImages = document.querySelector('.foto');

// buttons aanroepen
const buttonLeft = document.querySelector('.button.left');
const buttonRight = document.querySelector('.button.right');

// MarginLeft aanpassen met de buttonRight knop
function marginLeft() {
    carouselImages.style.marginLeft = "-180px";
}

//marginRight aanpassen met de buttonLeft knop
function marginRight() {
    carouselImages.style.marginRight = "180px";
}