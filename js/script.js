
$(function() {
    var wheight = $(window).height(); //get height of the window

    /* animated scrolling */
    var topoffset = 40;
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
            } // target.length
        } //location hostname
    }); //on click

    $('#slide01').animatedModal({
        animatedIn: 'lightSpeedIn',
        animatedOut:'bounceOutDown'

    });
    //typing
    $('.typing').typed({
        strings: [' Developer',' Designer', 'n all around cool dude'],
        typeSpeed: 10,
        showCursor: true,
        loop: true,
        backDelay: 1000
    });

    $('.owl-carousel').owlCarousel({
        animateOut: 'bounceOutRight',
        animateIn: 'bounceInLeft',
        items:1,
        margin:30,
        loop: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        stagePadding:30,
        dotData: true,
        smartSpeed:250
    });

}); // end of jQuery script
