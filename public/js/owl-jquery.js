$(document).ready(function () {
    $(".owl-gallery").owlCarousel({
        dots: false,
        items: 1,
        rtl : true,
        loop:true, //false
        autoplay:true,
        autoplayTimeout:5000,
        nav:true,
    })

    $(".owl-into").owlCarousel({
        loop: true,
        rtl : true,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1000: {
                items: 4,
            }
        }
    })

})
