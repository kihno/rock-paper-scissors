/* 
Player inputs rock, paper, or scissors
Computer randomly selects rock, paper, or scissors
If player select equals computer selection, its a draw
If player selects rock, computer wins with paper and loses with scissors
If player selects paper, computer wins with scissors and loses with rock
If player selects scissors, computer wins with rock and loses with paper
*/

let playerSelection = prompt("rock, paper, or scissors?", "");

function computerPlay() {
    const selectionArray = ['rock', 'paper', 'scissors'];
    let computerSelection = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    return computerSelection;
}

let computerSelection = computerPlay();

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        alert("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You Lose!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You Win!");
    }
}