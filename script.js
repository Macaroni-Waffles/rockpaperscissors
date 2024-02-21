//Create an array for computer selection
let choices = ["ROCK", "PAPER", "SCISSORS"];
let computerScore = 0;
let playerScore = 0;
let playerChoice;
let computerSelection;
let playerSelection;

//Function that takes an array ("choices") and assigns to each element in the array a random number within the length of the array. Returns the choice.
function getComputerChoice(choices) {
    return choices [Math.floor(Math.random() * choices.length)];
};


//Function that takes 2 arguments (computer selection and player selection). Compare both arguments to determine winner. Output a message of outcome.
function playRound (computerSelection, playerSelection) {
    playerSelection = playerChoice;
    computerSelection = getComputerChoice(choices);
    computerCurrentChoice.textContent = `The Computer selected ${computerSelection}`;
    playerCurrentChoice.textContent = `You selected ${playerSelection}`;
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        roundOutcome.textContent = "You win! Paper beats Rock";
        playerScore++;          //add to player score, this is used to track rounds as well
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        roundOutcome.textContent = "You win! Rock beats Scissors";
        playerScore++;
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        roundOutcome.textContent = "You win! Scissors beat Paper";
        playerScore++;
    }
    else if (computerSelection === playerSelection) {
        roundOutcome.textContent = "Samesies! Let's replay the round!";
    }                    
    else {
        roundOutcome.textContent = "You lose this round!";
        computerScore++;        //add to computer score, this is used to track rounds as well
    }
}

const container = document.querySelector('.container');
const roundOutcome = document.createElement('div');
const score = document.createElement('div');
const computerCurrentChoice = document.createElement('div');
const playerCurrentChoice = document.createElement('div');

const rockBtn = document.createElement('button');
rockBtn.classList.add('choiceBtn');
rockBtn.textContent = "ROCK";

const paperBtn = document.createElement('button');
paperBtn.classList.add('choiceBtn');
paperBtn.textContent = "PAPER";

const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('choiceBtn');
scissorsBtn.textContent = "SCISSORS";

const playAgainBtn = document.createElement('button');
playAgainBtn.classList.add('playAgain');
playAgainBtn.textContent = "Play Again?";


container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(playAgainBtn);
container.appendChild(roundOutcome);
container.appendChild(score);
container.appendChild(computerCurrentChoice);
container.appendChild(playerCurrentChoice);

roundOutcome.textContent = "";
score.textContent = `Let's play some Rock, Paper, Scissors! Best of 5...`;
score.style.fontSize = "30px";

const buttons = document.querySelectorAll('.choiceBtn');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
    playerChoice = e.target.textContent;
    if (computerScore <= 4 && playerScore <= 4) {
        score.textContent = `The current score is: Computer ${computerScore} - Player ${playerScore}`;
        playRound(computerSelection, playerSelection);
    }
    else {
        if (playerScore > computerScore) {
            score.textContent = `The current score is: Computer ${computerScore} - Player ${playerScore}`;
            alert(`YOU WIN!!! FINAL SCORE: COMPUTER ${computerScore} - PLAYER ${playerScore}`);
        }
        else {
            score.textContent = `The current score is: Computer ${computerScore} - Player ${playerScore}`;
            alert(`SORRY, YOU LOSE!!! FINAL SCORE: COMPUTER ${computerScore} - PLAYER ${playerScore}`);
        }
    }
    });
});

playAgainBtn.addEventListener('click', () => {
    location.reload();
});