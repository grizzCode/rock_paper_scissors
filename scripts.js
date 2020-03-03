
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
}

function computerWin() {
  document.getElementById('result').innerHTML = `Computer Wins...`;
}

function playGame(player, computer) {
  getPlayer(player)
  if (player === computer) {
    document.getElementById('result').innerHTML = `Tie Game!`;
    return 
  }
  if (player === "Paper") {
    if (computer === "Rock") {  
      playerWin();
    } else if (computer === "Scissors") {   
      computerWin();
    }
  }
  if (player === "Scissors") {
      if (computer === "Rock") {
        computerWin();
      } else {
          if (computer === "Paper") {
            playerWin();
          }
      }
    }
  if (player === "Rock") {
    if (computer === "Paper") {
        computerWin();
    } else {
        if (computer === "Scissors") {
          playerWin();
        }
    }
  }
}


document.getElementById("rock").onclick = function() {playGame("Rock", getComputer())};
document.getElementById("paper").onclick = function() {playGame("Paper", getComputer())};
document.getElementById("scissors").onclick = function() {playGame("Scissors", getComputer())};


