'use strict';

const addEventOnElem = function(elem, type, callback){
    if(elem.length > 1){
        for(let i=0; i<elem.length; i++){
            elem[i].addEventListener(type, callback);} 
        }
            else {

                elem.addEventListener(type, callback);
        }
    }

    const navbar = document.querySelector("[data-navbar]"); 
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const navToggler = document.querySelector("[data-nav-toggler]");
    const toggleNavbar = function(){
        navbar.classList.toggle("active"); 
        navToggler.classList.toggle("active");
    }


addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar= function(){
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

const header = document.queryselector("[data-header]");

window.addEventListener("scroll", function () {
if (window.scrollY > 100){
    header.classList.add("active");
} else {
header.classList.remove("active");
}
});

function showMessage(card) {
    const message = card.querySelector('.message');
    message.style.transform = 'translateY(0)';
  }
  
  function hideMessage(card) {
    const message = card.querySelector('.message');
    message.style.transform = 'translateY(-100%)';
  }

  function toggleMessage(button) {
    const cardContent = button.closest('.project-card'); 
    const message = cardContent.querySelector('.project-message');
    message.style.display = (message.style.display === 'block') ? 'none' : 'block';
}
