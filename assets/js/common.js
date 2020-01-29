$(document).ready(function() {
  'use strict';

  /* ================================
  // AOS - Animate On Scroll Library
  ================================ */
  AOS.init();

  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });
});
