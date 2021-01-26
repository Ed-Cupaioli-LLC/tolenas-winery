$(function (){
  $('.menu-link').click(function(e){
    e.preventDefault();
    const anchor = $(this).attr('href');
    $('.content-section.active').removeClass('active');
    $(anchor).addClass('active');

    $('.menu-link.active').removeClass('active');
    $(this).addClass('active');
    
    $('html,body').animate({
      scrollTop: $(anchor).offset().top - 88
    });
  });
  $(window).on('load scroll', function() {
    checkOffset('#visit-menu','footer');
  });
  function checkOffset(fixedObj,footer) {
    if($(fixedObj).offset().top + $(fixedObj).height() >= $(footer).offset().top - 10)
        var topPosition = $(fixedObj).offset().top;
        $(fixedObj).addClass('at-footer')
    if($(document).scrollTop() + window.innerHeight < $(footer).offset().top)
    $(fixedObj).removeClass("at-footer");
  }
});