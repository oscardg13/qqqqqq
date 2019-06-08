(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('#textarea1').val('New Text');
   M.textareaAutoResize($('#textarea1'));

  }); // end of document ready
})(jQuery); // end of jQuery name space
