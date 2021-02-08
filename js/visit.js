$(function (){
  $('#visit-menu .menu-link').click(function(e){
    e.preventDefault();
    const anchor = $(this).attr('href');
    $('.content-section.active').removeClass('active');
    $(anchor).addClass('active');

    $('#visit-menu .menu-link.active').removeClass('active');
    $(this).addClass('active');
    $('#visit-menu').removeClass('open');
    var offsetTop;
    if ($(window).width() <= 1024) {
      offsetTop = 150;
      
    } else {
      offsetTop = 88;
    }
    $('html,body').animate({
      scrollTop: $(anchor).offset().top - offsetTop
    });
  });
  $(window).on('load scroll', function() {
    checkOffset('#visit-menu','footer');
    if ($(this).scrollTop() > 88 && $(this).width() <= 1024) { 
      $('#visit-menu').addClass('scrolled');
    }  else {
      $('#visit-menu').removeClass('scrolled');
    }
  });
  function checkOffset(fixedObj,footer) {
    if($(fixedObj).offset().top + $(fixedObj).height() >= $(footer).offset().top - 10)
        var topPosition = $(fixedObj).offset().top;
        $(fixedObj).addClass('at-footer')
    if($(document).scrollTop() + window.innerHeight < $(footer).offset().top)
    $(fixedObj).removeClass("at-footer");
  }
  $('.visit-menu-toggle').click(function () {
    $('#visit-menu').toggleClass('open')
  });
  
  
  if ($(window).width() < 1024) {
    $(window).on('resize scroll', function() {
      
      $('.content-section').each(function(i,obj) {
        if ($(this).isInViewport()) {
          var sectionId = $(this).attr('id');
          
          $('.menu-link').removeClass('active');
          $('.menu-link[href="#'+sectionId+'"]').addClass('active');
        }
      });
    });
  }
});

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};