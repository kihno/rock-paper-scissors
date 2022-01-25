/* 
Computer randomly selects rock, paper, or scissors
Player inputs rock, paper or scissors
If player select equals computer selection, its a draw
If player selects rock, computer wins with paper and loses with scissors
If player selects paper, computer wins with scissors and loses with rock
If player selects scissors, computer wins with rock and loses with paper

Play 5 rounds
If player wins >= 3, player wins
If Player wins <= 2, player loses
*/



function computerPlay() {
    const selectionArray = ['rock', 'paper', 'scissors'];
    let computerSelection = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    return computerSelection;
}

const computerSelection = computerPlay();
const playerSelection = prompt("rock, paper, or scissors?", "");

function playRound(playerSelection, computerSelection) {
     if ((playerSelection.toLowerCase() === "rock") && (computerSelection == "paper")) {
        return "You Lose! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === "rock") && (computerSelection == "scissors")) {
        return "You Win! Rock beats scissors.";
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection == "scissors")) {
        return "You Lose! Scissors beat paper.";
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection == "rock")) {
        return "You Win! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection == "paper")) {
        return "You Win! Scissors beat paper.";
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection == "rock")) {
        return "You Lose! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a Tie!";
    } else {
        alert("Please enter rock, paper, or scissors");
    }
}

function game() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

console.log(playRound(playerSelection, computerSelection));