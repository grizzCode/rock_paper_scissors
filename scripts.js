
let arr = ["Rock", "Paper", "Scissors"];
playerScore = []
computerScore = []

function getComputer() {
let computer = arr[Math.floor(Math.random()*arr.length)];
img = document.getElementById('compImg')
  if (computer === "Rock") {
    img.setAttribute('src', 'images/rock.jpg')
  }
  else if (computer === "Paper") {
    img.setAttribute('src', 'images/paper.jpg') 
  }
  else {
    img.setAttribute('src', 'images/scissors.jpg') 
  }
}

function getPlayer(choice) {
  img = document.getElementById('playerImg')
  if (choice === "Rock") {
    img.setAttribute('src', 'images/rock.jpg')
  }
  else if (choice === "Paper") {
    img.setAttribute('src', 'images/paper.jpg') 
  }
  else {
    img.setAttribute('src', 'images/scissors.jpg') 
  }
}



function playerWin() {
  document.getElementById('result').innerHTML = `Player Wins!!`;
  console.log("player")
}

function computerWin() {
  document.getElementById('result').innerHTML = `Computer Wins...`;
  console.log("computer")
}

function playGame(player, computer) {
  getPlayer(player)
console.log(player)
switch (player) {
  case "Rock": 
    console.log("rock");
    break;
  case "Paper":
    console.log("paper");
    break;
  case "Scissors":
    console.log("scissors");
    break;
}

}

document.getElementById("rock").onclick = function() {playGame("Rock", getComputer())};
document.getElementById("paper").onclick = function() {playGame("Paper", getComputer())};
document.getElementById("scissors").onclick = function() {playGame("Scissors", getComputer())};


