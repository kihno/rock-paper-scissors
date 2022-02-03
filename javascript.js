const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, computerPlay()));
    });
});

function computerPlay() {
    const selectionArray = ['rock', 'paper', 'scissors'];
    const selection = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    return selection;
}

function playRound(playerSelection, computerSelection) {
    
     if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You Lose. Paper beats rock.";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You Win. Rock beats scissors.";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You Lose. Scissors beats paper.";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You Win. Paper beats rock.";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You Win. Scissors beats paper.";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You Lose. Rock beats scissors.";
    } else if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else {
        return "Please enter rock, paper, or scissors";
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
   for (round = 0; round < 5; round++) {
       let result = playRound(playerSelection, computerSelection);
       if (result.slice(0, 7) === "You Win") {
           userScore++;
       } else if (result.slice(0, 8) === "You Lose") {
           computerScore++;
       }
       console.log(result);
   }
   if (userScore > computerScore) {
       console.log("You Win the Game ", userScore, " to ", computerScore);
   } else if (userScore < computerScore) {
       console.log("You Lose the Game ", userScore, " to ", computerScore);
   } else if (userScore === computerScore) {
       console.log("Tie Game!");
   }
}

// game();