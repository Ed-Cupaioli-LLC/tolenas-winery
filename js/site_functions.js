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
  //signup form
  $('.subscribe-form').submit(function(e) {
    e.preventDefault();
    const email = $(this).find('.email').val()
    const emailSub = {
      "email": email
    };
    $.ajax({
      url: "https://api.commerce7.com/v1/customer/subscribe",
      beforeSend: function(xhr) {
        xhr.setRequestHeader("tenant", "tolenas-vineyards-and-winery");
        xhr.setRequestHeader("Content-Type", "application/json");
      },
      dataType: 'json',
      data: JSON.stringify(emailSub),
      type: 'POST',
      success: function(data) {
        $(this).find('.result-msg').text('Thanks for signing up!');
        $(this).find('.form-body').slideUp();
        console.log(data);
      },
      error: function(data) {
        var errorData = $.parseJSON(data.responseText);
        var errors = errorData.errors;
        console.log(data);
        $(errors).each(function(i,err) {
          
          $(this).find('.result-msg').text(err.message);
          $(this).find('.result-msg').slideDown();
        });
      }
      
    }).done(function(){
      $('#subscribe-form .result-msg').slideDown();
    });
  });
  
  //hero animation 
  if ($('#hero').length > 0) {
    $('#hero h1').addClass('active');
  }
});
