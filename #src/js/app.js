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
