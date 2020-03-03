
let arr = ["Rock", "Paper", "Scissors"];
let playerWins = 0
let computerWins = 0

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
  return computer
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
  playerWins++
  document.getElementById('playerScore').innerHTML = `Score: ${playerWins}`
}

function computerWin() {
  document.getElementById('result').innerHTML = `Computer Wins...`;
  computerWins++
  document.getElementById('computerScore').innerHTML = `Score: ${computerWins}`
}

function playGame(player, computer) {
  getPlayer(player)

  if (player === computer) {
    document.getElementById('result').innerHTML = `Tie Game!`;
  }
  else if (player === "Rock") {
    if (computer === "Paper") {
      computerWin()
    }
    else {
      playerWin()
    }
  }
  else if (player === "Paper") {
    if (computer === "Scissors") {
      computerWin()
    }
    else {
      playerWin()
    }
  }
  else if (player === "Scissors") {
    if (computer === "Rock") {
      computerWin()
    }
    else {
      playerWin()
    }
  }
}



document.getElementById("rock").onclick = function() {playGame("Rock", getComputer())};
document.getElementById("paper").onclick = function() {playGame("Paper", getComputer())};
document.getElementById("scissors").onclick = function() {playGame("Scissors", getComputer())};


