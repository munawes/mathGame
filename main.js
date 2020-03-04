var score = 0;
var time = 4;
var playing = false;

function gameOver() {
  //leave timeLeft at 0
  document.getElementById("time").innerHTML = 0;
  //flash gamePanel red & display score info
  document.getElementById("display").style.backgroundColor = "limegreen";
  document.getElementById("display").style.border = "10px solid red";
  document.getElementById("display").innerHTML = "<h2>Your score is: " + score + "</h2>"
}

function startCountdown () {
  intervalId = setInterval(() => {
    time--;
    document.getElementById("time").innerHTML = time;
    if (time == 0) {
      clearInterval(intervalId);
      gameOver();
    }
  }, 1000);
}

function generateQA() {
  
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
  generateQA();
}

document.getElementById("startReset").onclick = function() {
  if (playing == true) {
    location.reload();
  }
  if (playing != true) {
    startGame();
  }
}