const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

const link =document.querySelector('.link');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

link.addEventListener('click', function(){
  hamburger.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
