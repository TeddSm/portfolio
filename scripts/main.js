const swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: { slidesPerView: 3 } 
  }
});