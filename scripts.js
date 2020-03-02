
let arr = ["Rock", "Paper", "Scissors"];

function getComputer() {
let computer = arr[Math.floor(Math.random()*arr.length)];
document.getElementById('computer').innerHTML = `Computer: ${computer}`
return computer
}

function playGame(player, computer) {
  if (player === computer) {
    console.log("Tie")
    return "Tie"
  }
  if (player === "Paper") {
    if (computer === "Rock") {  
      console.log("Player wins!"); 
      return 
    } else if (computer === "Scissors") {   
      console.log("Computer wins...");  
      return 
    }
  }
  if (player === "Scissors") {
      if (computer === "Rock") {
        console.log("Computer wins...");  
        return "Computer wins.";
      } else {
          if (computer === "Paper") {
            console.log("Player wins!"); 
            return "Player wins!";
          }
      }
    }
  else if (player === "Rock") {
    if (computer === "Paper") {
        console.log("Computer wins...");
        return;
    } else {
        if (computer === "Scissors") {
          console.log("Player wins!"); 
          return;
        }
    }
  }
}


document.getElementById("rock").onclick = function() {playGame("Rock", getComputer())};
document.getElementById("paper").onclick = function() {playGame("Paper", getComputer())};
document.getElementById("scissors").onclick = function() {playGame("Scissors", getComputer())};

document.getElementById('computer').innerHTML = `Computer: ${computer}`
