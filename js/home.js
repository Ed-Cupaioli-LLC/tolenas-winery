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
                                '<img src="'+obj.image+'" />'+
                                '<div class="slide-title">'+
                                  '<h4>'+obj.title+'</h4>'
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
  //insta feed
  $.ajax({
    url: 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={%22id%22:%227741927326%22,%22first%22:12}',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      var igFeed = data.data.user.edge_owner_to_timeline_media.edges;
      $(igFeed).each(function(i,obj) {
        var igPost = obj.node;
        var imgThumb = obj.node.thumbnail_src;
        var imgFull = obj.node.display_url;
        var imgAlt = obj.node.accessibility_caption;
        var shortCode = obj.node.shortcode;
        var igText = igPost.edge_media_to_caption.edges[0].node.text;
        var slide = '<div class="insta-slide" data-shortcode="'+shortCode+'" data-imagefull="'+imgFull+'" >'+
                      '<div class="slide-content">'+
                        '<img alt="'+imgAlt+'" src="'+imgThumb+'" class="slide-img" />'+
                        '<div class="slide-text hidden">'+igText.replace(/\n/g, "<br />")+'</div>'+
                      '</div>'+
                    '<div>';  
        $('#ig-slider').append(slide);
      });  
      $('#ig-slider').slick({
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
      $('.insta-slide').click(function() {
        $('.post-embed-container,body,html').addClass('active');
        var postCode = $(this).data('shortcode');
        var postLink = 'https://www.instagram.com/p/'+postCode;
        var postText = $(this).find('.slide-text').html();
        var postImage = $(this).data('imagefull');
        $('.insta-image').attr('src',postImage);
        $('.insta-caption').html(postText);
        $('.insta-link').attr('href','https://www.instagram.com/p/'+postCode);
      }); 
    }, error: function(data) {    
      console.log(data);  
    }
  });
  $('.close-embed').click(function() {
    $('.post-embed-container,body,html').removeClass('active');
    $('.insta-image').attr('src','');
    $('.insta-caption').html('');
    $('.insta-link').attr('href','');
  });
});