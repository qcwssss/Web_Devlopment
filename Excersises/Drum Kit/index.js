// alert("Working Good?"); // good
var allButtons = document.querySelectorAll(".drum");

for (var i = 0; i < allButtons.length; i++) {
   allButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
  alert("I got clicked");
}
