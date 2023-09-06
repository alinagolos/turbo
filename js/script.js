var swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-btn-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});
