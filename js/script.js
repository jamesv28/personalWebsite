
$(function() {
    var wheight = $(window).height(); //get height of the window

    $('#feeling').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window
        $('#feeling').css('height', wheight);
    }); //on resize

}); // end of jQuery script
