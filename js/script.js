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
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
     },
     initialSlide: 1,
});

// window.setInterval(countDown, 1000);

function countDown() {
     let now = new Date();
     let future = new Date('12/21/2023 10:00:00');
     let timeLeft = future - now;
     let milli = timeLeft;

     let seconds = milli / 1000;
     let minutes = seconds / 60;
     let hours = minutes / 60;
     let days = hours / 24;
     // let spareSeconds = seconds % 60;
     let spareMinutes = minutes % 60;
     let spareHours = hours % 24;
     let spareDays = days % 365;

     minutes = parseInt(minutes);
     hours = parseInt(hours);
     days = parseInt(days);
     // spareSeconds = parseInt(spareSeconds);
     spareMinutes = parseInt(spareMinutes);
     spareHours = parseInt(spareHours);
     spareDays = parseInt(spareDays);

     days = padNumber(days);
     hours = padNumber(hours);
     minutes = padNumber(minutes);
     // spareSeconds = padNumber(spareSeconds);
     spareMinutes = padNumber(spareMinutes);
     spareHours = padNumber(spareHours);
     spareDays = padNumber(spareDays);

     // timeLeft = spareDays + ':' + spareHours + ':' + spareMinutes;
     // spareSeconds;
     var timerDay = document.getElementById('timerDay');
     timerDay.innerHTML = spareDays;

     var timerHours = document.getElementById('timerHours');
     timerHours.innerHTML = spareHours;

     var timerMin = document.getElementById('timerMin');
     timerMin.innerHTML = spareMinutes;

     if (milli <= 0) {
          //Time's run out! If all values go to zero
          timerDay.innerHTML = '00';
          timerHours.innerHTML = '00';
          timerMin.innerHTML = '00';
     }
}

function padNumber(number) {
     if (number < 10) {
          number = '0' + number;
     }
     return number;
}
