function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        computerChoice = "rock";
    }
    else if (computerChoice === 1){
        computerChoice = "paper";
    }
    else if (computerChoice === 2){
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: rock, paper, or scissors ");
    return humanChoice.toLowerCase();
}

let humanScore = 0
let computerScore = 0

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock crushes scissors.");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper covers rock.");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors cut paper.");
        humanScore++;
    }
    else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".");
        computerScore++;
    }
}