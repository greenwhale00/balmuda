$(function () {

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
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


    $('.recipe_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //speed: 100,
        arrows: false,
        dots: false,
        autoplay: true,
        // centerPadding: '5px',
        vertical: false,
        pauseOnHover: false,
        focusOnSelect: false,
        draggable: true,   //드래그 가능 여부 
        centerMode: true,
    });

    $('.arrows i:nth-child(1)').on('click', function () {
        $('.recipe_slider').slick('slickPrev')
    });
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.recipe_slider').slick('slickNext')
    });

    function mopen() {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    }
    $('.mopen').on('click', mopen)

})
