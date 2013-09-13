$(document).ready(function() {
    $('body').flowtype({
        minimum     : 500,
        maximum     : 1200,
        minFont     : 12,

        // lineRatio   : 1.618,
        fontRatio   : 67.773
    });

    $('.post').flowtype({
        minimum     : 500,
        maximum     : 1200,
        minFont     : 14,

        // lineRatio   : 1.618,
        fontRatio   : 67.773
    });

    $(".button-expand").click(function() {
        var content = $(this).siblings(".post-content");
        if (content.is(".post-content--hidden")) {
            $(this).addClass("button-expand--open");
            content.removeClass("post-content--hidden");
        } else {
            $(this).removeClass("button-expand--open");
            content.addClass("post-content--hidden");
        }
    });
});
