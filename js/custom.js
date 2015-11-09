/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
/* $('body').click(function() {
  $(this).animate
} */

/* $(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}); */

// navbar elastic scroll effect
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var anchor = $('body').find($(this).attr('href')).offset().top;
        $('html, body').animate({
          scrollTop: anchor}, 1200, 'easeInOutCubic');
        event.preventDefault();
    })
});

// text fade in when scrolling effect
$(function() {
    $(window).scroll(function() {
        $('.page-fade-in').each(function(i) {
            var top_of_container = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            top_of_container += 50;
            if(bottom_of_window > top_of_container)
            {
                $(this).delay(400).animate({opacity: 1}, 3000);
            }
        })
    })
}) //NEED TO MAKE IT FADEOUT

// navbar fade in and out 
$(function() {
    $(window).scroll({previousTop: 0}, function() {
        var currentTop = $(window).scrollTop();
        var headerHeight = $('#page-top').height(); //not used right now
        if(currentTop > 75) // navbar shows only if user scrolls beyond 75
        {
          if(currentTop > this.previousTop) // scroll down
          {
              $('.navbar').removeClass('animated fadeOutUp');
              $('.navbar').addClass('animated fadeInDown');
          }
          else // scroll up
          {
              $('.navbar').removeClass('animated fadeInDown');
              $('.navbar').addClass('animated fadeOutUp');
          }
        }
        this.previousTop = currentTop;
    })
})

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
