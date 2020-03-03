var score = 0;
var time = 0;
var timeLeft = 60;
var playing = false;

function gameOver() {
  //set playing to false
  playing = false;
  //flash 
}

function startCountdown () {
  intervalId = setInterval(() => {
    time++;

    document.getElementById("time").innerHTML = timeLeft - time;

    if (timeLeft == 0) {
      gameOver();
    }
  }, 1000);
}

function startGame() {
  //set playing to true
  playing = true;
  //set the score to 0
  document.getElementById("scoreValue").innerHTML = score;
  //set the countdown to 60
  //reduce time by 1s in loops
  //timeleft?
    //yes --> continue
    //no --> gameOver
  startCountdown();
  //change button to reset
  document.getElementById("startReset").innerHTML = "Reset Game";
  //generate new q&a
}

document.getElementById("startReset").onclick = function() {
  if (playing == true) {
    location.reload();
  }
  if (playing != true) {
    startGame();
  }
}