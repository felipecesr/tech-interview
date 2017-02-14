(function() {
  'use strict'

  var $btnMenu = document.querySelector('.btnmenu');

  $btnMenu.addEventListener('click', function() {
    document.documentElement.classList.toggle('js-menu-active')
  });
})();
