// Rock beats Scissors
// Scissors beats Paper 
// Paper beats Rock 
// Both user and PC start at 0
// User enters a choice and PC randomly selects a choice
// Whoever wins gets 1 point added to their score 
// After every game the user and PC's options restart 
// Game officially ends once one player reaches a max of 5 points

let computerScore = 0;
let playerScore = 0;
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = ["rock", "paper", "scissors"]

function getComputerChoice() {
    console.log(computerSelection[(Math.floor(Math.random() * computerSelection.length))]);
}
getComputerChoice()
console.log(playerSelection)