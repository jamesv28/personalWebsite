
$(function() {
    var wheight = $(window).height(); //get height of the window

    $('#indexHead').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window
        $('#indexHead').css('height', wheight);
    }); //on resize

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


    //typing
    $('.typing').typed({
        strings: ['Developer','Designer', 'all around cool dude'],
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
        stagePadding:30,
        smartSpeed:450,
        nav: true

    });
}); // end of jQuery script
