$(document).ready(function() {
    $('body').flowtype({
        minimum     : 500,
        maximum     : 960,
        minFont     : 14,
        maxFont     : 18,

        fontRatio   : 38
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
