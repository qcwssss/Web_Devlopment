$("h1").addClass("big-title margin-50");
console.log($("img").attr("src"));

// eventListener
$("button").click(function(){
  //$("h1").toggle();
  // fadeIn fadeOut
  //$("h1").fadeToggle();
  $("h1").slideToggle().animate({opacity:0.5});


});

// key input
$("input").keydown(function(event) {
  //console.log(event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "blue");
});
