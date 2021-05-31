/* O $ em JS sempre referencia o JQUERY */
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false, /*setinhas de navegação */
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})