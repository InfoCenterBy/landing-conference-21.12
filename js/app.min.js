(() => {
     'use strict';

     const forms = document.querySelectorAll('.needs-validation');

     Array.from(forms).forEach((form) => {
          form.addEventListener(
               'submit',
               (event) => {
                    if (!form.checkValidity()) {
                         event.preventDefault();
                         event.stopPropagation();
                    }
                    form.classList.add('was-validated');
               },
               false
          );
     });
})();

document
     .querySelector('#collapseProgrammBtn')
     .addEventListener('click', (e) => {
          if (!e.target.classList.contains('collapsed')) {
               e.target.innerHTML = 'Свернуть';
          } else {
               e.target.innerHTML = 'Читать полностью';
          }
     });

const swiper = new Swiper('.swiper', {
     // Optional parameters
     direction: 'horizontal',
     // loop: true,
     pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
     },
     slidesPerView: '2',
     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },
     centeredSlides: true,
     effect: 'coverflow',
     coverflowEffect: {
          rotate: 0,
          stretch: 60,
          depth: 200,
          // modifier: 2,
          slideShadows: true,
          scale: 0.9,
     },
     initialSlide: 1,
});
