// ++++++++++++++++++++++++++++++++++++++++++++++++
// NOTICE!! THIS JAVASCRIPT IS USED JUST FOR DOCS
// YOU MAY NEED SOME CODE FOR YOUR PROJECT
// NOT INCLUDE THIS FILES AS IS
// ++++++++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    // Disable links in docs
    $('[href^=#]').click(function (e) {
      e.preventDefault()
    })

    // tooltip demo
    $("[data-toggle=tooltip]").tooltip();

    // popover demo
    $("[data-toggle=popover]")
      .popover()

    // button state demo
    $('#fat-btn')
      .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
          btn.button('reset')
        }, 3000)
      })

    // carousel demo
    $('#myCarousel').carousel();
    $('#myCarouselV').carousel();


    /////////////////////////////
    // GMAP v3
    /////////////////////////////

    $.fn.gMap && $('.gmap').each(function(){
        var d = $(this).data('markers').split(';'),
            m = [];
        
        for(a in d) { m.push({'address' : d[a]}) }
        
        $(this).gMap({
          zoom: $(this).data('zoom') || 16,
          markers: m
        });

    });


  })
}(window.jQuery)
