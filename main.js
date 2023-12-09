const plugin = require("tailwindcss");

//NavBar Variables
const mobileMenu = document.getElementById('mobile-menu');
const socialMenuItem1 = document.getElementById('social-menu-item-0');
const socialMenuItem2 = document.getElementById('social-menu-item-1');
const socialMenuItem3 = document.getElementById('social-menu-item-2');
const userMenuButton = document.getElementById('user-menu-button');


//Mobile menu toggle
mobileMenu.classList.toggle('block');

userMenuButton.addEventListener('click' , (e) => {
socialMenuItem1.classList.add('block');
socialMenuItem2.classList.add('block');
socialMenuItem3.classList.add('block');

});



