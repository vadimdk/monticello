$(document).ready(() => {
  console.log("HELLO");

  $('.slider').slick({
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 1500,
    dots: true
  });

  $('.news__slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  });

  $('.nav').click((e) => {
    $(".nav_item").each(function (e) {

      let span = $(".nav_dot");

      span.removeClass("active");

    });

    let li = $(e.target.parentNode.previousElementSibling);
    console.log(li);
    li.addClass('active');
  });


  $("a[href^='#']").click(function (e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
      scrollTop: position
    }, 900);
  });

});
