$(document).ready(function () {
    
// Sticky nav
    
    $('.js--section-about').waypoint(function (direction) {
        var nav = $('nav');
        if (direction == "down") {
            nav.addClass('sticky animated fadeInDown');
        } else {
            nav.addClass('fadeOutUp');
            setTimeout(function () {
                nav.removeClass('sticky animated fadeInDown fadeOutUp');
            }, 300);
        }
    }, {
        offset: '60px;'
    });
    
    
//    Hide navbar after clicking link
    
   $('.navbar-nav>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
    
    
//    Scrolling from hero buttons
    
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-about').offset().top
        }, 1000);
    });
    
    $('.js--scroll-to-kontak').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--kontak').offset().top
        }, 1000);
    });
    
    
    // Scroll links smoothly
    
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
//    Animations on scroll 
    
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated pulse');
    }, {
        offset: '50%'  
    });
    
    $('.js--wp-6').waypoint(function (direction) {
        $('.js--wp-6').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-7').waypoint(function (direction) {
        $('.js--wp-7').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-8').waypoint(function (direction) {
        $('.js--wp-8').addClass('animated pulse');
    }, {
        offset: '50%'
    });
   
    $('.js--wp-9').waypoint(function (direction) {
        $('.js--wp-9').addClass('animated rollIn');
    }, {
        offset: '50%'
    });
    
    
})

/* bugs
1. when click navbar brand on navbar menu, navbar wont hide
2. when click section from navbar, the navbar overlaps title
2. when clik section from navbar, sometimes it goes to the middle of the section instead of the beginning of the section

*/
   