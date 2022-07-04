$(document).ready(function () {
    'use strict';
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4', '#008ec5'],
        navigation: {
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4', 'page5']
        }
    });
    
        
    $("#section1 span").css("top", ($(window).height() - 1110) / 2);
    $("#section1 span").eq(1).css("left", $(window).width() - $("#section1 span").width());
    $("#section1 span").eq(0).addClass("st");
    $("#section1 span").eq(1).addClass("nd");
    
    
    $(window).resize(function () {
        $("#section1 span").css("top", ($(window).height() - 1110) / 2);
        $("#section1 span").eq(1).css("left", ($(window).width() - $("#section1 span").width()) / 1.2);
    });
});