/* global $ *//* jslint browser:true */

$(document).ready(function() {
    'use strict';

    /*
    $('body').flowtype({
        minimum     : 500,
        minFont     : 14,
        maxFont     : 18,

        fontRatio   : 60
    });

    $('.span-bar.blue-texture').flowtype({
        minimum     : 500,
        maximum     : 960,
        minFont     : 12,
        maxFont     : 18,

        fontRatio   : 44
    });
    */

    $('.button-expand').click(function(e) {
        e.preventDefault();
        var container = $(this).parents('.post');
        var slider = container.find('.toggle-slider');
        if (slider.is('.toggle-slider--hidden')) {
            $(this).addClass('button-expand--open');
            slider.removeClass('toggle-slider--hidden');
        } else {
            $(this).removeClass('button-expand--open');
            slider.addClass('toggle-slider--hidden');
        }
    });
});
