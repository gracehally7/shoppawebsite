const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});

// AOS Instance
AOS.init({
  duration:200,
  offset:0,
});

window.addEventListener('load', function(){
  AOS.refresh();
});


// sliderjs
let sliderContainer =  document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 3;

let sliderContainerWidth = sliderContainer.clientWidth;
let cardWidth = sliderContainerWidth/elementsToShow;

 slider.style.width = cards.length *cardWidth+'px';

for (let index= 0; index < cards.length; index++){
     const element = cards[index];
           element.style.width= cardWidth+'px';
}

function prev(){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}

function next(){
    slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';
}
