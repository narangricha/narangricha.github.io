(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
  $('.carousel.carousel-slider').carousel({
    fullWidth: false
  });
  $(document).ready(function(){
    $('.carousel').carousel();
  });
})(jQuery); // end of jQuery name space
