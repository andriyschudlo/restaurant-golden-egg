const swiper = new Swiper('.spec_slider', {
 // Optional parameters
 loop: true,
 speed: 1000,
 pagination: {
   el: '.swiper-pagination',
   clickable: true,
 },

});

const tabs = document.querySelector('.tabs');
const menuSlider = document.querySelectorAll('.menu_slider-block');

tabs.addEventListener('click', function(e) {
  if(e.target.classList.contains('tabs_item')){
    this.querySelectorAll('.tabs_item').forEach(item => item.classList.remove('active'));
    e.target.classList.add('active');
  }

  menuSlider.forEach(slider => slider.classList.remove('show'));
  const tabIndex = e.target.dataset.tab;
  const thisSwiper = document.querySelector(tabIndex);
  thisSwiper.classList.add('show');

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

