(function() {
  'use strict'

  var $header = document.querySelector('.nav-bar');

  window.onscroll = function() {
    (window.pageYOffset > 60) ? $header.className = 'nav-bar -scroll' : $header.className = 'nav-bar';
  };

})();
