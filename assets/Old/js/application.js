//////////////////////////////////////////////////
// This files is used for demo purposes
// Take the neccessary Js for your project
//////////////////////////////////////////////////

!function ($) {

  $(function(){

    // Disable links in demo
    $('a[href^=#]').click(function (e) {
      e.preventDefault()
    })
    
    // button state demo
    $('#fat-btn')
    .click(function () {
      var btn = $(this)
      btn.button('loading')
      setTimeout(function () {
        btn.button('reset')
      }, 3000)
    })

    // tooltip demo
    $('[data-toggle="tooltip"]').tooltip()
    $('.tooltip-test').tooltip()
    
    // popover demo
    $("a[data-toggle=popover], .popover-test")
    .popover()
    .click(function(e) {
      e.preventDefault()
    })

    // placeholder fallback 
    //$('input, textarea').placeholder();

  })

}(window.jQuery)
