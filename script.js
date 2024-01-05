//Create an array for computer selection
let choices = ["ROCK", "PAPER", "SCISSORS"];
let round = 0;
let computerScore = 0;
let playerScore = 0;

//Function that takes an array ("choices") and assigns to each element in the array a random number within the length of the array. Returns the choice.
function getComputerChoice(choices) {
    return choices [Math.floor(Math.random() * choices.length)];
    }

//Function that takes input from the user. Converts to Upper case for comparison.
function getPlayerChoice() {
    return playerChoice = prompt("Please type either Rock, Paper, or Scissors: ").toUpperCase();
    }

//Function that takes 2 arguments (computer selection and player selection). Compare both arguments to determine winner. Output a message of outcome.
function playRound (computerSelection, playerSelection) {
    console.log(`Computer: ${computerSelection}`);
    console.log(`Player: ${playerSelection}`);
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        console.log("You win! Paper beats Rock");
        playerScore++;          //add to player score, this is used to track rounds as well
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        console.log("You win! Rock beats Scissors");
        playerScore++;
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        console.log("You win! Scissors beat Paper");
        playerScore++;
    }
    else if (computerSelection === playerSelection) {
        console.log("Samesies! Let's replay the round!");
        round--;        //replay the round by decrementing round total
    }                    
    else {
        console.log("You lose this round!");
        computerScore++;        //add to computer score, this is used to track rounds as well
    }
}

//Function to play 5 rounds, replay any tied rounds, show a final score
function game() {
    while (round <= 4) {        //play no more than 5 rounds
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(choices);
        playRound(computerSelection, playerSelection);
        console.log(`The score is: Computer ${computerScore} - Player ${playerScore}`);
        round = computerScore + playerScore;        //keep track of rounds played
    }
    console.log(`FINAL SCORE: COMPUTER ${computerScore} - PLAYER ${playerScore}`);
}