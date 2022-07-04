/*global $, alert, console*/

$(function () {

    'use strict';
    
    // Adjust the Header Background To the Window
    
    var myHeader = $('.home'),
        sc = $(window).scrollTop();

    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
    });
    
    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $('#home').offset().top) {
            
            $('.links a:first-of-type').addClass('active').siblings(this).removeClass('active');
        }
        
        if ($(window).scrollTop() >= $('#about').offset().top) {
            
            $('.links a:nth-of-type(2)').addClass('active').siblings(this).removeClass('active');
        }
        
        if ($(window).scrollTop() >= $('#portfolio').offset().top) {
            
            $('.links a:nth-of-type(3)').addClass('active').siblings(this).removeClass('active');
            
        }
        
        if ($(window).scrollTop() >= $('#testimonials').offset().top) {
            
            $('.links a:nth-of-type(4)').addClass('active').siblings(this).removeClass('active');
            
        }
        
        if ($(window).scrollTop() >= $('#contact').offset().top) {
            
            $('.links a:last-of-type').addClass('active').siblings(this).removeClass('active');
            
        }
        
    });
    
    // NavBar------------------------------------------------------------------------------------------------------------
        
//    $(window).on("scroll", function () {
//        
//        var sc = $(window).scrollTop() / 250;
//    
//        $(".navbar").css("background", "rgba(51, 51, 51, " + sc + ")");
//        
//    });
                
    // Change the Main Color Of Layer--------------------------------------------------------------------------------------
    
    $(".btn").click(function () {
        
        var btnBackColor = $(this).css("background-color"),
            btnColor = $(this).css("color");
        
        $(".layer").css({backgroundColor : btnBackColor});
        $(".mainclr").css("color", btnColor);
        $(".m").css("background", btnColor);
        $(".mainbackclr").css({backgroundColor : btnColor});
    });
       
    // Smothing Scroll-----------------------------------------------------------------------------------------------------
    
    $(".links a").click(function () {
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 20
        }, 1400);
        
        return false;
        
    });
    
    /* Infiniy Animation-------------------------------------------------------------------------------------------------*/
});