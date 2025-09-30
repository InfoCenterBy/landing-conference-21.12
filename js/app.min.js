(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

if (menu) {
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
}

document.querySelector("#collapseProgrammBtn").addEventListener("click", (e) => {
  if (!e.target.classList.contains("collapsed")) {
    e.target.innerHTML = "Свернуть";
  } else {
    e.target.innerHTML = "Читать полностью";
  }
});

const swiper = new Swiper(".photo-slider-main.swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".photo-slider-main .swiper-pagination",
    type: "fraction",
  },
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".photo-slider-main .swiper-button-next",
    prevEl: ".photo-slider-main .swiper-button-prev",
  },
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 60,
    depth: 200,
    // modifier: 2,
    slideShadows: true,
    scale: 0.9,
  },
  initialSlide: 1,
  breakpoints: {
    1000: {
      slidesPerView: 2,
    },
  },
});
