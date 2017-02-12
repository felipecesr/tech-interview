(function() {
  'use strict'

  var seats = document.querySelectorAll('.js-seat');

  var next = document.querySelector('.js-next');

  var seat;

  next.addEventListener('click', function() {

    seat = document.querySelector('.-ref');

    seat.classList.remove('-ref');

    if (seat.nextElementSibling === null) {
      document.querySelector('.js-seat').classList.add('-ref');
    } else {
      seat.nextElementSibling.classList.add('-ref');
    }

    for (var i = 0; i < seats.length; i++) {
      document.querySelector('.-ref').style.order = 1;
    }
  });

})();
