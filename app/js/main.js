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

  $("#header #search > a").on("click", function(e) {
      $("#header #search").toggleClass("open");
      e.preventDefault();
  });
});
