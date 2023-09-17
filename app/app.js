$(function(){
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll:1,
       
        
        prevArrow:".arrow-left",
        nextArrow:".arrow-right",
        dots:true,
        dotsClass:"bannerdots",
        centerMode: true,
        centerPadding: '60px', 
    });
    
}) 