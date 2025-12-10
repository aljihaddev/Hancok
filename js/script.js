jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });

// ==================================================

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

// ==================================================

new VenoBox({
    selector: '.my-video-links',
});

// ==================================================

$('.popularImage').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  prevArrow: '<i class="fa-solid fa-circle-arrow-left prevBtn"></i>',
  nextArrow: '<i class="fa-solid fa-circle-arrow-right nextBtn"></i>', 
});

// =========================

$('.store').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  prevArrow: '<i class="fa-solid fa-circle-arrow-left prevStoreBtn"></i>',
  nextArrow: '<i class="fa-solid fa-circle-arrow-right nextStoreBtn"></i>', 
});

// ==================================================

AOS.init({
    duration:1000,
});

// ==================================================
