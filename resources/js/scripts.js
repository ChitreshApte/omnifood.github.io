$(document).ready(function(){ //this denotes this code should run after the document has completely loaded

    // Sticky navigation
    $(".js--section-features").waypoint(function(direction){
        if(direction === "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    },{
    offset: '60px'
    });

    // Scroll on buttons
    $(".js--scroll-to-plans").click(function(){
        $("html, body").animate({scrollTop : $(".js--section-plans").offset().top}, 1000);
    });
    $(".js--scroll-to-start").click(function(){
        $("html, body").animate({scrollTop : $(".js--section-features").offset().top}, 1000);
    });

    // Navigation Scroll
    //taken from : https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    //ANIMATIONS ON SCROLL - created using waypoint and animations.css
    //very interesting library taken from https://animate.style/
    //features section
    $(".js--wp-1").waypoint(function(direction){
        $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },{
        offset : "50%",
    });

    //iphone image
    $(".js--wp-2").waypoint(function(direction){
        $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },{
        offset : "50%",
    });

    //cities section
    $(".js--wp-3").waypoint(function(direction){
        $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },{
        offset : "50%",
    });

    //the plan box
    $(".js--wp-4").waypoint(function(direction){
        $(".js--wp-4").addClass("animate__animated animate__pulse");
    },{
        offset : "50%",
    });

    // Mobile Navigation
    $(".js--nav-icon").click(function(){
        var nav = $(".js--main-nav");
        nav.slideToggle(200);

        var icon = document.querySelector(".js--nav-icon");
        var currentIcon = icon.getAttribute("name");
        var newIcon;
        if(currentIcon === "reorder-four-outline") {
            newIcon = "close-outline";
        } else {
            newIcon = "reorder-four-outline";
        }
        icon.setAttribute("name", newIcon);

    });


});