var score = 0;
var time = 60;
var playing = false;

function gameOver() {

}

function startCountdown () {
  intervalId = setInterval(() => {
    timeRemaining -= 1;

    document.getElementById("time").innerHTML = timeRemaining;

    if (timeRemaining) {
      stopCountdown();

    }
  }, 1000);
}

function startGame() {
  //set playing to true
  playing = true;
  //set the score to 0
  document.getElementById("scoreValue").innerHTML = score;
  //set the countdown to 60
  document.getElementById("time").innerHTML = time;
    //reduce time by 1s in loops
    //timeleft?
        //yes --> continue
        //no --> gameOver
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