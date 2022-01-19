$(function() {
  $.ajax({
    url: "https://api.commerce7.com/v1/reservation-type/for-web",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("tenant", "tolenas-vineyards-and-winery");
      xhr.setRequestHeader("Content-Type", "application/json");
    },
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
});