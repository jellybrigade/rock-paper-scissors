function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("Rock");
const paperButton = document.getElementById("Paper");
const scissorsButton = document.getElementById("Scissors");

const resultDisplay = document.getElementById("resultDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const winnerDisplay = document.getElementById("winnerDisplay");
const resetButton = document.getElementById("resetButton");

function updateScore() {
    scoreDisplay.textContent = "Player: " + playerScore + " - Computer: " + computerScore;
    
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    
    if (playerScore === 5) {
        winnerDisplay.textContent = "Congratulations! You won the game!";
    } else {
        winnerDisplay.textContent = "Game over! The computer won the game!";
    }
    
    resetButton.style.display = "block";
}

resetButton.addEventListener("click", function() {
    playerScore = 0;
    computerScore = 0;
    
    resultDisplay.textContent = "";
    winnerDisplay.textContent = "";
    updateScore();
    
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    
    resetButton.style.display = "none";
});

updateScore();

rockButton.addEventListener("click", function() {
    playGame("Rock");
});

paperButton.addEventListener("click", function() {
    playGame("Paper");
});

scissorsButton.addEventListener("click", function() {
    playGame("Scissors");
});

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    
    resultDisplay.textContent = "You chose: " + playerChoice + ", Computer chose: " + computerChoice;
    
    if (playerChoice === computerChoice) {
        resultDisplay.textContent += " - It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerScore++;
        resultDisplay.textContent += " - You win!";
    } else {
        computerScore++;
        resultDisplay.textContent += " - Computer wins!";
    }
    
    updateScore();
}