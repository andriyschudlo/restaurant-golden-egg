const swiper = new Swiper('.spec_slider', {
 loop: true,
 speed: 1000,
 pagination: {
   el: '.swiper-pagination',
   clickable: true,
 },
});

const swiperMenue = new Swiper('.menu_slider', {
  slidesPerView: 2,
  // slidesPerColumn: 2,
  grid: { rows:2 }, //альтернатива slidesPerColumn
  speed: 500,
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
  let tabIndex = e.target.dataset.tab;
  let thisSwiper = document.querySelector(tabIndex);
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

