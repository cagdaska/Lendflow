$(document).ready(function () {

    $('.slider-container').on('init', function(event, slick, currentSlide, nextSlide){
       $(this).addClass('shown');
    });
    $('.slider-container').slick();
});
