// swipers and sliders
document.addEventListener("DOMContentLoaded", () => {
    const testimonialsSlider = new Swiper('.testimonials__slider', {
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        1920: {
          slidesPerView: 4,
        },
        
        1440: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
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
        nextEl: '.testimonials__slider-button-next',
        prevEl: '.testimonials__slider-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const testimonialsSlider = new Swiper('.team-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        1920: {
          slidesPerView: 1,
        },
        
        1440: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: '.team-slider-button-next',
        prevEl: '.team-slider-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});
  
  