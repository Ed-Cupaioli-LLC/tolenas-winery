$(function () {
  $.ajax({
    url: "https://feeds.behold.so/NZEi7ZBeDqPGB3tBlkQt",
    dataType: 'json',
    success: function(data) {
      var igFeed = data;
      console.log(data);
      $(igFeed).each(function(i,post) {
        var postLink = post.permalink;
        var postImage = post.mediaUrl;
        var postText = post.caption;
        var slide = '<div class="insta-slide" data-link="'+postLink+'" >'+
                      '<div class="slide-content">'+
                        '<img alt="Instagram post from Tolenas with the caption '+postText+'" src="'+postImage+'" class="slide-img" />'+
                        '<div class="slide-text hidden">'+postText.replace(/\n/g, "<br />")+'</div>'+
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
        $('.insta-caption').html(postText);
        $('.insta-link').attr('href',postLink);
      }); 
    } 
  });  
  // fetch("https://feeds.behold.so/NZEi7ZBeDqPGB3tBlkQt")
  //   .then((data) => data.json())
  //   .then((photos) => {
  //     photos.forEach(
  //       ({
  //         id, // The post ID
  //         mediaUrl, // The image source
  //         permalink, // URL of the Instagram post
  //         caption, // Post caption
  //         mediaType, // 'IMAGE', 'VIDEO', or 'CAROUSEL_ALBUM'
  //         thumbnailUrl, // Only returned for video posts
  //         timestamp, // Post publish date,
  //         children, // An array of CAROUSEL_ALBUM children. Each with id, mediaUrl, mediaType and thumbnailUrl
  //       }) => {
  //       var slide = '<div class="insta-slide" data-shortcode="'+shortCode+'" data-imagefull="'+imgFull+'" >'+
  //                     '<div class="slide-content">'+
  //                       '<img alt="'+mediaUrl+'" src="'+permalink+'" class="slide-img" />'+
  //                       '<div class="slide-text hidden">'+caption.replace(/\n/g, "<br />")+'</div>'+
  //                     '</div>'+
  //                   '<div>';
  //         $("#ig-slider").append(slide);
  //       }
  //     );
  //   });
  $(".close-embed").click(function () {
    $(".post-embed-container,body,html").removeClass("active");
    $(".insta-image").attr("src", "");
    $(".insta-caption").html("");
    $(".insta-link").attr("href", "");
  });
});