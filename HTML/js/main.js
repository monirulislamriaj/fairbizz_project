(function($) {
    "use strict";
   // slider
      function mainSlider() {
       var BasicSlider = $('.slider-active');
       BasicSlider.on('init', function(e, slick) {
           var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
           doAnimations($firstAnimatingElements);
       });
       BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
           var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
           doAnimations($animatingElements);
       });
       BasicSlider.slick({
           autoplay: false,
           autoplaySpeed: 10000,
           dots: true,
           fade: true,
           prevArrow:'<button type="button" class="slick-prev"><img src="img/aroleft.png">Prev</button>',
            nextArrow:'<button type="button" class="slick-next"><img src="img/aroright.png"> Next</button>',
           arrows: true,
           responsive: [
               { breakpoint: 767, settings: { dots: false, arrows: false } }
           ]
       });
   
       function doAnimations(elements) {
           var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
           elements.each(function() {
               var $this = $(this);
               var $animationDelay = $this.data('delay');
               var $animationType = 'animated ' + $this.data('animation');
               $this.css({
                   'animation-delay': $animationDelay,
                   '-webkit-animation-delay': $animationDelay
               });
               $this.addClass($animationType).one(animationEndEvents, function() {
                   $this.removeClass($animationType);
               });
           });
       }
   }
   mainSlider();

  // service-active   
  $('.service-active ').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2.5,
    slidesToScroll: 2,
    prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i>Prev</button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i> Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
    /*$('.vew-video').magnificPopup({
    type: 'iframe',
    
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>',
    
      patterns: {
        youtube: {
          index: 'youtube.com/', 
          id: 'v=',
          src: "https://www.youtube.com/embed/%id%?autoplay=1"
        },
      },
    
      srcAction: 'iframe_src', 
    }
    }); */

  // case-active
  $('.case-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // select-aria
  $('select').niceSelect();
  // testomoneal-aria
  /*variableWidth: true,*/
  $('.testomoneal-active ').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // 
  $('.band-active ').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:'<button type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right"></i></button>',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
})(jQuery);