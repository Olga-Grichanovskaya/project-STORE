;(function($) {
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
    $('.trending-products-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    })          
    // Init jquery form stayler
    if ($('.form-control, .input-file-styler').length) {
        $('.form-control, .input-file-styler').styler();
    }
  
})(jQuery);
