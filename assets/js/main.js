var acceptNewPass = false;
const toggle = document.getElementById('toggle');
function acceptNewPassFun(){
    if(acceptNewPass){
        document.getElementById("acceptNewPassId").setAttribute("type" , "password");
        toggle.classList.add('fa-eye');
        toggle.classList.remove('fa-eye-slash');
        acceptNewPass = false;
    }else{
        document.getElementById("acceptNewPassId").setAttribute("type" , "text");
        toggle.classList.remove('fa-eye');
        toggle.classList.add('fa-eye-slash');
        acceptNewPass = true;
    }
}

var NewPassId = false;
const newToggle = document.getElementById('newToggle');
function NewPassFun(){
    if(acceptNewPass){
        document.getElementById("NewPassId").setAttribute("type" , "password");
        newToggle.classList.add('fa-eye');
        newToggle.classList.remove('fa-eye-slash');
        acceptNewPass = false;
    }else{
        document.getElementById("NewPassId").setAttribute("type" , "text");
        newToggle.classList.remove('fa-eye');
        newToggle.classList.add('fa-eye-slash');
        acceptNewPass = true;
    }
}

$(document).ready(function () {
    /*start the loading page */
    // window.addEventListener("load", function () {
    //     const loader = document.querySelector(".loader");
    //     loader.className += " hidden";
    // });
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //start active navbar
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.nav-content').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });
    //start active navbar
    $('.add-popup').click(function(){
        $('.poup-window').addClass('acitve-popup');
        $('body').addClass('overflowNone');
    });
    $('.close-popup-window').click(function(){
        $('.poup-window').removeClass('acitve-popup');
        $('body').removeClass('overflowNone');
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });
    //partner slider 
    $('.owl-cards').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: false,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
