const choices=  ["rock","paper","scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById(`computerDisplay`);
const resultDisplay = document.getElementById(`resultDisplay`);
const computerScoreDisplay= document.getElementById(`computerScoreDisplay`);
const playerScoreDisplay= document.getElementById(`playerScoreDisplay`);
const draws = document.getElementById("draws");

let playerScore=0;
let computerScore=0;
let draw = 0;

function playGame(playerChoice){
  const computerChoice = choices[Math.floor(Math.random()*3)];
  let result="";
  if (computerChoice === playerChoice){
    result="IT IS A TIE !"
    
  }
  else{
    switch (playerChoice) {
      case "rock":
        // code
        result= (computerChoice==="scissors")? "YOU WIN !" : "YOU LOSE !";
        break;
      case "paper":
        result =(computerChoice ==="scissors") ? "YOU WIN !" : "YOU LOSE !";
        break;
      case "scissors":
        result= (computerChoice==="paper")? "YOU WIN !" : "YOU LOSE !";
        break;
      
      
    }
  }
  playerDisplay.textContent = `Player : ${playerChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoice}`;
  resultDisplay.textContent = result;

switch (result) {
  case "YOU WIN !":
    // code
    playerScore++;
    playerScoreDisplay.textContent=`Player score: ${playerScore}`;
    break;
  case "YOU LOSE !":
    // code
    computerScore++;
    computerScoreDisplay.textContent=`Computer score: ${computerScore}`;
    break;
  case "IT IS A TIE !":
      draw++;
      draws.textContent = `Draws : ${draw}`;
      break;
    
  default:
    // code
}
  
}



