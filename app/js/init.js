;(function($) {
    //init slicknav
    $('.header-nav').slicknav({
        appendTo: '.header-bottom .container',
        label: ''
    });
    //init range
    if ($('#price-range').length) {
        $('#price-range').ionRangeSlider({
            type: "double",
            grid: false,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$",
            hide_min_max: true
        });
    }
     // init tabs
    if ($( '.prodcuts-tabs' ).length) {
        $( '.prodcuts-tabs' ).tabs();
    }
    // init slick slider
    if ($( '.trending-products-slider' ).length) {
        $('.trending-products-slider').slick({
            dots: true,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-chevron-left"></i></div>',
                nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-chevron-right"></i></div>'
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
        }) 
    }        
    // Init jquery form stayler
    if ($('.form-control, .input-file-styler').length) {
        $('.form-control, .input-file-styler').styler();
    }
  
})(jQuery);
