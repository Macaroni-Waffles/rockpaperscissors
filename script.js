//Create an array for computer selection
let choices = ["ROCK", "PAPER", "SCISSORS"];

//Play 3 rounds
function game() {
    for (let round = 0; round < 3; round++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(choices);
        console.log(playRound(computerSelection, playerSelection));
    }
}


//Function that takes 2 arguments (computer selection and player selection). Compare both arguments to determine winner. Output a message of outcome.
function playRound (computerSelection, playerSelection) {
    console.log(`Computer: ${computerSelection}`);
    console.log(`Player: ${playerSelection}`);
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        console.log("You win! Paper beats Rock");
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        console.log("You win! Rock beats Scissors");
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        console.log("You win! Scissors beat Paper");
    }
    else if (computerSelection === playerSelection) {
        console.log("Samesies! Let's replay the round!");
    }                    
    else {
        console.log("You lose this round!");
    }
}


//Function that takes an array ("choices") and assigns to each element in the array a random number within the length of the array. Returns the choice.
function getComputerChoice(choices) {
    return choices [Math.floor(Math.random() * choices.length)];
    }

//Function that takes input from the user. Converts to Upper case for comparison.
    function getPlayerChoice() {
    return playerChoice = prompt("Please type either Rock, Paper, or Scissors: ").toUpperCase();
    }



 //   Account for TIES by re-playing the round.