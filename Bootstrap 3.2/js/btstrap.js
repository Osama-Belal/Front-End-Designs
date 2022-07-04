/*global $, jQuery, alert*/
$(document).ready(function () {
    
    "use strict";
    
    $(".carousel").carousel({
        interval: 6000
    });
    $(".testimonials .carousel").carousel({
        interval: 1000
    });
    
    /*--------------------------------------Nice Scroll ------------------------------------*/
    
    $("html").niceScroll();
    
    $("body").niceScroll({
        cursorcolor: "#ff7657",
        cursorwidth: "7px",
        cursorborder: "none"
    });
    
    /*--------------------------------- About Translate ---------------------------------*/
    
    $(window).scroll(function () {
        
        var winTop = $(window).scrollTop();
        
        if (winTop > 100) {
            $(".about .layer").css("top", winTop / 2.6 + "px");
        }
        
        if (winTop >= 7200) {
            $(".our-skills .progress-bar").eq(0).css("width", "78%").end()
                .eq(1).css("width", "42%").end()
                .eq(2).css("width", "87%").end()
                .eq(3).css("width", "48%");
        }
        
        $(".about .layer").css("left", ($(window).width() - $(".about .layer").width()) / 2);
        
/*---------------------------------------Scroll Top Btn----------------------------------*/
        
        if (winTop > 2000) {
            $(".scroll-top").show(1000);
        } else {
            $(".scroll-top").hide(1000);
        }
                
    });
    
    $(".scroll-top").click(function () {
        $("html").animate({scrollTop: 0}, 4000);
    });
    
/*------------------------------------ Change Color Picker ------------------------------------*/
    
    $(".color-picker ul li").click(function () {
       
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
/*-------------------------- Slide Toggle Color Picker -------------------------*/
    
    $(".option-box .fa-gear").click(function () {
        $(".color-picker").slideToggle(700);
    });
       
/*--------------------------------------- Loading Screen --------------------------------------*/
    
    $(".loading").delay(4000).fadeOut("slow", function () {
        $("body").css("overflow", "auto");
    });
    
/*----------------------------------- Loading Screen --------------------------------------*/
    
    $(".panel-heading").eq(0).css("background", "#cce490").end()
                .eq(1).css("background", "#45b7b7").end()
                .eq(2).css("background", "#8b4c8c").end()
                .eq(3).css("background", "#f57665");

    
});