var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      console.log("success");
      setTimeout(nextSequence, 1000);
    }
  } else {
    var playAudio2 = new Audio("./sounds/wrong.mp3");
  playAudio2.play();
  $("body").addClass("game-over");
  function removeGO(){
    $("body").removeClass("game-over");
  }
  setTimeout(removeGO,200);
   $("h1").text("Game Over, Press Any Key to Restart");
   startOver();
}
  }
 

$(".btn").click(function handler(event) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  setTimeout(function () {
    var thisColor = event.target.id;
    $("#" + thisColor).removeClass("pressed");
  }, 100);
  animatePress(this);
  checkAnswer(userClickedPattern.length - 1);
  console.log(userClickedPattern);
});

function nextSequence(event) {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
  console.log(gamePattern);
}

function playSound(name) {
  var playAudio1 = new Audio("./sounds/" + name + ".mp3");
  playAudio1.play();
}

function animatePress(currentColor) {
  var thisColor = currentColor.getAttribute("id");
  $("#" + thisColor).addClass("pressed");
}

$(document).on("keydown", function (event) {
  // Check if the level is 0 before executing nextSequence
  if (level === 0) {
    nextSequence(event);
  }
});

function startOver(){
  level = 0;
  gamePattern = [];
  
}


  



