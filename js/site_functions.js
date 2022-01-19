$(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 88) { 
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
  $('.nav-toggle').click(function() {
    $('nav').toggleClass('active');
  });
  
  //hero animation 
  if ($('#hero').length > 0) {
    $('#hero h1').addClass('active');
  }
});
