$(document).ready(function(){
  $('.single-item').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 850,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='https://exsa.mediaimpact.digital/image/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='https://exsa.mediaimpact.digital/image/arrow-right.png'>"
  });
});