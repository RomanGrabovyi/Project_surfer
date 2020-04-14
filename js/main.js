//@prepros-append main.js

$(document).ready(function() {
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptivHeight:true,
        slidesToShow:4,
        slidesToScroll:2,
        pauseOnHover:true
    });
});