
$(function() {
    var wheight = $(window).height(); //get height of the window

    $('#indexHead').css('height', wheight);

    $(window).resize(function() {
        var wheight = $(window).height(); //get height of the window
        $('#indexHead').css('height', wheight);
    }); //on resize

}); // end of jQuery script
