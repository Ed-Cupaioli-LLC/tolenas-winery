$(function () {
  $.ajax({
    // url: "https://feeds.behold.so/ebeDTCCi9bfMrQyh0MxC",
    url: "https://feeds.behold.so/uFUReCIEj3OAoxFFxqzs",
    dataType: 'json',
    success: function(data) {
      var igFeed = data.posts;
      $(igFeed).each(function(i,post) {
        var mediaType = post.mediaType;
        var postLink = post.permalink;

        var postImage;
        if (mediaType == 'IMAGE') {
          postImage = post.mediaUrl;
        } else if (mediaType == 'VIDEO') {
          postImage = post.thumbnailUrl;
        } else if (mediaType == 'CAROUSEL_ALBUM') {
          postImage = post.children[0].mediaUrl;
        }
        var postText = post.caption;
        var slide = '<div class="insta-slide" data-link="'+postLink+'" >'+
                      '<div class="slide-content">'+
                        '<img alt="Instagram post from Tolenas with the caption '+postText+'" src="'+postImage+'" class="slide-img" />'+
                        '<div class="slide-text hidden">' +postText +'</div>'+
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
        
        var postLink = $(this).data("link");
        var postText = $(this).find('.slide-text').html();
        var postImage = $(this).find('.slide-img').attr('src');
        $('.insta-image').attr('src',postImage);
        if (postText !== 'undefined') {
         $(".insta-caption").html(postText.replace(/\n/g, "<br />")); 
        }
        $('.insta-link').attr('href',postLink);
      }); 
    } 
  });
  $(".close-embed").click(function () {
    $(".post-embed-container,body,html").removeClass("active");
    setTimeout(() => {
      $(".insta-image").attr("src", "");
      $(".insta-caption").html("");
      $(".insta-link").attr("href", "");
    }, 700);
    
  });
});