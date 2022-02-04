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
playerScore.textContent = userScore;
compScore.textContent = computerScore;

function playRound(playerSelection, computerSelection) {
    
     if ((playerSelection == "rock") && (computerSelection == "paper")) {
        para.textContent = "Silly human. Paper beats rock.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = ++computerScore;
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        para.textContent = "You Win this round. Rock beats scissors.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = ++userScore;
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        para.textContent = "Pathetic. Scissors beats paper.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = ++computerScore;
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        para.textContent = "You can have this one. Paper beats rock.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = ++userScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        para.textContent = "I let you win this round. Scissors beats paper.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        playerScore.textContent = ++userScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        para.textContent = "Inferior. Rock beats scissors.";
        para.setAttribute('id', 'roundResult');
        results.append(para);
        compScore.textContent = ++computerScore;
    } else if (playerSelection === computerSelection) {
        para.textContent = "It's a Tie!";
        para.setAttribute('id', 'roundResult');
        results.append(para);
    } else {
        return "Please enter rock, paper, or scissors";
    }
    
    if (userScore === 5) {
        para.textContent = `You Win the game ${userScore} to ${computerScore}. Refresh to play again.`;
        finalResult.append(para);
        buttons.forEach((button) => {
            button.disabled = true;
        });
    } else if (computerScore === 5) {
        para.textContent = `You Lose the game ${userScore} to ${computerScore}. Refresh to play again.`;
        finalResult.append(para);
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }  
}
