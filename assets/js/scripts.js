

$(document).ready(function(){
    new WOW().init();
    $(".topmenu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс

        $('body,html').animate({scrollTop: top-20}, 1500);
    });
});


(function($) {
    $('.js-nav-menu-toggle').on('click', function() {
        $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
    });

    $('html').on('click', function(e) {
        if(!$(e.target).closest('.js-nav-menu').length &&
            ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
            $('.js-nav-menu').removeClass('navigation-menu--open');
        }
    });
})(jQuery);

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});