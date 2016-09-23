var playerRoll = 0;
var computerRoll = 0;

var myScore = document.getElementById('myRoll');
var compScore = document.getElementById('compRoll');

var winnerIs = document.getElementById('winner');

function Play() {
  this.value = "";
  this.domElement = document.getElementById("playerDisplay");
  this.domElement.className = "play";
}

Play.prototype.roll = function() {
  this.value = Math.ceil(Math.random() * 3);
    if (this.value === 1) {
      playerRoll = 1;
      myScore.innerHTML = "Rock";
    } else if (this.value === 2) {
      playerRoll = 2;
      myScore.innerHTML = "Paper";
    } else {
      playerRoll = 3;
      myScore.innerHTML = "Scissors";
    }
    console.log("playerRoll is: " + playerRoll);
  computerMove();
}


function computerMove() {
  this.value = Math.ceil(Math.random() * 3);
    if (this.value === 1) {
      computerRoll = 1;
      console.log("Comp: " + computerRoll);
      compScore.innerHTML = "Rock";
    } else if (this.value === 2) {
      computerRoll = 2;
      console.log("Comp: " + computerRoll);
      compScore.innerHTML = "Paper";
    } else {
      computerRoll = 3;
      console.log("Comp: " + computerRoll);
      compScore.innerHTML = "Scissors";
    }
    window.setTimeout(r, 200);
    function r() {
      winCheck();
    }
}

function playerHand() {
  this.dice = [new Play()];
  this.domElement = document.createElement("DIV");
  this.domElement.className = "hand";

  var rollBtn = document.createElement("BUTTON");
  rollBtn.textContent = "ROLL";
  rollBtn.onclick = this.roll.bind(this);

  this.domElement.appendChild(rollBtn);

    for (var i = 0; i < this.dice.length; i++) {
      this.domElement.appendChild(this.dice[i].domElement);
    }
  document.body.appendChild(this.domElement);
}

playerHand.prototype.roll = function() {
  for (var i = 0; i < this.dice.length; i++) {
    this.dice[i].roll();
  }
}


function winCheck() {
  if (playerRoll === 3 && computerRoll === 2) {

      winnerIs.innerHTML = "You win!";

  } else if (playerRoll === 2 && computerRoll === 1) {

      winnerIs.innerHTML = "You win!";

  } else if (playerRoll === 1 && computerRoll === 3) {

      winnerIs.innerHTML = "You win!";

  } else if (playerRoll ===  computerRoll) {

      winnerIs.innerHTML = "It's a draw!";

  } else {

     winnerIs.innerHTML = "You lose...";
  }
}

var player1 = new playerHand();






