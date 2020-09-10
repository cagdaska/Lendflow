// Detect window width
var isMobile = false;
var window_width = $(window).width();
function check_window_width() {
    if (window_width < 768) {
        $('body').addClass('mobile');
        isMobile = true;
    }
    else {
        $('body').removeClass('mobile');
        isMobile = false;
    }
    return window_width;
}
check_window_width();

var init_delay = true;
$(window).resize(function () {
    if ($(window).width() != window_width && init_delay) {
        window_width = $(window).width();
        init_delay = false;
        setTimeout(function () {
            check_window_width();
            resize_functions();
            init_delay = true
        }, 100);

    }
});

function resize_functions() {
}

$(document).ready(function () {
    $(".btn-show-pass").click(function() {
        var input = $(this).closest('.input-line').find('.input-password');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});
