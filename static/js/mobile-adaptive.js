$(document).ready(function () {
    let screenWidth = $(window).width();
    console.log(screenWidth);
    if (screenWidth < 768) {
        $('.flex').removeClass('flex').addClass('grid');
    }
    if (screenWidth > 768) {
        $('#menu-button').hide();
    }
});