const results = document.querySelector('#results');
const finalResult = document.querySelector('#finalResult');
const playerScore = document.querySelector('#playerScore');
const compScore = document.querySelector('#computerScore');
const para = document.createElement('p');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

function computerPlay() {
    const selectionArray = ['rock', 'paper', 'scissors'];
    const selection = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    return selection;
}

let userScore = 0;
let computerScore = 0;
playerScore.textContent = "Player Score: " + userScore;
compScore.textContent = "Computer Score: " + computerScore;

function playRound(playerSelection, computerSelection) {
    
     if ((playerSelection == "rock") && (computerSelection == "paper")) {
        para.textContent = "You Lose. Paper beats rock.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = "Computer Score: " + ++computerScore;
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        para.textContent = "You Win. Rock beats scissors.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = "Player Score: " + ++userScore;
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        para.textContent = "You Lose. Scissors beats paper.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = "Computer Score: " + ++computerScore;
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        para.textContent = "You Win. Paper beats rock.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = "Player Score: " + ++userScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        para.textContent = "You Win. Scissors beats paper.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = "Player Score: " + ++userScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        para.textContent = "You Lose. Rock beats scissors.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = "Computer Score: " + ++computerScore;
    } else if (playerSelection === computerSelection) {
        para.textContent = "It's a Tie!";
        para.setAttribute('id', 'roundResult');
        results.append(para);
    } else {
        return "Please enter rock, paper, or scissors";
    }
    if (userScore === 5 || computerScore === 5) {
        if (userScore === 5) {
            para.textContent = `You Win the Game ${userScore} to ${computerScore}`;
            finalResult.append(para);
            buttons.forEach((button) => {
                button.disabled = true;
            });
        } else {
            para.textContent = `You Lose the Game ${userScore} to ${computerScore}`;
            buttons.forEach((button) => {
                button.disabled = true;
            });
            finalResult.append(para);
        }
    }
}

if (userScore === 5 || computerScore === 5) {
    if (userScore === 5) {
        para.textContent = "You Win the Game ", userScore, " to ", computerScore;
        finalResult.append(para);
        document.buttons.disabled = true;
    } else {
        para.textContent = "You Lose the Game ", userScore, " to ", computerScore;
        document.buttons.disabled = true;
        finalResult.append(para);
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
        para.textContent = result;
        para.setAttribute('id', 'roundResult');
        results.append(para);
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