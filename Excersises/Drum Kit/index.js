// alert("Working Good?"); // good
var allButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allButtons.length; i++) {
   allButtons[i].addEventListener("click", function() {
     //console.log(this.innerHTML);
     this.style.color = "#fff";

   });
}

function handleClick() {
  var tom_1 = new Audio('sounds/tom-1.mp3');
  tom_1.play();
}
