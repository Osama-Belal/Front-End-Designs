/*global $, alert, console*/
$(function () {
    
    'use strict';
    
    var btnColor = $(".footer button");
    
    btnColor.eq(0).css("background-color", "orange");
    btnColor.eq(1).css("background-color", "#444");
    
    btnColor.click(function () {
       
        $(".chng").css("background-color", $(this).css("background-color"));
        $(".chng").css("color", "#FFF");
    });
    
    $("a").click(function () {
        
        $("html,body").animate({ scrollTop : +500 }, 1000);

    });
    
    
});




