'use strict';

let body = document.querySelector('body');
let header = document.querySelector('header');
let menu = document.querySelector('.mobile-menu');
let sidebar = document.querySelector('.nav')

menu.addEventListener('click', function (e) {
    body.classList.toggle('overlay');
    menu.classList.toggle('active');
    sidebar.classList.toggle('active');
});

window.addEventListener("scroll", function (e) {
   console.log(window.pageYOffset);
   if(window.pageYOffset > header.offsetHeight) {
        header.classList.add('sticky');
   } else {
        header.classList.remove('sticky');
   }
});

