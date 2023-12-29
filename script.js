//create an array
let choices = ["Rock", "Paper", "Scissors"];

//create a function that takes an array ("choices") and assigns to each element in the array a random number within the length of the array. Returns the choice, coverting to Upper case.
function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)].toUpperCase();
//    console.log(getComputerChoice(choices));
}

/*create a function that takes input from the user. Converts to Upper case for comparison.
function getPlayerChoice() {
    let playerSelection = prompt("Please type either Rock, Paper, or Scissors: ").toUpperCase;
} */

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

//create a function that takes 2 arguments (computer choice and user choice). Compare both choices to determine winner. Output message of outcome.
function playRound (computerSelection, playerSelection) {
    if computerSelection === "Rock" && playerSelection === "Paper";
        console.log("You win! Paper beats Rock");
    else if computerSelection === "Scissors" && playerSelection === "Rock";
        console.log("You win! Rock beats Scissors");
    else if computerSelection === "Paper" && playerSelection === "Scissors";
    console.log("You win! Scissors beat Paper");
    else console.log("You lose this round!");
}


console.log(playRound(computerSelection, playerSelection));


//Randomly generate either Rock, Paper or Scissors
//Have user enter either Rock, Paper or Scissors (not-case sensitive)
//Single round function should take 2 parameters (computer and user choices)



/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
    Account for TIES by re-playing the round.*/
