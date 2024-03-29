$(function () {
  //select category
  $(".category-menu .menu-link").click(function (e) {
    e.preventDefault();
    $(".category-menu .menu-link.active").removeClass("active");
    $(this).addClass("active");
    const activeSection = $(this).attr("href");
    $(".content-section.active").removeClass("active");
    $(activeSection).addClass("active");
  });
  //select content block
  $(".content-nav .nav-link").click(function (e) {
    e.preventDefault();
    $(this)
      .parents(".content-nav")
      .find(".nav-link.active")
      .removeClass("active");
    $(this).addClass("active");

    const activeBlock = $(this).attr("href");
    $(".content-block.active").removeClass("active");
    $(activeBlock).addClass("active");
  });
});