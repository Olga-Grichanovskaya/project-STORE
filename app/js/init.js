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
    // Init jquery form stayler
    if ($('.form-control, .input-file-styler').length) {
        $('.form-control, .input-file-styler').styler();
    }
  
})(jQuery);
