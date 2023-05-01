var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




jQuery("document").ready(function($){
    
  var nav = $('.nav-container');
  
  $(window).scroll(function () {
      if ($(this).scrollTop() > 136) {
          nav.addClass("f-nav");
      } else {
          nav.removeClass("f-nav");
      }
  });

});