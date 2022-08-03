$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });


    $('.product .product_slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });

    $('.product .productArrows i:nth-child(1)').on('click', function () {
        $('.product_slider').slick('slickPrev')
    });
    $('.product .productArrows i:nth-child(2)').on('click', function () {
        $('.product_slider').slick('slickNext')
    });

})



