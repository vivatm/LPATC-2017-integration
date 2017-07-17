$(document).ready(function(){
  var menu = $("#header .menu-nav");
  var search = $("#header .rechercher");

  $("#header .menu").on("click", function() {
      $("#header .menu").toggleClass("open");
      if($("#header .menu").hasClass("open")){
        $("#header .menu #menu-icon i").removeClass("fa-bars");
        $("#header .menu #menu-icon i").addClass("fa-times");
      }else{
        $("#header .menu #menu-icon i").addClass("fa-bars");
        $("#header .menu #menu-icon i").removeClass("fa-times");
      }
  });

  $('#header .menu .wrapper').on('click', function(e) {
    e.stopPropagation();
  });

  $("#header #search > a").on("click", function(e) {
      $("#header #search").toggleClass("open");
      e.preventDefault();
  });

  // menu mobile

  var navbar = $("#header .navbar");
  var tablet = 768;

  function buildMobileMenu(deviceWidth) {
    if ($(document).width() < deviceWidth) {
      $('.menu .wrapper .span_7').append(navbar);
    }
    else {
      console.log('desktop');
      $('.menu .wrapper .span_7 .navbar').insertAfter($('#header .logo'));
    }
  }

  buildMobileMenu(tablet);

  $(window).resize(function() {
      buildMobileMenu(tablet);
  });

  $('.menu .wrapper div h4').click(function() {
    if ($(document).width() < tablet) {
      console.log('clic');
      $(this).toggleClass('open');
      $(this).find('.fa').toggleClass('fa-chevron-down');
      $(this).find('.fa').toggleClass('fa-chevron-up');
    }
  });

});
