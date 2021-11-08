// dice on the left
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var dice_left = document.querySelector(".img1");
dice_left.setAttribute("src", "images/" + randomDiceImage);

// dice on the left
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var dice_right = document.querySelector(".img2");
dice_right.setAttribute("src", "images/" + randomDiceImage2);

// who wins
var result = "Who wins?";
if (randomNumber1 < randomNumber2) {
  result = "Player 2 wins!🚩";
} else if (randomNumber1 > randomNumber2) {
  result = "🚩Player 1 wins!";
} else {
  result = "Draw!";
}

document.querySelector("h1").textContent = result;
