$(function(){

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function(){
            let introH = intro.innerHeight();
            scrollPos = $(this).scrollTop();
            checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH){
        if(scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


        // Smooth--scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault(); 
        
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 45
        },700);
    });



    // Nav Toggle
    navToggle.on("click", function(event){

        event.preventDefault();

        nav.toggleClass("show");
    });



    // Reviews: https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:false,
        arrows: false,
        dots: true
    });



    let PopUp = $("#pop_up");
    let PopUpOpen = $("#pop_up_open");
    let PopUpClose = $("#pop_up_close");
    
    PopUpOpen.on("click", function(event){

        event.preventDefault();
        PopUp.addClass("active");
    });

    PopUpClose.on("click", () =>{

        event.preventDefault();
        PopUp.removeClass("active");
    });

      
});