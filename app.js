// Rock beats Scissors
// Scissors beats Paper 
// Paper beats Rock 
// If they are the same, it's a tie
// Both user and PC start at 0
// User enters a choice and PC randomly selects a choice
// Whoever wins gets 1 point added to their score 
// After every game the user and PC's options restart 
// Game officially ends once one player reaches a max of 5 points

let computerScore = 0;
let playerScore = 0;
const userName = prompt("What is your name?")

if (userName === null) {
    alert("Goodbye!");
}

function getComputerChoice() {
    const computerSelection = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computerSelection.length);
    return computerSelection[randomIndex];
}
function winnerChoice(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `${userName} wins!`
    } else {
        computerScore++;
        return "Computer wins!"
    }
}

function playGame() {
    let playAgain = true;
    while (playAgain) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        if (playerSelection === null) {
            alert("Goodbye!");
            return;
        }
        const lowerCaseSelection = playerSelection.toLowerCase()
        if (["rock", "paper", "scissors"].includes(lowerCaseSelection)) {
            const computerSelection = getComputerChoice();
            const result = winnerChoice(playerSelection, computerSelection);
            console.log(`${userName}'s choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            console.log(result);
            console.log(`${userName}: ${playerScore} - Computer: ${computerScore}`);

            if (playerScore === 5 || computerScore === 5) {
                alert(playerScore === 5 ? `${userName} wins the game!` : `Computer wins the game!`);
                const playAgainResponse = prompt("Do you want to play again? (yes/no)");
                if (playAgainResponse === null) {
                    alert("Goodbye!");
                    playAgain = false;
                    return;
                } 

                if (playAgainResponse.toLowerCase() === "yes") {
                    playerScore = 0;
                    computerScore = 0;
                } else {
                    alert("Goodbye!");
                    playAgain = false;
                    return;
                }
            }
        } else {
            alert("Invalid choice. Please try again!")
        }
    }  
}

playGame();