function createSlider(selector, options) {
  const slider = new Swiper(selector, options);

  const prevButton = document.querySelector(options.navigation.prevEl);
  const nextButton = document.querySelector(options.navigation.nextEl);

  prevButton.addEventListener("click", () => {
    slider.slidePrev();
  });

  nextButton.addEventListener("click", () => {
    slider.slideNext();
  });

  return slider;
}

const mainSwiper = createSlider(".swiper", {
  loop: true,
  slidesPerView: 1,
  direction: "horizontal",
  spaceBetween: 30,
  initialSlide: 0,
  navigation: {
    nextEl: ".custom-next-button",
    prevEl: ".custom-prev-button",
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 2.5,
    },
  },
});
