const swiper = new Swiper('.swiper', {
 // Optional parameters
 loop: true,
 pagination: {
   el: '.swiper-pagination',
   clickable: true,
 },

 // // Navigation arrows
 // navigation: {
 //   nextEl: '.swiper-button-next',
 //   prevEl: '.swiper-button-prev',
 // },

 // // And if we need scrollbar
 // scrollbar: {
 //   el: '.swiper-scrollbar',
 // },
});

window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs(){
  const outerTabs = document.querySelector('.tabs_container');
  const innerTabs = document.querySelector('.tabs');
  innerTabs.offsetWidth > outerTabs.offsetWidth ?
    innerTabs.classList.add('overflow') : 
    innerTabs.classList.remove('overflow'); 
}

