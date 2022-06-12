const slider = document.querySelector("#slider");
let sliderSelection = document.querySelectorAll(".slider__section");
let sliderSelectionLast = sliderSelection[sliderSelection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSelectionLast);

function Next(){
  let sliderfir = document.querySelectorAll(".slider__section")[0];
  
  slider.style.marginLeft = "-200%"; 
  slider.style.transition = "all 0.5s";

  setTimeout(function(){
      slider.style.transition= "none";
      slider.insertAdjacentElement('beforeend', sliderfir);
      slider.style.marginLeft = "-100%";
  }, 500);
}

function prev(){
    let sliderSelection = document.querySelectorAll(".slider__section");
    let sliderSelectionLast = sliderSelection[sliderSelection.length -1];
    
    slider.style.marginLeft = "0%"; 
    slider.style.transition = "all 0.5s";
  
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin', sliderSelectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
  }
  


btnRight.addEventListener("click", function(){
 Next();
});

btnLeft.addEventListener("click", function(){
    prev();
   });
 
setInterval(function(){
 Next();

}, 5000);


// btn main nav

let btn = document.getElementById("btn");
let MainNav = document.getElementById("main-nav");

btn.addEventListener("click", function(){
  MainNav.classList.toggle("mostrar");
})
