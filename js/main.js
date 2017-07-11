var $nav = $(".page-header");
var navShrinked = false;

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 1){
    if(!navShrinked) {
      $nav.addClass("shrunk");
      navShrinked = true;
    }
  }
  else{
    if(navShrinked) {
      $nav.removeClass("shrunk");
      navShrinked = false;
    }
  }
});