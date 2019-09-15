let btnDataWhatsapp = new Map([
    ['contact', 'Dear Ibu Agatha, saya mohon informasi untuk paket ...'],
    ['paket-1-tahun', 'https://bimbelses.com \nDear Ibu Agatha, saya berminat dengan paket 1 tahun dengan harga Rp. 6,2jt. Mohon informasi lebih lanjut.'],
    ['paket-1-bulan', 'https://bimbelses.com \nDear Ibu Agatha, saya berminat dengan paket 1 bulan dengan harga Rp. 750rb. Mohon informasi lebih lanjut.'],
    ['english-program-karyawan', 'https://bimbelses.com \nDear Ibu Agatha, saya berminat dengan paket English Program Karyawan dengan harga Rp. 1.2jt. Mohon informasi lebih lanjut.'],
    ['english-program-sma', 'https://bimbelses.com \nDear Ibu Agatha, saya berminat dengan paket English Program SMA dengan harga Rp. 900rb. Mohon informasi lebih lanjut.'],
    ['english-program-smp', 'https://bimbelses.com \nDear Ibu Agatha, saya berminat dengan paket English Program SMP dengan harga Rp. 600rb. Mohon informasi lebih lanjut.'],
    ['english-toelf-class', 'https://bimbelses.com \nDear Ibu Agatha, saya berminat dengan paket TOEFL Preparation Class dengan harga Rp. 1.4jt. Mohon informasi lebih lanjut.'],
  ]);

let linkWhatsapp = 'https://wa.me/+628817951136';

$(document).ready(function () {
    
    // Sticky nav
    
    $('.js--section-about').waypoint(function (direction) {
        var nav = $('nav');
        if (direction == "down") {
            nav.addClass('sticky animated fadeInDown');
        } else {
            nav.addClass('fadeOutUp');
            setTimeout(function () {
                nav.removeClass('animated fadeInDown fadeOutUp');
            }, 300);
        }
    }, {
        offset: '60px;'
    });
    
    
//    Hide navbar after clicking link
    
    $('.navbar-nav>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    // Hide navbar after clicking brand
    
    $('.navbar-brand').on('click', function(){
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
        $('.js--wp-5').addClass('animated fadeInUp');
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
        $('.js--wp-9').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
     $('.js--wp-10').waypoint(function (direction) {
        $('.js--wp-10').addClass('animated pulse');
    }, {
        offset: '50%'
    });
   
    $('.js--wp-11').waypoint(function (direction) {
        $('.js--wp-11').addClass('animated rollIn');
    }, {
        offset: '50%'
    });
    
    $('.phone-direct').click(function(event){
        event.preventDefault();
        var btn = $(this);
        let key = btn.attr('data-whatsapp');
        var finalURI = linkWhatsapp + '?text=' + encodeURI(btnDataWhatsapp.get(key));
        gtag('event', 'click', {
            'event_category': 'button',
            'event_label': key,
            'transport_type': 'beacon',
            'event_callback': function(){
              window.open(finalURI, '_blank');
            }
          });
    });
})
