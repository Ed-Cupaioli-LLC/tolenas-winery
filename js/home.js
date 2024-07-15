$(function(){
  //featured product slider
  const collection = $('#product-section').data('collection');
  $.ajax({
    url: "https://api.commerce7.com/v1/product-for-web?collectionSlug="+collection,
    beforeSend: function(xhr) {
      xhr.setRequestHeader("tenant", "tolenas-vineyards-and-winery");
      xhr.setRequestHeader("Content-Type", "application/json");
    },
    dataType: 'json',
    type: 'GET',
    success: function(data) {
      const products = data.products;
      $(products).each(function(i,obj) {
        const productSlide = '<div class="product-slide">'+
                              '<a href="/product/'+obj.slug+'" class="slide-inner">'+
                              '<div class="slide-img">'+
                                '<img src="'+obj.image+'" alt="Product image of '+obj.title+'"/>'+
                                '<div class="slide-title">'+
                                  '<div class="heading-4">'+obj.title+'</div>'
                                '</div>'+
                              '</div>'+
                              '</a>'+
                             '</div>';
        $('#product-slider').append(productSlide);    
      });
      $('#product-slider').slick({
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    },
    error: function(data) {
      console.log(data);
    }
  });

  $('.hero-link[href="#email-signup"]').click(function(e) {
    e.preventDefault();
    
    $('html,body').animate({
      scrollTop: $('#footer-signup').offset().top
    });
    $('#footer-signup .email').focus();
  });

  setTimeout(function(){
    $('.hero-content').addClass('active');
  }, 1000);

  $('#home-hero .section-scroll').click(function() {
    $('html,body').animate({
      scrollTop: $('#product-section').offset().top
    });
  });
});