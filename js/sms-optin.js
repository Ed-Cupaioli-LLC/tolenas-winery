$(function() {
  $.ajax({
    url: "https://api.vimbibe.com",
    beforeSend: function (xhr) {
      xhr.setRequestHeader(
        "Authorization",
        "Bearer ZP9lbg6Z1I2pfzeOIdASnJM3yx8wxtDSu2finDg9ay2OSzYqqYWMBQItEJYXkdhLpnVKjmsEk2geJubo"
      );
    },
    data: {
      customerId: 12345,
      phoneNumber: 5555555555
    }
  });
});