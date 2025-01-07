// swipers and sliders
document.addEventListener("DOMContentLoaded", () => {
    const testimonialsSlider = new Swiper('.testimonials__slider', {
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
  
  