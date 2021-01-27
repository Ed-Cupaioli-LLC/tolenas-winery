$(function (){
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSei20v3GYUUlQ0k6FKiZ7Ezl4D80jv2Mt0kO9lCFSlv5ZF3XA/formResponse',
      data: $('#contact-form').serialize(),
      type: 'POST'
    }).always(function(data) {
      $('#contact-form .form-body').slideUp();
      $('#contact-form .form-success').slideDown();
    });
  })
   
});