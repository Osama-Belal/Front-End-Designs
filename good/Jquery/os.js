/*global $, alert, console*/

$(function () {

    'use strict';
    
    var okMac = $(".mac");
    
    okMac.height($(window).height());
    
    $(window).resize(function () {
        
        okMac.height($(window).height());
        
    });
});