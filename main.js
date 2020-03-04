var score;
var time = 60;
var playing = false;
var correctAnswer;

function gameOver() {
  //leave timeLeft at 0
  document.getElementById("time").innerHTML = 0;
  //flash gamePanel red & display score info
  document.getElementById("display").style.backgroundColor = "green";
  document.getElementById("display").innerHTML = "<h2>Your score is: " + score + "</h2>"
  //turn timeRemaining to red
  document.getElementById("timeRemaining").style.backgroundColor  = "red";
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
  // getting random numbers for math problems
  var x = 1 + Math.round(9*Math.random());
  var y = 1 + Math.round(9*Math.random());
  // getting the correct answer of the problems
  correctAnswer = x * y;
  //display the equation on the display
  document.getElementById("display").innerHTML = "<h2>" + x + " x " + y + " </h2>";
  //place the correct answer in a random choice
  var correctPosition = 1 + Math.round(3*Math.random());
  document.getElementById("choice" + correctPosition).innerHTML = correctAnswer;
  //fill the other choices with false answers
  var answers = [correctAnswer];
  for (i = 1; i < 5; i++) {
    if (i != correctPosition){
      var incorrectAnswer;
      do {
        incorrectAnswer  = (1 + Math.round(9*Math.random())) * (1 + Math.round(9*Math.random()));
      } while (answers.indexOf(incorrectAnswer) > -1);
      document.getElementById("choice" + i).innerHTML = incorrectAnswer;
      answers.push(incorrectAnswer);
    }
  }
}

function keepScore() {
  //check if playing == true
  //check if user clicked correct answer
  //update score by 1 if above is true
  //apply green border to #display if answer is correct
  //do nothing if answer is incorrect except apply red border
  for(i = 1; i < 5; i++) {
    document.getElementById("choice" + i).onclick = function() {
      if (playing == true) {
        if (this.innerHTML == correctAnswer) { //if answer is correct
          score++;
          document.getElementById("scoreValue").innerHTML = score;
          document.getElementById("display").style.border = "2px solid limegreen";
          generateQA();
        } else { //if answer is incorrect  
         document.getElementById("display").style.border = "2px solid red";
        }
      }
    }
  }
}

function startGame() {
  //set playing to true
  playing = true;
  //set the score to 0
  score = 0;
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
  //keep score && track player clicks
  keepScore();
}

document.getElementById("startReset").onclick = function() {
  if (playing == true) {
    location.reload();
  }
  if (playing != true) {
    startGame();
  }
}