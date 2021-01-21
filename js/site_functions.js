$(function(){
  // $.ajax({
  //   url: "https://api.commerce7.com/v1/product-for-web?collectionSlug=wine&page=1",
  //   type: 'GET',
  //   headers: {"tenant": "tolenas-vineyards-and-winery"},
    
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });
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
});
