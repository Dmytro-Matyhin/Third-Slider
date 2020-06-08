const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("is-active");
});

$('.bike-sliders').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

	