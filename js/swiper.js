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
    const teamSlider = new Swiper('.team-slider', {
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
  
  


// our-story slider

document.addEventListener("DOMContentLoaded", () => {
  const newsSlider = new Swiper('.news__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
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
      nextEl: '.news__slider-button-next',
      prevEl: '.news__slider-button-prev',
    },
    pagination: {
      el: '.news__slider-pagination',
      clickable: true,
    },
  });
});








// Get all buttons and modals
const moreInfoBtns = document.querySelectorAll('.more-info-btn');
const tipModals = document.querySelectorAll('.tip-modal');
const closeBtns = document.querySelectorAll('.close-btn');

// Function to show modal
function showModal(modal) {
    // Hide all modals
    tipModals.forEach(modal => modal.style.display = 'none');
    modal.style.display = 'flex'; // Show the clicked modal
}

// Function to hide modal
function hideModal(modal) {
    modal.style.display = 'none';
}

// Show modal when button is clicked
moreInfoBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        showModal(tipModals[index]); // Show corresponding modal
    });
});

// Close modal when close button is clicked
closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        hideModal(tipModals[index]); // Hide corresponding modal
    });
});

// Close modal if clicked outside the modal content
tipModals.forEach(modal => {
    modal.addEventListener('click', function(event) {
        // Close the modal only if the click is on the backdrop (outside the content)
        if (event.target === modal) {
            hideModal(modal); // Hide modal if clicked outside
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".values__mobile-step");
  const contents = document.querySelectorAll(".values-value__num");

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      const stepNumber = step.getAttribute("data-step");

      // Удаляем активные классы у всех степов и контента
      steps.forEach((s) => s.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Добавляем активные классы к текущему степу и соответствующему контенту
      step.classList.add("active");
      document
        .querySelector(`.values-value__num[data-step="${stepNumber}"]`)
        .classList.add("active");
    });
  });
});




// header menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerIcon = burgerMenu.querySelector(".burger-icon");

  burgerMenu.addEventListener("click", () => {
      // Переключение классов
      burgerIcon.classList.toggle("active");
      mobileMenu.classList.toggle("active");
  });

  // Закрытие меню при клике вне его
  document.addEventListener("click", (e) => {
      if (!burgerMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
          burgerIcon.classList.remove("active");
          mobileMenu.classList.remove("active");
      }
  });
});
