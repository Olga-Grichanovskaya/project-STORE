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
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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
