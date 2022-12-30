window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function(){
  $("#arrow_buttn").click(function(){
    $(".menu_list").hide();
  });

  $("#show_menu").click(function(){
    $(".menu_list").toggle();
  });
});


$(document).ready(function(){
  $("#arrow_buttn").click(function(){
    $(".menu_list").hide();
  });

  $("#first_menu").click(function(){
    $(".menu_list").toggle();
  });
});

