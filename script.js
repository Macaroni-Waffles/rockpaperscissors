//create an array
let choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = "ROCK";
const computerSelection = getComputerChoice(choices);
console.log(computerSelection);

//create a function that takes an array ("choices") and assigns to each element in the array a random number within the length of the array. Returns the choice, coverting to Upper case.
function getComputerChoice(choices) {
    return choices [Math.floor(Math.random() * choices.length)];
}

//create a function that takes input from the user. Converts to Upper case for comparison.
/*function getPlayerChoice() {
    let playerSelection = prompt("Please type either Rock, Paper, or Scissors: ").toUpperCase;
} */

//create a function that takes 2 arguments (computer choice and user choice). Compare both choices to determine winner. Output message of outcome.
function playRound (computerSelection, playerSelection) {
    if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        console.log("You win! Paper beats Rock")
    }
    else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        console.log("You win! Rock beats Scissors")
    }
    else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
    console.log("You win! Scissors beat Paper")
    }
    else if (computerSelection === playerSelection) {
    console.log("Samesies! Let's replay the round!")
    let round = round--;                                  //THIS ISN'T WORKING PROPERLY! NEED TO REPLAY ROUND, AND GET PROGRAM TO RUN 3 TIMES!
    }
    else {
        console.log("You lose this round!")
    }
}

for (let round = 0; round < 3; round++) {
    console.log(playRound(computerSelection, playerSelection));
}


 //   Account for TIES by re-playing the round.