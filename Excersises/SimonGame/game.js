var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var numOfKeypressed = [];

var level = 0;


// play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animate buttons
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // flash
  $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);

  // update title
  level++;
  $("h1").text("Level " + level);

}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[gamePattern.length - 1]) {
    console.log("success");
    //check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    console.log("wrong");
  }
}

// handle click
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// detect keyboard pressed
$(document).keydown(function(event) {
  console.log(event.key);
  if (numOfKeypressed.length === 0) {
    numOfKeypressed.push(event.key);
    nextSequence();
  }

});
