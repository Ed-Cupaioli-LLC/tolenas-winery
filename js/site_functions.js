$(function(){
  $.ajax({
    url: "https://api.commerce7.com/v1/product-for-web?collectionSlug=wine&page=1",
    type: 'GET',
    headers: {"tenant": "tolenas-vineyards-and-winery"},
    
    success: function(data) {
      console.log(data);
    }
  })
});
