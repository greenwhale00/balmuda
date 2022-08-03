$(function () {

    $('.main_slider').slick({
        arrows: false,
        autoplay: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });



    $('.gnb>ul>li>a').on('click', function (event) {
        if ($(window).width() < 769) {
            event.preventDefault();
            $('.smenu').slideUp()
            $(this).next().stop().slideToggle();
        }
    });


    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    });



    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.smenu').removeAttr('style')
    });


})


